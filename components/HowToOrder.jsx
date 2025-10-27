export default function HowToOrder() {
  const steps = [
    "Присылаете фото и пожелания (WhatsApp/Telegram)",
    "Я делаю пробное оживление бесплатно",
    "Обсуждаем правки, выбираем музыку",
    "Делаю итоговый ролик и отправляю в нужном формате"
  ];
  
  return (
    <section className="reveal">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Как оформить заказ
      </h2>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="card-glass p-6 flex flex-col items-center text-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-sky-500/20 grid place-items-center text-xl font-semibold">
              {i + 1}
            </div>
            <div>{step}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
