"use client";
export default function WhatsAppButton({ phone = "79841933792", text = "Здравствуйте! Хочу песню на заказ.", className="" }) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  return (
    <a className={`btn-primary ${className}`} href={href} target="_blank" rel="noopener noreferrer">
      Написать в WhatsApp
    </a>
  );
}
