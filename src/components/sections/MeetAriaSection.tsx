'use client'

import Image from 'next/image'
import Link from 'next/link'

export function MeetAriaSection() {
  return (
    <section id="meet-aria" className="relative w-full bg-surface-bg py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Left: Teks */}
          <div className="max-w-[520px]">
            <h2 className="text-primary-base font-extrabold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] tracking-tight">
              KENALAN DENGAN ARIA AYUMI
            </h2>

            <p className="mt-4 sm:mt-5 text-text-secondary text-[12px] sm:text-[13px] md:text-[14px] leading-[1.75]">
              Aria adalah perwujudan semangat AquaNime: seorang introvert pemalu dengan
              tekad baja. Menjadikan musik sebagai bahasanya, Aria hadir untuk mengingatkan
              bahwa ekosistem ini adalah ruang aman bagi siapa pun yang masih ragu, untuk
              mulai berani berkarya dan menemukan suaranya sendiri.
            </p>

            <div className="mt-6 sm:mt-7 flex flex-wrap gap-2.5 sm:gap-3">
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[40px] sm:h-[44px] px-5 sm:px-6 bg-primary-light text-white font-bold text-[11px] sm:text-[12px] tracking-wider rounded-lg hover:brightness-110 hover:shadow-lg hover:shadow-primary-light/25 transition-all duration-300"
              >
                DETAIL KARAKTER
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[40px] sm:h-[44px] px-5 sm:px-6 border-2 border-primary-light text-primary-light font-bold text-[11px] sm:text-[12px] tracking-wider rounded-lg hover:bg-primary-light/8 transition-all duration-300"
              >
                BACKSTORY LENGKAP
              </Link>
            </div>
          </div>

          {/* Right: Aria portrait - responsive sizing */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px]">
              <Image
                src="/images/Aria-Home-02.png"
                alt="Aria Ayumi"
                fill
                sizes="(max-width: 768px) 220px, (max-width: 1024px) 280px, (max-width: 1280px) 320px, 360px"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
