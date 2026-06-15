'use client'

import { useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  { id: 1, img: '/images/AquaNime-Bg.png', title: 'Adaptasi Anime Baru — Segera Rilis Musim Depan' },
  { id: 2, img: '/images/AquaNime-Bg.png', title: 'Event Pop-Kultur Terbesar 2026' },
  { id: 3, img: '/images/AquaNime-Bg.png', title: 'Kolaborasi Kreator AquaNime x Animae' },
]

const SERVICES = [
  { id: 'market',    title: 'MARKETPLACE KARYA',    desc: 'Jual beli karya visual, musik, dan merchandise dari kreator komunitas.', img: '/images/Ilustration-01.png' },
  { id: 'platform',  title: 'PLATFORM SOSIAL',      desc: 'Diskusi, kolaborasi, dan berbagi project dengan sesama kreator.',        img: '/images/Ilustration-02.png' },
  { id: 'affiliate', title: 'AFFILIATE & KREATOR',  desc: 'Program monetisasi untuk kreator berprestasi dalam ekosistem.',          img: '/images/Ilustration-03.png' },
]

export function EcosystemSection() {
  const [cur, setCur] = useState(0)

  const next = () => setCur((p) => (p + 1) % SLIDES.length)
  const prev = () => setCur((p) => (p - 1 + SLIDES.length) % SLIDES.length)

  return (
    <section id="ecosystem" className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-8">

        {/* Heading */}
        <div className="max-w-[650px]">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/images/AquanimeXAnimae-Logo.png" alt="AquaNime x Animae" width={160} height={36} className="h-5 sm:h-6 md:h-7 w-auto" />
          </div>
          <h2 className="font-extrabold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] tracking-tight leading-[1.1]">
            <span className="text-primary-base">EKOSISTEM DIGITAL </span>
            <span className="text-accent-primary">TERINTEGRASI</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-text-secondary text-[12px] sm:text-[13px] md:text-[14px] leading-[1.7] max-w-[540px]">
            Infrastruktur teknologi pendukung. Mulai dari portal berita, jaringan sosial,
            hingga ekonomi kreator — dalam satu naungan distribusi.
          </p>
        </div>

        {/* Carousel — responsive */}
        <div className="mt-8 sm:mt-10 relative">
          {/* Desktop: 3 cards row */}
          <div className="hidden lg:grid grid-cols-3 gap-4 xl:gap-5">
            {SLIDES.map((s, i) => (
              <div
                key={s.id}
                className="relative rounded-2xl overflow-hidden h-[200px] xl:h-[240px] group cursor-pointer"
              >
                <Image src={s.img} alt={s.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 text-white font-bold text-[12px] sm:text-[14px] leading-[1.4]">{s.title}</p>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: single slide carousel */}
          <div className="lg:hidden relative rounded-2xl overflow-hidden h-[180px] sm:h-[220px] md:h-[260px]">
            {SLIDES.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  i === cur ? 'opacity-100 translate-x-0' : i < cur ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
                }`}
              >
                <Image src={s.img} alt={s.title} fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 text-white font-bold text-[12px] sm:text-[14px] md:text-[15px]">{s.title}</p>
              </div>
            ))}

            {/* Arrows — mobile only */}
            <button onClick={prev} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/30 z-20 transition-all">
              <i className="fas fa-chevron-left text-xs sm:text-sm" />
            </button>
            <button onClick={next} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/30 z-20 transition-all">
              <i className="fas fa-chevron-right text-xs sm:text-sm" />
            </button>
          </div>

          {/* Dots — mobile only */}
          <div className="flex lg:hidden justify-center gap-2 mt-4">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === cur ? 'bg-primary-base w-6' : 'bg-primary-base/20 w-2 hover:bg-primary-base/40'}`}
              />
            ))}
          </div>
        </div>

        {/* 3 Service Cards — responsive illustrations */}
        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="bg-surface-bg border border-surface-border rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {/* Large illustration - fluid height */}
              <div className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] mb-4 sm:mb-5 flex items-center justify-center">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={220}
                  height={200}
                  className="w-auto h-full object-contain drop-shadow-md"
                />
              </div>
              <h3 className="text-primary-base font-bold text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.1em]">{s.title}</h3>
              <p className="mt-1.5 sm:mt-2 text-text-secondary text-[11px] sm:text-[12px] md:text-[13px] leading-[1.65]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
