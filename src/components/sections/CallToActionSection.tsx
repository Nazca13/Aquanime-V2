import Link from 'next/link'

export function CallToActionSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
          BERANI TUNJUKKAN IMAJINASI KAMU?
        </h2>
        <p className="text-lg md:text-xl mb-12 animate-fade-in">
          Di AquaNime, kreativitas kamu nggak akan dianggap aneh. Bikin, kolaborasi, 
          dan wujudkan passion bareng komunitas yang ngertiin kamu.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="bg-white/20 text-white border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:-translate-y-1"
          >
            MULAI BERKARYA
          </Link>
          <Link
            href="/community/join"
            className="bg-white/20 text-white border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:-translate-y-1"
          >
            GABUNG KOMUNITAS
          </Link>
        </div>
      </div>
    </section>
  )
}