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
  title: 'Джинглы для подкастов — Создание музыки для подкастов | AI Memories',
  description: 'Профессиональное создание джинглов для подкастов ✓ Интро, аутро и переходы ✓ Авторская музыка ✓ Быстрое создание ✓ Полные права',
  openGraph: {
    title: 'Джинглы для подкастов — AI Memories',
    description: 'Профессиональное создание джинглов для подкастов. Интро, аутро и переходы. Авторская музыка, быстрое создание, полные права.',
    url: 'https://aimemories.ru/services/podcast',
    images: [{ url: 'https://aimemories.ru/images/og-cover.jpg', width: 1200, height: 630 }],
  }
};

export default function PodcastMusicPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Создание джинглов для подкастов",
    "description": "Профессиональное создание музыкального оформления для подкастов: интро, аутро, переходы и фоновая музыка.",
    "provider": {
      "@type": "Organization",
      "name": "AI Memories",
      "url": "https://aimemories.ru"
    },
    "serviceType": "Podcast Audio Production",
    "areaServed": "RU",
    "offers": {
      "@type": "Offer",
      "price": "от 10000",
      "priceCurrency": "RUB"
    }
  };

  const tracks = [
    { title: "Интро для подкаста про технологии", src: "/songs/pod1.mp3" },
    { title: "Джингл для бизнес-подкаста", src: "/songs/pod2.mp3" },
    { title: "Музыкальные переходы для шоу", src: "/songs/pod3.mp3" },
  ];

  return (
    <main className="min-h-screen">
      <SEOJsonLd data={schema} />
      
      <section className="container mx-auto px-4 py-16 reveal">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-6">
          Создание джинглов для подкастов
        </h1>
        <p className="text-center text-slate-300 mt-3 max-w-3xl mx-auto">
          Профессиональное музыкальное оформление для подкастов: интро, 
          переходы, фоновая музыка. Уникальный стиль для вашего шоу.
        </p>
        <div className="mt-6 text-center">
          <WhatsAppButton className="mx-auto" />
        </div>
      </section>
      
      <ServicesNav />

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Что мы создаем
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Интро/Аутро</h3>
            <p className="text-slate-300">
              Запоминающиеся открывающие и закрывающие композиции для подкаста
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Джинглы и переходы</h3>
            <p className="text-slate-300">
              Короткие музыкальные элементы для разделения тем и сегментов
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Фоновая музыка</h3>
            <p className="text-slate-300">
              Атмосферная музыка для подложки под речь и особых моментов
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Преимущества
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-slate-800/50 rounded-lg">
            <h3 className="font-semibold mb-2">Уникальность</h3>
            <p className="text-sm text-slate-300">Музыка создается специально под ваш подкаст</p>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-lg">
            <h3 className="font-semibold mb-2">Быстро</h3>
            <p className="text-sm text-slate-300">Создание джинглов за 2-5 дней</p>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-lg">
            <h3 className="font-semibold mb-2">Права</h3>
            <p className="text-sm text-slate-300">Полные права на использование</p>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-lg">
            <h3 className="font-semibold mb-2">Форматы</h3>
            <p className="text-sm text-slate-300">WAV, MP3 в высоком качестве</p>
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
          Заказать джинглы для подкаста
        </h2>
        <p className="text-center text-slate-300 mb-8">
          Расскажите о вашем подкасте и получите индивидуальное предложение
        </p>
        <BriefWizard />
      </section>

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Частые вопросы
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Какие форматы вы создаете?</h3>
            <p className="text-slate-300">
              Мы создаем интро (15-30 сек), переходы (5-10 сек), фоновую музыку 
              любой длительности и полное музыкальное оформление подкастов.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Как происходит процесс создания?</h3>
            <p className="text-slate-300">
              1. Обсуждаем концепцию и стиль подкаста
              2. Создаем демо-версии
              3. Вносим правки при необходимости
              4. Записываем финальные версии
              5. Передаем файлы и права
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Сколько правок можно внести?</h3>
            <p className="text-slate-300">
              В базовую стоимость входит до 2 раундов правок. Мы работаем до тех пор, 
              пока вы не будете полностью довольны результатом.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}