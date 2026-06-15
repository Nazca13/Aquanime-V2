'use client'

import Image from 'next/image'

const DILIPUT = [
  { name: 'Suara.com',   logo: '/images/Kolaborator-Logo/suara_com_logo.png' },
  { name: 'RRI',         logo: '/images/Kolaborator-Logo/rri_logo.png' },
  { name: 'Yoursay.id',  logo: '/images/Kolaborator-Logo/yoursay_id_logo.png' },
]

const KOLABORATOR = [
  { name: 'ATX',         logo: '/images/Kolaborator-Logo/atx_logo.png' },
  { name: 'Manekineko',  logo: '/images/Kolaborator-Logo/manekineko_logo.png' },
  { name: 'Jagat',       logo: '/images/Kolaborator-Logo/jagat_logo.png' },
  { name: 'Bstation',    logo: '/images/Kolaborator-Logo/bstation_logo.png' },
]

export function PartnersSection() {
  return (
    <section id="partners" className="relative w-full bg-primary-base py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Effect-Home-03 kiri - responsive */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[280px] aspect-square z-0 pointer-events-none">
        <Image src="/images/Effect-Home-03.png" alt="" fill sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, (max-width: 1280px) 250px, 280px" className="object-contain object-left opacity-45" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-8">

        {/* Powered by */}
        <div className="text-center">
          <span className="text-primary-light text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase">POWERED BY</span>
          <div className="mt-2 sm:mt-3 inline-flex bg-primary-base/60 border border-white/10 rounded-full px-6 sm:px-8 py-2 sm:py-2.5">
            <Image src="/images/Kolaborator-Logo/Animae-Logo.png" alt="Animae" width={130} height={36} className="h-6 sm:h-7 md:h-9 w-auto" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-5 sm:mt-7 text-center text-white font-extrabold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] tracking-tight">
          JARINGAN EKOSISTEM & PUBLIKASI
        </h2>

        {/* Diliput oleh */}
        <div className="mt-8 sm:mt-10 md:mt-14">
          <p className="text-center text-white/40 text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6">Diliput oleh</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14">
            {DILIPUT.map((p) => (
              <div key={p.name} className="group relative w-[70px] sm:w-[90px] md:w-[110px] h-[28px] sm:h-[36px] md:h-[44px]">
                <Image src={p.logo} alt={p.name} fill sizes="(max-width: 768px) 70px, (max-width: 1024px) 90px, 110px" className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Kolaborator Strategis */}
        <div className="mt-8 sm:mt-10 md:mt-14">
          <p className="text-center text-white/40 text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6">Kolaborator Strategis</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14">
            {KOLABORATOR.map((p) => (
              <div key={p.name} className="group relative w-[60px] sm:w-[75px] md:w-[95px] h-[24px] sm:h-[32px] md:h-[40px]">
                <Image src={p.logo} alt={p.name} fill sizes="(max-width: 768px) 60px, (max-width: 1024px) 75px, 95px" className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
