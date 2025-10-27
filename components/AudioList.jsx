"use client";
import { useEffect, useRef, useState } from "react";

function formatTime(s = 0) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

export default function AudioList({ tracks = [] }) {
  const audio = useRef(null);
  const [current, setCurrent] = useState(null); // index
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    const onTime = () => setTime(a.currentTime);
    const onDur = () => setDuration(a.duration || 0);
    const onEnd = () => { setPlaying(false); setTime(0); };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onDur);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onDur);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  useEffect(() => {
    // ensure audio src updates when current track changes
    const a = audio.current;
    if (!a) return;
    if (current == null) {
      a.pause();
      a.src = "";
      setPlaying(false);
      setTime(0);
      setDuration(0);
      return;
    }
    const src = tracks[current]?.src;
    if (!src) return;
    a.src = src;
    a.load();
    a.play().then(() => setPlaying(true)).catch(() => {});
  }, [current]);

  const toggle = (idx) => {
    if (current === idx) {
      const a = audio.current;
      if (!a) return;
      if (a.paused) { a.play(); setPlaying(true); }
      else { a.pause(); setPlaying(false); }
    } else {
      setCurrent(idx);
    }
  };

  const seek = (e) => {
    const a = audio.current;
    if (!a) return;
    const x = e.target.valueAsNumber;
    a.currentTime = x;
    setTime(x);
  };

  const share = async (t) => {
    const url = location.origin + t.src;
    const text = `${t.title} — демо от AI Memories\n${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: t.title, text, url }); return; } catch {}
    }
    try { await navigator.clipboard.writeText(text); alert("Ссылка скопирована в буфер обмена"); }
    catch { prompt("Скопируйте ссылку", url); }
  };

  return (
    <div className="grid gap-3">
      <audio ref={audio} preload="none" aria-hidden="true" />
      {tracks.map((t, i) => (
        <div key={i} className="card-glass p-4 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-4">
            <button onClick={() => toggle(i)} className="btn-ghost">{current === i && playing ? "⏸" : "▶"}</button>
            <div className="font-medium">{t.title}</div>
          </div>

          <div className="flex-1 w-full md:mx-4">
            {current === i ? (
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  value={current === i ? time : 0}
                  onChange={seek}
                  className="w-full"
                  aria-label={`Ползунок воспроизведения для ${t.title}`}
                />
                <div className="text-xs text-slate-400 w-20 text-right">{formatTime(current === i ? time : 0)} / {formatTime(duration)}</div>
              </div>
            ) : (
              <div className="text-sm text-slate-400">Нажмите ▶, чтобы прослушать</div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a className="text-sky-300 hover:underline" href={t.src} download aria-label={`Скачать ${t.title}`}>скачать</a>
            <button className="text-sky-300 hover:underline" onClick={() => share(t)} aria-label={`Поделиться ${t.title}`}>поделиться</button>
          </div>
        </div>
      ))}
    </div>
  );
}
