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
    <section id="partners" className="relative w-full bg-primary-base py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Effect-Home-03 kiri */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200px] sm:w-[280px] aspect-square z-0 pointer-events-none">
        <Image src="/images/Effect-Home-03.png" alt="" fill className="object-contain object-left opacity-45" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 lg:px-8">

        {/* Powered by */}
        <div className="text-center">
          <span className="text-primary-light text-[10px] font-bold tracking-[0.25em] uppercase">POWERED BY</span>
          <div className="mt-3 inline-flex bg-primary-base/60 border border-white/10 rounded-full px-8 py-2.5">
            <Image src="/images/Kolaborator-Logo/Animae-Logo.png" alt="Animae" width={130} height={36} className="h-7 sm:h-9 w-auto" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-7 text-center text-white font-extrabold text-[26px] sm:text-[32px] md:text-[38px] tracking-tight">
          JARINGAN EKOSISTEM & PUBLIKASI
        </h2>

        {/* Diliput oleh */}
        <div className="mt-10 sm:mt-14">
          <p className="text-center text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase mb-6">Diliput oleh</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14">
            {DILIPUT.map((p) => (
              <div key={p.name} className="group relative w-[90px] sm:w-[110px] h-[36px] sm:h-[44px]">
                <Image src={p.logo} alt={p.name} fill className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Kolaborator Strategis */}
        <div className="mt-10 sm:mt-14">
          <p className="text-center text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase mb-6">Kolaborator Strategis</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14">
            {KOLABORATOR.map((p) => (
              <div key={p.name} className="group relative w-[75px] sm:w-[95px] h-[32px] sm:h-[40px]">
                <Image src={p.logo} alt={p.name} fill className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}