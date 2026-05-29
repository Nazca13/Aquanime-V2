'use client'

import Image from 'next/image'
import Link from 'next/link'

/*
  GAP FIX (FINAL):
  - Section bg-color = #2F7FB4 (= regional gradient start)
  - Gambar + overlay hitam dibungkus 1 div
  - Div tsb punya mask-image: fade out di bawah
  - Di bottom hero: gambar+overlay hilang → #2F7FB4 solid keliatan
  - Regional mulai #2F7FB4 → WARNA IDENTIK → GAP MUSTAHIL
*/

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center"
      style={{ backgroundColor: '#2F7FB4' }}
    >
      {/*
        Wrapper gambar + overlay.
        mask-image membuat keduanya fade out di bawah,
        sehingga hero bg-color #2F7FB4 keliatan di bottom.
      */}
      <div
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        }}
      >
        {/* BG Image */}
        <Image
          src="/images/AquaNime-Bg.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Overlay hitam */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Logo watermark kanan atas */}
      <div className="absolute top-[90px] sm:top-[100px] right-8 sm:right-12 lg:right-16 xl:right-20 z-10">
        <Image
          src="/images/AquaNime-Logo.png"
          alt=""
          width={100}
          height={40}
          className="h-[28px] sm:h-[36px] w-auto opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-[620px]">
          <h1 className="text-white font-extrabold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.08] tracking-tight">
            DARI KOMUNITAS
            <br />
            KREATIF MENUJU
            <br />
            PANGGUNG DIGITAL
          </h1>

          <p className="mt-5 sm:mt-6 text-white/65 text-[11.5px] sm:text-[12.5px] md:text-[13px] leading-[1.75] max-w-[500px]">
            Rumah bagi para individu di balik layar industri kreatif pop-kultur Jepang.
            Sebagai induk dari komunitas produktif, AquaNime hadir bersama Animae untuk
            mendukung perjalananmu lewat jaringan sosial media, program affiliate, dan
            akses informasi terkini dalam satu naungan terintegrasi.
          </p>

          <div className="mt-6 sm:mt-7 flex flex-wrap gap-2.5">
            <Link
              href="#"
              className="inline-flex items-center justify-center h-[38px] sm:h-[40px] px-5 sm:px-6 bg-primary-light text-white font-bold text-[11px] sm:text-[11.5px] tracking-wider rounded-md hover:brightness-110 hover:shadow-lg hover:shadow-primary-light/25 transition-all duration-300"
            >
              GABUNG KOMUNITAS
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center h-[38px] sm:h-[40px] px-5 sm:px-6 border border-white/40 text-white font-bold text-[11px] sm:text-[11.5px] tracking-wider rounded-md hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              JELAJAHI ANIMAE
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}