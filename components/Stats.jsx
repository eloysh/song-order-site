"use client";
import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const [numbers, setNumbers] = useState({ photos: 1200, videos: 350, ontime: 98 });
  const rootRef = useRef(null);
  const ranRef = useRef(false);

  useEffect(() => {
    if (!rootRef.current || ranRef.current) return;
    
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !ranRef.current) {
            ranRef.current = true;
            
            const start = Date.now();
            const duration = 1200;
            const from = { photos: 0, videos: 0, ontime: 0 };
            
            const animate = () => {
              const elapsed = Date.now() - start;
              const progress = Math.min(1, elapsed / duration);
              
              setNumbers({
                photos: Math.round(from.photos + (1200 - from.photos) * progress),
                videos: Math.round(from.videos + (350 - from.videos) * progress),
                ontime: Math.round(from.ontime + (98 - from.ontime) * progress),
              });
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            animate();
          }
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(rootRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="reveal py-12" ref={rootRef}>
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Сколько уже сделано
      </h2>
      
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard number={numbers.photos + "+"} label="оживлённых фото" />
        <StatCard number={numbers.videos + "+"} label="смонтированных роликов" />
        <StatCard number={numbers.ontime + "%"} label="заказов в срок" />
      </div>
    </section>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="card-glass p-6 text-center">
      <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-600">
        {number}
      </div>
      <div className="mt-2 text-slate-300">{label}</div>
    </div>
  );
}
