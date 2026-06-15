'use client'

import Link from 'next/link'

export function FuelSection() {
  return (
    <section
      id="fuel"
      className="relative w-full py-10 sm:py-12 md:py-14 lg:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0b2c45 0%, #0F3E61 50%, #0d2538 100%)' }}
    >
      <div className="absolute inset-0 grid-bg opacity-8" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">

          {/* Left — teks */}
          <div className="max-w-[520px] text-center lg:text-left">
            <h2 className="text-white font-extrabold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] tracking-tight">
              BAHAN BAKAR EKOSISTEM
            </h2>
            <p className="mt-3 sm:mt-4 text-white/55 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.7]">
              Dukungan finansial dari kalian membantu kami menjaga infrastruktur
              Animae tetap hidup dan mendanai{' '}
              <span className="text-primary-light font-semibold underline underline-offset-2 decoration-primary-light/40">
                project
              </span>{' '}
              kreator AquaNime.
            </p>
          </div>

          {/* Right — CTA */}
          <div className="flex flex-col items-center lg:items-end shrink-0">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 h-[44px] sm:h-[48px] md:h-[50px] px-6 sm:px-8 bg-accent-secondary text-primary-base font-extrabold text-[11px] sm:text-[12px] md:text-[13px] tracking-wider rounded-lg hover:brightness-105 hover:shadow-xl hover:shadow-accent-secondary/25 transition-all duration-300"
            >
              <i className="fas fa-heart text-[11px] sm:text-[12px]" />
              DUKUNG VIA SAWERIA
            </Link>
            <p className="mt-2 sm:mt-2.5 text-white/35 text-[10px] sm:text-[11px]">
              Menerima QRIS, GoPay, OVO, Dana, ShopeePay
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
