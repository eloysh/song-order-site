"use client";
import { useRef, useEffect } from "react";

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  afterVideoSrc,
  afterPoster,
  title,
  caption,
}) {
  const wrap = useRef(null);
  const handle = useRef(null);
  const afterMedia = useRef(null);

  useEffect(() => {
    const el = wrap.current,
      h = handle.current,
      m = afterMedia.current;
    if (!el || !h || !m) return;

    let drag = false;

    const setPct = (pct) => {
      pct = Math.max(0, Math.min(100, pct));
      try { m.style.clipPath = `inset(0 ${100 - pct}% 0 0)`; } catch {}
      h.style.left = `${pct}%`;
    };

    const start = () => (drag = true);
    const stop = () => (drag = false);

    const move = (e) => {
      if (!drag) return;
      const r = el.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      setPct((x / r.width) * 100);
    };

    el.addEventListener("mousedown", start);
    window.addEventListener("mouseup", stop);
    window.addEventListener("mousemove", move);

    el.addEventListener("touchstart", start, { passive: true });
    window.addEventListener("touchend", stop);
    window.addEventListener("touchmove", move, { passive: true });

    setPct(50);

    let io;
    if (m && m.tagName === "VIDEO") {
      try {
        m.muted = true;
        m.playsInline = true;
        m.loop = true;
        m.autoplay = true;
        m.play().catch(() => {});
        io = new IntersectionObserver(
          (es) => {
            es.forEach((e) => {
              if (e.isIntersecting) m.play().catch(() => {});
              else m.pause();
            });
          },
          { threshold: 0.25 }
        );
        io.observe(el);
      } catch {}
    }

    return () => {
      el.removeEventListener("mousedown", start);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("mousemove", move);
      el.removeEventListener("touchstart", start);
      window.removeEventListener("touchend", stop);
      window.removeEventListener("touchmove", move);
      if (io) io.disconnect();
    };
  }, []);

  return (
    <figure className="card-glass p-4 rounded-2xl reveal">
      <figcaption className="text-left mb-3">
        {title && <div className="text-lg font-semibold text-sky-400">{title}</div>}
        {caption && <div className="text-sm text-slate-400">{caption}</div>}
      </figcaption>

      <div ref={wrap} className="relative beforeafter select-none cursor-col-resize rounded-lg overflow-hidden">
        <img src={beforeSrc} alt="До" className="w-full h-full object-cover" />

        {afterVideoSrc ? (
          <video ref={afterMedia} className="w-full h-full object-cover" poster={afterPoster} playsInline muted loop preload="none">
            <source src={afterVideoSrc} type="video/mp4" />
          </video>
        ) : (
          <img ref={afterMedia} src={afterSrc} alt="После" className="w-full h-full object-cover" style={{ clipPath: "inset(0 50% 0 0)" }} />
        )}

        <div ref={handle} className="absolute top-0 bottom-0 w-[2px] bg-white/60" style={{ left: "50%" }} />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-2 rounded-full bg-sky-500 text-white">⇆</div>
      </div>
    </figure>
  );
}