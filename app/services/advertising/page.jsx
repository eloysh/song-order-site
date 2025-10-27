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
  title: 'Заказать песню для рекламы — Создание рекламных джинглов | AI Memories',
  description: 'Создание музыки и песен для рекламы ✓ Запоминающиеся джинглы ✓ Профессиональная запись ✓ Быстрые сроки ✓ Все права на использование',
  openGraph: {
    title: 'Заказать песню для рекламы — AI Memories',
    description: 'Создание музыки и песен для рекламы. Запоминающиеся джинглы, профессиональная запись, быстрые сроки, все права на использование.',
    url: 'https://aimemories.ru/services/advertising',
    images: [{ url: 'https://aimemories.ru/images/og-cover.jpg', width: 1200, height: 630 }],
  }
};

export default function AdvertisingSongPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Создание песен для рекламы",
    "description": "Профессиональное создание рекламных джинглов и музыки: запоминающиеся мелодии, яркие тексты, высокое качество записи.",
    "provider": {
      "@type": "Organization",
      "name": "AI Memories",
      "url": "https://aimemories.ru"
    },
    "serviceType": "Advertising Music Production",
    "areaServed": "RU",
    "offers": {
      "@type": "Offer",
      "price": "от 20000",
      "priceCurrency": "RUB"
    }
  };

  const tracks = [
    { title: "Рекламный джингл для бренда", src: "/songs/ad1.mp3" },
    { title: "Музыка для TV-рекламы", src: "/songs/ad2.mp3" },
    { title: "Корпоративный гимн", src: "/songs/ad3.mp3" },
  ];

  return (
    <main className="min-h-screen">
      <SEOJsonLd data={schema} />
      
      <section className="container mx-auto px-4 py-16 reveal">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-6">
          Создание песен и джинглов для рекламы
        </h1>
        <p className="text-center text-slate-300 mt-3 max-w-3xl mx-auto">
          Создаем запоминающиеся рекламные песни и джинглы. Работаем с брендами, 
          агентствами и компаниями любого масштаба.
        </p>
        <div className="mt-6 text-center">
          <WhatsAppButton className="mx-auto" />
        </div>
      </section>
      
      <ServicesNav />

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Наши преимущества
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Быстрые сроки</h3>
            <p className="text-slate-300">
              Создание рекламного трека за 3-5 рабочих дней
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Все права</h3>
            <p className="text-slate-300">
              Передаем полные права на использование музыки
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Гарантия качества</h3>
            <p className="text-slate-300">
              Профессиональная студийная запись и сведение
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Примеры рекламных треков
        </h2>
        <AudioList tracks={tracks} />
      </section>

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Заказать рекламную песню — заполните бриф
        </h2>
        <p className="text-center text-slate-300 mb-8">
          Расскажите о вашем проекте и получите расчет стоимости
        </p>
        <BriefWizard />
      </section>

      <section className="container mx-auto px-4 py-12 reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          FAQ по рекламным песням
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Какие форматы музыки вы создаете?</h3>
            <p className="text-slate-300">
              Мы создаем все форматы рекламной музыки: джинглы, полноценные песни, 
              фоновые треки, корпоративные гимны.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Как происходит передача прав?</h3>
            <p className="text-slate-300">
              После оплаты вы получаете договор о передаче исключительных прав на музыку. 
              Вы можете использовать трек без ограничений.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Сколько правок можно внести?</h3>
            <p className="text-slate-300">
              В базовую стоимость входит до 3-х раундов правок текста и музыки. 
              Дополнительные правки обсуждаются индивидуально.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}