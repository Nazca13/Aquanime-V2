import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
          MULAI PETUALANGAN KREATIFMU
        </h1>
        <Link
          href="/community/join"
          className="inline-block bg-white text-primary-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-light3 hover:text-primary-light1 transition-all duration-300 transform hover:-translate-y-1 shadow-lg animate-fade-in"
        >
          GABUNG SEKARANG
        </Link>
      </div>
    </section>
  )
}