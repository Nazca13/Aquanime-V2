'use client'

import Image from 'next/image'

const DIVISIONS = [
  { id: 'musik',   title: 'MUSIK & PERFORMA',     icon: '/images/Icons/Icon-Home-01.svg', img: '/images/AquaNime-Bg.png' },
  { id: 'maskot',  title: 'MASKOT & ILUSTRASI',    icon: '/images/Icons/Icon-Home-02.svg', img: '/images/AquaNime-Bg.png' },
  { id: 'novel',   title: 'LIGHT NOVEL & KOMIK',   icon: '/images/Icons/Icon-Home-03.svg', img: '/images/AquaNime-Bg.png' },
  { id: 'liputan', title: 'LIPUTAN & KONTEN',       icon: '/images/Icons/Icon-Home-04.svg', img: '/images/AquaNime-Bg.png' },
]

export function ExpressionSection() {
  return (
    <section id="expression" className="relative w-full bg-surface-bg py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">

        {/* Heading — center */}
        <div className="text-center max-w-[600px] mx-auto">
          <h2 className="text-primary-base font-extrabold text-[26px] sm:text-[32px] md:text-[38px] tracking-tight">
            RUANG EKSPRESI TANPA BATAS
          </h2>
          <p className="mt-4 text-text-secondary text-[13px] sm:text-[14px] leading-[1.7]">
            Lebih dari sekedar hobi. Temukan departemen yang paling sesuai dengan
            passion kamu — dari panggung musik, seni visual, hingga publikasi
            literasi independen.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIVISIONS.map((d) => (
            <div
              key={d.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              {/* Top image */}
              <div className="relative h-[150px] sm:h-[160px] overflow-hidden">
                <Image src={d.img} alt={d.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-base/20" />
              </div>

              {/* Floating circle icon */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[126px] sm:top-[136px] z-20">
                <div className="w-[52px] h-[52px] rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-surface-border">
                  <Image src={d.icon} alt="" width={22} height={22} className="w-[22px] h-[22px]" />
                </div>
              </div>

              {/* Bottom title — blue base */}
              <div className="bg-primary-base pt-8 pb-5 px-3 text-center">
                <h3 className="text-white font-bold text-[11px] sm:text-[12px] tracking-[0.1em]">
                  {d.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
