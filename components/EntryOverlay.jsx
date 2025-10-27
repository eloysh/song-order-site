"use client";
import { useEffect } from "react";

export default function EntryOverlay({ audioSrc = "/sounds/enter.wav", onEnter = () => {} }) {
  useEffect(() => {
    // add class to enable reveal animations
    document.documentElement.classList.add("js");
    return () => document.documentElement.classList.remove("js");
  }, []);

  const enter = async () => {
    try {
      const a = new Audio(audioSrc);
      a.volume = 0.75;
      await a.play().catch(() => {});
    } catch {}
    try { localStorage.setItem("entered", "1"); } catch {}
    onEnter();
  };

  return (
    <section className="min-h-[88vh] grid place-items-center px-4">
      <div className="card-glass p-8 md:p-10 max-w-2xl text-center">
        <div className="text-4xl md:text-5xl font-semibold">
          <span className="text-sky-400">AI</span> Memories
        </div>
        <p className="text-slate-300 mt-3">Память, которая оживает</p>
        <p className="text-slate-300 mt-4">
          Превращаю ваши фотографии в трогательные видео-истории и пишу песни под вашу историю.
          Нажмите «Вход», услышите аккорд — и начнётся магия ✨
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button aria-label="Войти" className="btn-primary w-full sm:w-auto" onClick={enter}>Вход</button>
          <button aria-label="Пропустить" className="btn-ghost w-full sm:w-auto" onClick={() => { try { localStorage.setItem("entered","1"); } catch{}; onEnter(); }}>Пропустить</button>
        </div>
      </div>
    </section>
  );
}
