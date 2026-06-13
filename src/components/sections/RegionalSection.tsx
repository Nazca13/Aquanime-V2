'use client'

import { useState } from 'react'
import Image from 'next/image'

const REGIONS = [
  {
    id: 'jabodetabek',
    label: 'JABODETABEK',
  },
  {
    id: 'jabar',
    label: 'JAWA BARAT',
    desc: 'Regional Bandung dan sekitarnya. Basis kuat untuk divisi musik, cosplay, dan event pop-kultur lokal yang terus berkembang pesat.',
  },
  {
    id: 'kanto',
    label: 'JEPANG KANTO',
    desc: 'Jangkauan internasional AquaNime di wilayah Kanto, Jepang. Menjembatani kolaborasi lintas negara antara kreator Indonesia dan Jepang.',
  },
]

export function RegionalSection() {
  const [active, setActive] = useState('jabodetabek')
  const current = REGIONS.find((r) => r.id === active)!

  return (
    <section
      id="regional"
      className="relative w-full"
    >
      {/* Solid overlay — covers hero image underneath, regional looks distinct */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #2F7FB4 0%, #365380 100%)',
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-[0.06]" style={{ zIndex: 1 }} />

      {/* Pulau — absolute wrapper, posisi & ukuran jelas */}
      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          right: '10px',    /* geser kiri = naikin angka, geser kanan = turunin/negatif */
          top: '0px',     /* geser atas = negatif, geser bawah = positif */
          width: '520px',
          height: '580px',
          zIndex: 2,
        }}
      >
        <Image
          src="/images/Pulau-Right-Home.png"
          alt="Peta Pulau"
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="absolute bottom-0 right-16 xl:right-20 z-[5] pointer-events-none select-none hidden lg:block">
        <div className="relative w-[300px] xl:w-[350px]">
          <Image
            src="/images/Aria-Home-01.png"
            alt="Aria Ayumi"
            width={380}
            height={570}
            className="w-full h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 py-10 sm:py-12 lg:py-14">
        <div className="max-w-[520px]">
          <h2 className="text-white font-extrabold text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[1.12] tracking-tight">
            MENGHUBUNGKAN
            <br />
            KREATIVITAS LINTAS NEGARA
          </h2>

          <p className="mt-3.5 text-white/60 text-[11px] sm:text-[12px] leading-[1.7] max-w-[440px]">
            Lebih dari sekedar kumpul bareng. Kami adalah ekosistem tempat para kreator
            Jejepangan berkolaborasi dari ilustrasi, musik, hingga literasi — mengubah
            imajinasi liar menjadi karya nyata yang diakui.
          </p>

          {/* Tabs kapsul */}
          <div className="mt-4 flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <button
                key={r.id}
                onClick={() => setActive(r.id)}
                className={`px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.1em] transition-all duration-300 ${active === r.id
                    ? 'bg-primary-light text-white shadow-md shadow-primary-light/25'
                    : 'bg-white/8 text-white/55 border border-white/15 hover:bg-white/12 hover:text-white/80'
                  }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Region description */}
          <p key={current.id} className="mt-3.5 text-white/45 text-[11px] leading-[1.65] animate-fadeIn min-h-[36px]">
            {current.desc}
          </p>
        </div>
      </div>
    </section>
  )
}
