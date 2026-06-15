'use client'

import Image from 'next/image'

const DIVISIONS = [
  { id: 'musik',   title: 'MUSIK & PERFORMA',       icon: '/images/Icons/Icon-Home-01.svg', img: '/images/AquaNime-Bg.png' },
  { id: 'maskot',  title: 'MASKOT IP & ILUSTRASI',   icon: '/images/Icons/Icon-Home-02.svg', img: '/images/AquaNime-Bg.png' },
  { id: 'novel',   title: 'LIGHT NOVEL & KOMIK',     icon: '/images/Icons/Icon-Home-03.svg', img: '/images/AquaNime-Bg.png' },
  { id: 'liputan', title: 'LIPUTAN & KONTEN',         icon: '/images/Icons/Icon-Home-04.svg', img: '/images/AquaNime-Bg.png' },
]

export function ExpressionSection() {
  return (
    <section id="expression" className="relative w-full bg-surface-bg py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-[600px] mx-auto">
          <h2 className="text-primary-base font-extrabold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] tracking-tight">
            RUANG EKSPRESI TANPA BATAS
          </h2>
          <p className="mt-3 sm:mt-4 text-text-secondary text-[12px] sm:text-[13px] md:text-[14px] leading-[1.7]">
            Lebih dari sekedar hobi. Temukan departemen yang paling sesuai dengan
            passion kamu — dari panggung musik, seni visual, hingga publikasi
            literasi independen.
          </p>
        </div>

        {/* 4 Cards - responsive grid */}
        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {DIVISIONS.map((d) => (
            <div
              key={d.id}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              {/*
                Responsive card height: fluid with min/max
              */}
              <div className="relative" style={{ height: 'clamp(320px, 40vw, 420px)' }}>
                {/* Image fills the ENTIRE card */}
                <Image
                  src={d.img}
                  alt={d.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Blue overlay — covers bottom portion only */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: '35%',
                    background: 'linear-gradient(to bottom, rgba(59,139,196,0) 0%, #3B8BC4 35%)',
                  }}
                />

                {/* Icon — responsive positioning */}
                <div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{ bottom: 'clamp(70px, 12vw, 100px)' }}
                >
                  <div
                    className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: '#3B8BC4', border: '3px solid rgba(255,255,255,0.25)' }}
                  >
                    <Image src={d.icon} alt="" width={30} height={30} className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] brightness-0 invert" />
                  </div>
                </div>

                {/* Text — at the very bottom */}
                <div className="absolute bottom-0 left-0 right-0 pb-4 sm:pb-5 px-3 text-center">
                  <h3 className="text-white font-bold text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.12em]">
                    {d.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
