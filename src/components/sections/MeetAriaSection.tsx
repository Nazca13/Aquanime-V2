'use client'

import Image from 'next/image'
import Link from 'next/link'

export function MeetAriaSection() {
  return (
    <section id="meet-aria" className="relative w-full bg-surface-bg py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* ── Left: Teks ── */}
          <div className="max-w-[520px]">
            <h2 className="text-primary-base font-extrabold text-[26px] sm:text-[32px] md:text-[38px] tracking-tight">
              KENALAN DENGAN ARIA AYUMI
            </h2>

            <p className="mt-5 text-text-secondary text-[13px] sm:text-[14px] leading-[1.75]">
              Aria adalah perwujudan semangat AquaNime: seorang introvert pemalu dengan
              tekad baja. Menjadikan musik sebagai bahasanya, Aria hadir untuk mengingatkan
              bahwa ekosistem ini adalah ruang aman bagi siapa pun yang masih ragu, untuk
              mulai berani berkarya dan menemukan suaranya sendiri.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[44px] px-6 bg-primary-light text-white font-bold text-[12px] tracking-wider rounded-lg hover:brightness-110 hover:shadow-lg hover:shadow-primary-light/25 transition-all duration-300"
              >
                DETAIL KARAKTER
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[44px] px-6 border-2 border-primary-light text-primary-light font-bold text-[12px] tracking-wider rounded-lg hover:bg-primary-light/8 transition-all duration-300"
              >
                BACKSTORY LENGKAP
              </Link>
            </div>
          </div>

          {/* ── Right: Aria portrait ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[260px] sm:w-[300px] lg:w-[360px] h-[320px] sm:h-[380px] lg:h-[460px]">
              <Image
                src="/images/Aria-Home-02.png"
                alt="Aria Ayumi"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
