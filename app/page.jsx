"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import WhatsAppButton from "../components/WhatsAppButton";
import SEOJsonLd from "../components/SEOJsonLd";
import EntryOverlay from "../components/EntryOverlay";
import BrandLogo from "../components/BrandLogo";
import ServicesNav from "../components/ServicesNav";

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
      logo: base + "/images/og-cover.jpg",
      description: "Студия создания песен на заказ для видео, рекламы и личных событий",
      email: "info@aimemories.ru",
      telephone: "+79841933792",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+79841933792",
        contactType: "customer service"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "AI Memories — Создание песен на заказ",
      url: base,
      potentialAction: {
        "@type": "SearchAction",
        target: base + "/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Создание песни на заказ для видео",
      description: "Профессиональное создание уникальных песен и саундтреков для видео, рекламы и роликов. Включает написание текста, музыки, аранжировку и студийную запись.",
      provider: { 
        "@type": "Organization", 
        name: "AI Memories",
        url: base
      },
      areaServed: "RU",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги по созданию песен",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Создание песни на заказ",
              description: "Написание уникальной песни с вашим текстом и профессиональной записью"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Саундтрек для видео",
              description: "Создание саундтрека для рекламного или презентационного видео"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Авторская композиция для ролика",
              description: "Написание авторской музыки для видеороликов любого формата"
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько времени занимает создание песни на заказ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Стандартный срок создания песни — от 3 до 7 дней. Точные сроки зависят от сложности проекта и загруженности студии."
          }
        },
        {
          "@type": "Question",
          name: "Что входит в стоимость создания песни?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В стоимость входит написание текста, создание музыки, аранжировка, студийная запись вокала и передача всех прав на использование."
          }
        },
        {
          "@type": "Question",
          name: "Можно ли внести правки в готовую песню?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, мы предоставляем возможность внесения правок в текст и музыку до финальной записи. После согласования демо-версии записывается финальная версия."
          }
        }
      ]
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
              Создание песни на заказ для видео
            </h1>
            <p className="text-center text-slate-300 mt-3 max-w-3xl mx-auto">
              Профессиональное создание уникальных песен и саундтреков для вашего видео: реклама, YouTube, презентации. От идеи до готового трека за 3-7 дней.
            </p>

            <div className="mt-8">
              <ServicesNav />
            </div>
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
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Примеры авторских песен и саундтреков</h2>
            <p className="text-center text-slate-300 mb-8 max-w-3xl mx-auto">Послушайте примеры наших работ — уникальные песни и композиции, созданные для клиентов</p>
            <AudioList tracks={tracks} />
          </section>

          <div className="container mx-auto px-4 py-12 reveal">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Процесс создания песни для вашего видео</h2>
            <Scenes />
          </div>

          <section className="container mx-auto px-4 py-12 reveal">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Стоимость создания песни на заказ</h2>
            <Pricing />
          </section>

          <div className="container mx-auto px-4 py-12 reveal">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Рассчитать стоимость саундтрека</h2>
            <Calculator />
          </div>

          <div className="container mx-auto px-4 py-12 reveal">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Как заказать авторскую песню для видео</h2>
            <HowToOrder />
          </div>

          <section className="container mx-auto px-4 py-16 reveal">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Заказать создание песни — заполните бриф</h2>
            <p className="text-center text-slate-300 mb-8 max-w-3xl mx-auto">Расскажите о вашем проекте и получите персональное предложение</p>
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
