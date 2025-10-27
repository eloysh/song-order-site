"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import WhatsAppButton from "../components/WhatsAppButton";
import SEOJsonLd from "../components/SEOJsonLd";
import EntryOverlay from "../components/EntryOverlay";
import BrandLogo from "../components/BrandLogo";

// Dynamic imports to reduce initial JS bundle on mobile/first paint
const AudioList = dynamic(() => import('../components/AudioList'), { ssr: false, loading: () => <div className="text-center text-slate-500 py-6">Загрузка треков…</div> });
const Pricing = dynamic(() => import('../components/Pricing'), { ssr: false, loading: () => <div className="text-center text-slate-500 py-6">Загрузка цен…</div> });
const BriefWizard = dynamic(() => import('../components/BriefWizard'), { ssr: false, loading: () => <div className="text-center text-slate-500 py-6">Загрузка брифа…</div> });
const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false, loading: () => <div className="text-center text-slate-500 py-6">Загрузка формы…</div> });
const SocialShare = dynamic(() => import('../components/SocialShare'), { ssr: false, loading: () => null });
const BeforeAfterHero = dynamic(() => import('../components/BeforeAfterHero'), { ssr: false });
const Stats = dynamic(() => import('../components/Stats'), { ssr: false });
const HowToOrder = dynamic(() => import('../components/HowToOrder'), { ssr: false });
const TwoWorksVideo = dynamic(() => import('../components/TwoWorksVideo'), { ssr: false });
const Scenes = dynamic(() => import('../components/Scenes'), { ssr: false });
const Showcase = dynamic(() => import('../components/Showcase'), { ssr: false, loading: () => null });

const Calculator = dynamic(() => import('../components/Calculator'), { ssr: false, loading: () => null });
const FAQ = dynamic(() => import('../components/FAQ'), { ssr: false, loading: () => null });
const BackgroundFX = dynamic(() => import('../components/BackgroundFX'), { ssr: false });

export default function Page() {
  // start as false on both server and client to avoid hydration mismatch
  const [entered, setEntered] = useState(false);

  // after mount, read persisted flag from localStorage and update — this runs only on client
  useEffect(() => {
    try {
      const v = localStorage.getItem('entered') === '1';
      if (v) setEntered(true);
    } catch {}
  }, []);

  // If not entered, show overlay


  useEffect(() => {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>e.isIntersecting && e.target.classList.add("show"));
    }, { threshold: .2 });
    document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
    return () => io.disconnect();
  }, []);

  const tracks = [
    { title: "С днем рождения, Вика ", src: "/songs/song1.mp3" },
    { title: "Ромашковая любовь", src: "/songs/song2.mp3" },
    { title: "Креповая свадьба", src: "/songs/song3.mp3" },
  ];

  const base = "https://aimemories.ru";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AI Memories",
      url: base,
      logo: base + "/images/og-cover.jpg"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Песня на заказ",
      areaServed: "RU",
      provider: { "@type": "LocalBusiness", name: "AI Memories" },
      url: base
    }
  ];

  const enter = async () => {
    try {
      const a = new Audio("/sounds/enter.wav");
      a.volume = 0.7;
      await a.play().catch(()=>{});
    } catch {}
    try { localStorage.setItem('entered', '1'); } catch {}
    setEntered(true);
  };

  return (
    <main className="min-h-screen">
      <SEOJsonLd data={schema} />

      {!entered && (
        <EntryOverlay audioSrc="/sounds/enter.wav" onEnter={() => enter()} />
      )}

      {entered && (
        <>
          <BackgroundFX />
          
          <section className="container mx-auto px-4 py-16 reveal">
            <BrandLogo size={160} withWordmark className="mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-semibold text-center">
              Оживляем воспоминания
            </h1>
            <p className="text-center text-slate-300 mt-3 max-w-3xl mx-auto">
              Превращаем ваши фотографии в трогательные видео-истории и пишем песни под вашу историю
            </p>
            <div className="mt-6 text-center">
              <WhatsAppButton className="mx-auto" />
            </div>
          </section>

          <div className="container mx-auto px-4 py-12 reveal">
            <BeforeAfterHero />
          </div>

          <Stats />

          <div className="container mx-auto px-4 py-12 reveal">
            <TwoWorksVideo />
          </div>

      

          <div className="container mx-auto px-4 py-12 reveal">
            <Showcase />
          </div>

          <section className="container mx-auto px-4 py-12 reveal">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Демо-треки</h2>
            <AudioList tracks={tracks} />
          </section>

          <div className="container mx-auto px-4 py-12 reveal">
            <Scenes />
          </div>

          <Pricing />

          <div className="container mx-auto px-4 py-12 reveal">
            <Calculator />
          </div>

          <div className="container mx-auto px-4 py-12 reveal">
            <HowToOrder />
          </div>

          <section className="container mx-auto px-4 py-16 reveal">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Заполните короткий бриф  для заказа песни</h2>
            <BriefWizard />
          </section>

         

          <div className="container mx-auto px-4 py-12 reveal">
            <FAQ />
          </div>

          <footer className="container mx-auto px-4 py-16 text-center text-slate-400">
            <div>Почта: <a className="text-sky-300" href="mailto:info@aimemories.ru">info@aimemories.ru</a></div>
            <div className="mt-1">WhatsApp: <a className="text-sky-300" href="https://wa.me/79841933792">+7 984 193‑37‑92</a></div>
            <div className="mt-2 text-xs">© {new Date().getFullYear()} AI Memories</div>
          </footer>
        </>
      )}
    </main>
  );
}
