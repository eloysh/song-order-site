export default function Pricing() {
  return (
    <section className="reveal container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Цены</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card-glass p-6">
          <h3 className="text-xl font-semibold">Мини-ролик</h3>
          <p className="text-slate-300 mt-2">до 10 фото, улучшение, монтаж</p>
          <div className="text-3xl font-bold mt-4">4 500 ₽</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• Оживление фото (15–30c)</li>
            <li>• Улучшенные снимки</li>
            <li>• Музыка на выбор</li>
          </ul>
        </div>

        <div className="card-glass p-6 border-sky-400/30">
          <h3 className="text-xl font-semibold">Видеоролик</h3>
          <p className="text-slate-300 mt-2">от 10 фото, монтаж, сведение</p>
          <div className="text-3xl font-bold mt-4">от 8 000 ₽</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• Оживление фото</li>
            <li>• Монтаж и цветокор</li>
            <li>• Аудио-микс</li>
          </ul>
        </div>

        <div className="card-glass p-6">
          <h3 className="text-xl font-semibold">Песня на заказ</h3>
          <p className="text-slate-300 mt-2">эксклюзив под вашу историю</p>
          <div className="text-3xl font-bold mt-4">от 5 000 ₽</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• Текст и мелодия</li>
            <li>• Аранжировка</li>
            <li>• Сведение</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
