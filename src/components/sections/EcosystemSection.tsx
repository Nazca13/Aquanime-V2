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
    <section id="ecosystem" className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="max-w-[650px]">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/images/AquanimeXAnimae-Logo.png" alt="AquaNime x Animae" width={160} height={36} className="h-6 sm:h-7 w-auto" />
          </div>
          <h2 className="font-extrabold text-[26px] sm:text-[32px] md:text-[38px] tracking-tight leading-[1.1]">
            <span className="text-primary-base">EKOSISTEM DIGITAL </span>
            <span className="text-accent-primary">TERINTEGRASI</span>
          </h2>
          <p className="mt-4 text-text-secondary text-[13px] sm:text-[14px] leading-[1.7] max-w-[540px]">
            Infrastruktur teknologi pendukung. Mulai dari portal berita, jaringan sosial,
            hingga ekonomi kreator — dalam satu naungan distribusi.
          </p>
        </div>

        {/* Carousel — 3 cards visible on desktop */}
        <div className="mt-10 relative">
          {/* Desktop: 3 cards row */}
          <div className="hidden lg:grid grid-cols-3 gap-5">
            {SLIDES.map((s, i) => (
              <div
                key={s.id}
                className="relative rounded-2xl overflow-hidden h-[240px] group cursor-pointer"
              >
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 text-white font-bold text-[14px] leading-[1.4]">{s.title}</p>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: single slide carousel */}
          <div className="lg:hidden relative rounded-2xl overflow-hidden h-[200px] sm:h-[260px]">
            {SLIDES.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  i === cur ? 'opacity-100 translate-x-0' : i < cur ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
                }`}
              >
                <Image src={s.img} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 text-white font-bold text-[13px] sm:text-[15px]">{s.title}</p>
              </div>
            ))}

            {/* Arrows — mobile only */}
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/30 z-20 transition-all">
              <i className="fas fa-chevron-left text-sm" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/30 z-20 transition-all">
              <i className="fas fa-chevron-right text-sm" />
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

        {/* 3 Service Cards — bigger illustrations */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="bg-surface-bg border border-surface-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {/* Large illustration */}
              <div className="relative w-full h-[160px] sm:h-[180px] lg:h-[200px] mb-5 flex items-center justify-center">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={220}
                  height={200}
                  className="w-auto h-full object-contain drop-shadow-md"
                />
              </div>
              <h3 className="text-primary-base font-bold text-[12px] sm:text-[13px] tracking-[0.1em]">{s.title}</h3>
              <p className="mt-2 text-text-secondary text-[12px] sm:text-[13px] leading-[1.65]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
