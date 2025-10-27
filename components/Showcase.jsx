"use client";
import { useEffect, useRef, useState } from "react";

function ImgFallback({ src, alt, fallback, className }) {
  const [s, setS] = useState(src);
  return (
    <img
      src={s}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => fallback && setS(fallback)}
      draggable={false}
    />
  );
}

function Frame({ ratio = "1:1", className = "", children, boxRef }) {
  let pt = 100;
  try {
    const [w, h] = ratio.split(":").map(Number);
    if (w > 0 && h > 0) pt = (h / w) * 100;
  } catch {}
  return (
    <div ref={boxRef} className={`relative ${className}`} style={{ paddingTop: `${pt}%` }}>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}

function Slider({ before, after, afterVideo = null, afterPoster = null, label, ratio = "1:1" }) {
  const [x, setX] = useState(50);
  const [videoError, setVideoError] = useState(false);
  const [muted, setMuted] = useState(true);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false); // load source only when needed
  const videoRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    let active = false;
    const pct = (clientX) => {
      const r = el.getBoundingClientRect();
      return Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    };
    const onDown = (e) => { active = true; setX(pct(e.clientX)); };
    const onMove = (e) => { if (!active) return; e.preventDefault(); setX(pct(e.clientX)); };
    const onUp = () => { active = false; };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        setInView(e.isIntersecting);
        // when element becomes visible, mark video for loading (but still muted)
        if (e.isIntersecting) setLoadVideo(true);
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative group rounded-2xl overflow-hidden card-glass">
      <Frame ratio={ratio} boxRef={boxRef}>
        <ImgFallback src={before} fallback="/demo_before_bw.jpg" alt={props.beforeAlt || "До"} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - x}% 0 0)` }}>
          {afterVideo && !videoError ? (
            <>
              {!loadVideo && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-200 to-slate-100" />}
              {loadVideo && (
                <div className="absolute inset-0">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src={afterVideo}
                    poster={afterPoster}
                    autoPlay={true}
                    loop
                    muted={muted}
                    playsInline
                    preload="metadata"
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onError={() => setVideoError(true)}
                  />

                  {/* Controls overlay: unmute / play with sound. */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {!playing || muted ? (
                      <button
                        className="pointer-events-auto bg-black/70 text-white px-4 py-2 rounded-full shadow-lg"
                        onClick={async (e) => {
                          e.stopPropagation();
                          try {
                            // ensure video is loaded
                            if (videoRef.current && videoRef.current.paused) {
                              await videoRef.current.play();
                            }
                            // unmute on explicit user gesture
                            if (videoRef.current) {
                              videoRef.current.muted = false;
                              setMuted(false);
                              // try play again with sound (gesture allows this)
                              await videoRef.current.play();
                            }
                          } catch (err) {
                            // ignore play errors
                          }
                        }}
                        aria-label="Включить звук и воспроизвести"
                      >
                        ▶️ Включить звук
                      </button>
                    ) : null}
                  </div>
                </div>
              )}
            </>
          ) : (
            <ImgFallback src={after} fallback="/demo_after_color.jpg" alt={props.afterAlt || "После"} className="absolute inset-0 w-full h-full object-cover" />
          )}
        </div>

        <div className="absolute top-0 bottom-0 w-px bg-white/80" style={{ left: `${x}%` }} aria-hidden />
        <div className="absolute top-1/2 -translate-y-1/2" style={{ left: `${x}%` }}>
          <div className="-translate-x-1/2 p-2 rounded-full bg-sky-500 text-white">⇆</div>
        </div>

        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2/3">
          <input aria-label="Слайдер сравнения" type="range" min={0} max={100} value={x} onChange={(e) => setX(Number(e.target.value))} className="w-full" />
        </div>

        <div className="absolute inset-x-1 bottom-1 pointer-events-none">
          <div className="mx-auto w-full rounded-xl bg-white/10 text-white/90 backdrop-blur-sm border border-white/10 shadow px-1 py-1">
            <span className="block text-center text-xs sm:text-sm font-medium leading-tight">{label}</span>
          </div>
        </div>
      </Frame>
    </div>
  );
}

export default function Showcase() {
   const items = [
    { 
      before: "/works/01_before.jpg", 
      after: "/works/01_after.jpg", 
      label: "Песня для свадебного клипа",
      beforeAlt: "Оригинальный клип без авторской музыки",
      afterAlt: "Клип с уникальным саундтреком"
    },
    { 
      before: "/works/02_before.jpg", 
      after: "/works/02_after.jpg", 
      label: "Авторский трек для рекламы",
      beforeAlt: "Рекламный ролик без музыки",
      afterAlt: "Ролик с профессиональным саундтреком"
    },
    { 
      before: "/works/03_before.jpg", 
      after: "/works/03_after.jpg", 
      label: "Саундтрек для YouTube",
      beforeAlt: "YouTube видео без музыкального сопровождения",
      afterAlt: "Видео с авторской композицией"
    },
    { 
      before: "/works/04_before.jpg", 
      after: "/works/04_after.jpg", 
      label: "Музыка для презентации",
      beforeAlt: "Презентационное видео без звука",
      afterAlt: "Презентация с фоновой музыкой"
    },
    { 
      before: "/works/05_before.jpg", 
      after: "/works/05_after.jpg", 
      label: "Песня для Instagram",
      beforeAlt: "Instagram Reels без музыки",
      afterAlt: "Reels с авторским треком"
    },
    { 
      before: "/works/011_before.jpg", 
      after: "/works/011_after.jpg", 
      label: "Корпоративный гимн",
      beforeAlt: "Видео компании без музыки",
      afterAlt: "Корпоративное видео с гимном"
    },
  ];

  const vertical = [
    { 
      before: "/works/talk_before.jpg", 
      after: "/works/talk_after.jpg", 
      afterVideo: "/works/talk_after.mp4", 
      afterPoster: "/works/talk_after_poster.jpg", 
      label: "Песня для TikTok",
      beforeAlt: "TikTok видео без звука",
      afterAlt: "TikTok с авторской песней"
    },
    { 
      before: "/works/06_before.jpg",   
      after: "/works/06_after.jpg",   
      afterVideo: "/works/06_after.mp4",   
      afterPoster: "/works/06_after_poster.jpg",   
      label: "Музыка для продающего видео",
      beforeAlt: "Продающее видео без музыки",
      afterAlt: "Видео с продающим саундтреком"
    },
  ];

  return (
    <section id="showcase" className="reveal">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">Примеры наших работ — авторская музыка и песни</h2>
      <p className="text-center text-slate-400 mb-4">Готовые саундтреки и песни для разных типов видео: реклама, YouTube, презентации, свадьбы</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((it, i) => <Slider key={i} {...it} ratio="1:1" />)}
        {vertical.map((it, i) => <Slider key={`v${i}`} {...it} ratio="9:16" />)}
      </div>
    </section>
  );
}