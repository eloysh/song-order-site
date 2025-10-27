export default function FAQ(){
  const items = [
    { q: 'Как прислать фото?', a: 'Отправьте фото в WhatsApp/Telegram или загрузите ссылки при общении.' },
    { q: 'Сколько времени занимает заказ?', a: 'Обычно 3–7 рабочих дней. Срочно — 24 часа (за доп. плату).' },
    { q: 'Можно ли заказать эксклюзивную песню?', a: 'Да — есть опция «Песня на заказ» с эксклюзивными правами.' },
    { q: 'Как проходят правки?', a: 'Мы делаем 1–2 раунда правок по выбранному варианту.' },
  ];
  return (
    <section id="faq" className="reveal">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">Частые вопросы</h2>
      <div className="max-w-4xl mx-auto grid gap-3">
        {items.map((it,i)=>(
          <details key={i} className="card-glass p-4 rounded-xl">
            <summary className="font-medium cursor-pointer">{it.q}</summary>
            <div className="mt-2 text-slate-300">{it.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}