// app/layout.jsx
import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Песня на заказ — AI Memories',
  description: 'Оживление фото и персональные песни.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Ставит класс .js раньше рендера — анимации включатся ТОЛЬКО при готовом JS */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js');`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
