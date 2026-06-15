'use client'

import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center"
    >
      {/* BG image + overlay is in PARENT wrapper (HomePage), not here */}

      {/* Logo watermark kanan atas - responsive positioning */}
      <div className="absolute top-[80px] sm:top-[100px] md:top-[120px] right-4 sm:right-8 lg:right-12 xl:right-16 z-10">
        <Image
          src="/images/AquaNime-Logo.png"
          alt=""
          width={100}
          height={40}
          className="h-[24px] sm:h-[28px] md:h-[32px] w-auto opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
        <div className="max-w-[620px]">
          <h1 className="text-white font-extrabold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] leading-[1.1] tracking-tight">
            DARI KOMUNITAS
            <br />
            KREATIF MENUJU
            <br />
            PANGGUNG DIGITAL
          </h1>

          <p className="mt-4 sm:mt-5 md:mt-6 text-white/65 text-[11px] sm:text-[12px] md:text-[13px] leading-[1.7] max-w-[500px]">
            Rumah bagi para individu di balik layar industri kreatif pop-kultur Jepang.
            Sebagai induk dari komunitas produktif, AquaNime hadir bersama Animae untuk
            mendukung perjalananmu lewat jaringan sosial media, program affiliate, dan
            akses informasi terkini dalam satu naungan terintegrasi.
          </p>

          <div className="mt-5 sm:mt-6 md:mt-7 flex flex-wrap gap-2 sm:gap-2.5">
            <Link
              href="#"
              className="inline-flex items-center justify-center h-[36px] sm:h-[38px] md:h-[40px] px-4 sm:px-5 md:px-6 bg-primary-light text-white font-bold text-[10px] sm:text-[11px] md:text-[11.5px] tracking-wider rounded-md hover:brightness-110 hover:shadow-lg hover:shadow-primary-light/25 transition-all duration-300"
            >
              GABUNG KOMUNITAS
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center h-[36px] sm:h-[38px] md:h-[40px] px-4 sm:px-5 md:px-6 border border-white/40 text-white font-bold text-[10px] sm:text-[11px] md:text-[11.5px] tracking-wider rounded-md hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              JELAJAHI ANIMAE
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}