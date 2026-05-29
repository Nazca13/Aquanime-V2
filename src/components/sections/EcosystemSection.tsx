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
    <section id="ecosystem" className="relative w-full bg-primary-base py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Effect segitiga kanan atas */}
      <div className="absolute top-0 right-0 w-[280px] sm:w-[380px] lg:w-[460px] aspect-square z-0 pointer-events-none">
        <Image src="/images/Effect-Home-01.png" alt="" fill className="object-contain object-right-top opacity-50" />
      </div>

      {/* Effect kiri bawah */}
      <div className="absolute bottom-0 left-0 w-[220px] sm:w-[320px] aspect-square z-0 pointer-events-none">
        <Image src="/images/Effect-Home-02.png" alt="" fill className="object-contain object-left-bottom opacity-40" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 lg:px-8">

        {/* Heading: EKOSISTEM DIGITAL (biru) TERINTEGRASI (oren) */}
        <div className="max-w-[650px]">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/images/AquanimeXAnimae-Logo.png" alt="AquaNime x Animae" width={160} height={36} className="h-6 sm:h-7 w-auto opacity-80" />
          </div>
          <h2 className="font-extrabold text-[26px] sm:text-[32px] md:text-[38px] tracking-tight leading-[1.1]">
            <span className="text-primary-light">EKOSISTEM DIGITAL </span>
            <span className="text-accent-primary">TERINTEGRASI</span>
          </h2>
          <p className="mt-4 text-white/55 text-[13px] sm:text-[14px] leading-[1.7] max-w-[540px]">
            Infrastruktur teknologi pendukung. Mulai dari portal berita, jaringan sosial,
            hingga ekonomi kreator — dalam satu naungan distribusi.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-10 relative rounded-2xl overflow-hidden h-[200px] sm:h-[260px] lg:h-[340px]">
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-all duration-500 ${
                i === cur ? 'opacity-100 translate-x-0' : i < cur ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
              }`}
            >
              <Image src={s.img} alt={s.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-white font-bold text-[13px] sm:text-[16px]">{s.title}</p>
            </div>
          ))}

          {/* Arrows */}
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 z-20 transition-all">
            <i className="fas fa-chevron-left text-sm" />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 z-20 transition-all">
            <i className="fas fa-chevron-right text-sm" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === cur ? 'bg-primary-light w-6' : 'bg-white/25 w-2 hover:bg-white/40'}`}
            />
          ))}
        </div>

        {/* 3 Service Cards */}
        <div className="mt-12 relative">
          {/* Orange glow */}
          <div className="absolute -inset-8 bg-accent-primary/8 rounded-3xl blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-primary-base/70 border border-white/8 rounded-2xl p-5 hover:border-primary-light/25 transition-all duration-300">
                <div className="relative w-full h-[100px] sm:h-[110px] mb-4 rounded-xl overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-contain" />
                </div>
                <h3 className="text-white font-bold text-[12px] tracking-[0.1em]">{s.title}</h3>
                <p className="mt-1.5 text-white/45 text-[11.5px] leading-[1.6]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
