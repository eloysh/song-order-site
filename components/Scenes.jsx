export default function Scenes() {
  const scenes = [
    "Детство и школьные годы",
    "Свадьба и история любви",
    "Память о близких",
    "Путешествия и открытия",
    "Спорт, хобби, достижения",
    "Юбилейные моменты"
  ];
  
  return (
    <section className="reveal">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Сцены, к которым хочется возвращаться
      </h2>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scenes.map((scene, i) => (
          <div
            key={i}
            className="card-glass p-6 text-center hover:bg-white/10 transition-colors"
          >
            {scene}
          </div>
        ))}
      </div>
    </section>
  );
}
