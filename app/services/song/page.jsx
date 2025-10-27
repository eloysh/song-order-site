"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import WhatsAppButton from "../../../components/WhatsAppButton";
import SEOJsonLd from "../../../components/SEOJsonLd";
import ServicesNav from "../../../components/ServicesNav";

const BriefWizard = dynamic(() => import('../../../components/BriefWizard'), { 
  ssr: false, 
  loading: () => <div className="text-center text-slate-500 py-6">Загрузка брифа…</div> 
});

const AudioList = dynamic(() => import('../../../components/AudioList'), { 
  ssr: false, 
  loading: () => <div className="text-center text-slate-500 py-6">Загрузка треков…</div> 
});

export const metadata = {
  title: 'Создание песни на заказ для видео — Профессиональная студия | AI Memories',
  description: 'Создание уникальной песни для вашего видео ✓ Авторский текст и музыка ✓ Профессиональная запись ✓ Сроки от 3 дней ✓ Примеры работ',
  openGraph: {
    title: 'Создание песни на заказ для видео — AI Memories',
    description: 'Создание уникальной песни для вашего видео. Авторский текст и музыка, профессиональная запись, сроки от 3 дней. Примеры работ.',
    url: 'https://aimemories.ru/services/song',
    images: [{ url: 'https://aimemories.ru/images/og-cover.jpg', width: 1200, height: 630 }],
  }
};

export default function SongOrderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Создание песни на заказ",
    "description": "Профессиональное создание песен под заказ: написание текста, музыки, аранжировка и студийная запись. Идеально для видео, рекламы и личных событий.",
    "provider": {
      "@type": "Organization",
      "name": "AI Memories",
      "url": "https://aimemories.ru"
    },
    "serviceType": "Music Production",
    "areaServed": "RU",
    "offers": {
      "@type": "Offer",
      "price": "от 15000",
      "priceCurrency": "RUB"
    }
  };

  const tracks = [
    { title: "Рекламный джингл", src: "/songs/song1.mp3" },
    { title: "Песня для YouTube", src: "/songs/song2.mp3" },
    { title: "Свадебная песня", src: "/songs/song3.mp3" },
  ];

  return (
    <main className="min-h-screen">
      <SEOJsonLd data={schema} />
      
      <section className="container mx-auto px-4 py-16 reveal">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-6">
          Создание песни на заказ для видео
        </h1>
        <p className="text-center text-slate-300 mt-3 max-w-3xl mx-auto">
          Создаем уникальные песни и саундтреки для любых видео: реклама, YouTube, 
          презентации и личные события. Профессиональная запись в студии.
        </p>
        <div className="mt-6 text-center">
          <WhatsAppButton className="mx-auto" />
        </div>
      </section>
      
      <ServicesNav />

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Процесс создания песни
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">1. Написание текста</h3>
            <p className="text-slate-300">
              Создаем уникальный текст песни под ваши требования и тематику видео
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">2. Создание музыки</h3>
            <p className="text-slate-300">
              Пишем оригинальную музыку в выбранном стиле и настроении
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">3. Студийная запись</h3>
            <p className="text-slate-300">
              Записываем вокал и делаем профессиональную аранжировку
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Примеры работ
        </h2>
        <AudioList tracks={tracks} />
      </section>

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Заказать песню — заполните бриф
        </h2>
        <p className="text-center text-slate-300 mb-8">
          Расскажите о вашем проекте и получите расчет стоимости
        </p>
        <BriefWizard />
      </section>

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Часто задаваемые вопросы
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Сколько времени занимает создание песни?</h3>
            <p className="text-slate-300">
              Стандартный срок — от 3 до 7 рабочих дней. Точные сроки зависят от сложности 
              проекта и текущей загрузки студии.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Что входит в стоимость?</h3>
            <p className="text-slate-300">
              В стоимость входит написание текста, создание музыки, аранжировка, 
              студийная запись вокала и передача всех прав на использование.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Можно ли внести правки?</h3>
            <p className="text-slate-300">
              Да, мы предоставляем возможность внесения правок в текст и музыку до 
              финальной записи. После согласования демо-версии записывается финальная версия.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}