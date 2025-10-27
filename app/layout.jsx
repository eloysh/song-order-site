// app/layout.jsx
import './globals.css';
import Script from 'next/script';

// Google Search Console verification code - установлен по запросу пользователя
const GSC_META = 'FedGdnZuEW0aMGDFs0Ef4twekaVvSJSL5lLbk6jT6Qo';

// Google Analytics Measurement ID - замените на ваш ID после создания аккаунта GA4
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export const metadata = {
  title: {
    template: '%s | AI Memories - Песни и музыка на заказ',
    default: 'AI Memories - Создание песен и музыки на заказ для видео, рекламы и подарков'
  },
  verification: {
    google: GSC_META,
  },
  description: 'Закажите уникальную песню для видео: реклама, саундтрек, авторская композиция. Быстрое создание, профессиональная запись, полные права. Примеры работ.',
  keywords: 'создание песни на заказ, песня на заказ для видео, саундтрек для видео, авторская композиция для ролика, заказать песню для рекламы',
  openGraph: {
    title: 'Создание песни на заказ для видео — AI Memories',
    description: 'Закажите уникальную песню для видео: реклама, саундтрек, авторская композиция. Быстрое создание, профессиональная запись, полные права. Примеры работ.',
    url: 'https://aimemories.ru',
    siteName: 'AI Memories',
    images: [
      {
        url: 'https://aimemories.ru/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Memories — Студия создания песен на заказ',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Создание песни на заказ для видео — AI Memories',
    description: 'Закажите уникальную песню для видео: реклама, саундтрек, авторская композиция. Быстрое создание, профессиональная запись, полные права.',
    images: ['https://aimemories.ru/images/og-cover.jpg'],
  },
  alternates: {
    canonical: 'https://aimemories.ru',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Ставит класс .js раньше рендера — анимации включатся ТОЛЬКО при готовом JS */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js');`}
        </Script>

        {/* Google Search Console verification meta (HTML-верификация альтернативна) */}
        <meta name="google-site-verification" content={GSC_META} />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
