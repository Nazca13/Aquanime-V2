export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-start relative bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-white max-w-4xl mx-auto px-4 ml-8 lg:ml-16">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          KOMUNITAS KREATIF JEJEPANGAN<br />
          BERDOMISILI JABODETABEK & JAWA BARAT
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl animate-fade-in">
          Kami bikin proyek bareng, belajar bareng, dan berkembang bareng. 
          Kalau kamu suka Budaya Jepang dan kreatif, ya cocok!
        </p>
      </div>
    </section>
  )
}