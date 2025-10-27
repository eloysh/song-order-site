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
  title: 'Саундтрек для YouTube видео — Создание музыки для блогов | AI Memories',
  description: 'Создание уникальной музыки для YouTube ✓ Саундтреки для видеоблогов ✓ Авторские треки ✓ Быстрые сроки ✓ Все права на использование',
  openGraph: {
    title: 'Саундтрек для YouTube видео — AI Memories',
    description: 'Создание уникальной музыки для YouTube. Саундтреки для видеоблогов, авторские треки, быстрые сроки, все права на использование.',
    url: 'https://aimemories.ru/services/youtube',
    images: [{ url: 'https://aimemories.ru/images/og-cover.jpg', width: 1200, height: 630 }],
  }
};

export default function YouTubeMusicPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Создание музыки для YouTube",
    "description": "Профессиональное создание саундтреков и музыки для YouTube каналов: уникальные треки, быстрые сроки, полные права.",
    "provider": {
      "@type": "Organization",
      "name": "AI Memories",
      "url": "https://aimemories.ru"
    },
    "serviceType": "YouTube Music Production",
    "areaServed": "RU",
    "offers": {
      "@type": "Offer",
      "price": "от 15000",
      "priceCurrency": "RUB"
    }
  };

  const tracks = [
    { title: "Интро для YouTube канала", src: "/songs/yt1.mp3" },
    { title: "Фоновая музыка для влога", src: "/songs/yt2.mp3" },
    { title: "Саундтрек для обзора", src: "/songs/yt3.mp3" },
  ];

  return (
    <main className="min-h-screen">
      <SEOJsonLd data={schema} />
      
      <section className="container mx-auto px-4 py-16 reveal">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-6">
          Создание музыки для YouTube
        </h1>
        <p className="text-center text-slate-300 mt-3 max-w-3xl mx-auto">
          Создаем уникальные саундтреки для YouTube каналов: интро, 
          фоновая музыка, звуковое оформление для влогов и обзоров.
        </p>
        <div className="mt-6 text-center">
          <WhatsAppButton className="mx-auto" />
        </div>
      </section>
      
      <ServicesNav />

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Интро для канала</h3>
            <p className="text-slate-300">
              Создание запоминающегося музыкального интро для вашего YouTube канала
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Фоновая музыка</h3>
            <p className="text-slate-300">
              Атмосферные треки для фона в видео любой тематики
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Джинглы и переходы</h3>
            <p className="text-slate-300">
              Музыкальные элементы для оформления видео
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Примеры работ для YouTube
        </h2>
        <AudioList tracks={tracks} />
      </section>

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Заказать музыку для YouTube
        </h2>
        <p className="text-center text-slate-300 mb-8">
          Расскажите о вашем канале и получите индивидуальное предложение
        </p>
        <BriefWizard />
      </section>

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Частые вопросы
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Можно ли использовать музыку на YouTube?</h3>
            <p className="text-slate-300">
              Да, вы получаете полные права на использование музыки в своих видео. 
              Никаких страйков и проблем с монетизацией.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Какие форматы вы создаете?</h3>
            <p className="text-slate-300">
              Мы создаем все форматы: интро (10-30 сек), полноценные треки для 
              фона (1-3 мин), джинглы для переходов и концовок.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Как происходит заказ?</h3>
            <p className="text-slate-300">
              Вы заполняете бриф, мы обсуждаем детали и стиль, создаем демо-версию. 
              После согласования записываем финальную версию.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}