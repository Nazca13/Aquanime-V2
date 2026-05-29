'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/components/providers/ThemeProvider'
import { MobileMenu } from './MobileMenu'
import { SocialIcons } from '@/components/ui/SocialIcons'

const NAV_LINKS = [
  { name: 'BERANDA', href: '/' },
  { name: 'TENTANG', href: '/tentang' },
  { name: 'PROYEK', href: '/proyek' },
  { name: 'PORTAL', href: '/portal' },
  { name: 'KONTAK', href: '/kontak' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        id="main-header"
        className={`
          fixed top-0 left-0 w-full z-50
          transition-shadow duration-500
          ${scrolled ? 'shadow-xl shadow-black/20' : 'shadow-md shadow-black/10'}
        `}
        style={{
          background: 'linear-gradient(90deg, #36527F 0%, #5488DB 100%)',
        }}
      >
        {/* Inner content — generous padding kanan kiri */}
        <div className="flex items-center justify-between h-[52px] sm:h-[56px] px-8 sm:px-12 lg:px-16 xl:px-20">

          {/* ── Logo (kiri) ── */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/AquaNime-Logo.png"
              alt="AquaNime"
              width={120}
              height={30}
              className="h-[22px] sm:h-[26px] w-auto"
              priority
            />
          </Link>

          {/* ── Nav Links (tengah) ── */}
          <ul className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="text-white/85 hover:text-white text-[13px] font-semibold tracking-[0.14em] relative group transition-colors duration-200"
                >
                  {l.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white/60 rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Right: Toggle + Social Icons ── */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden sm:flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full pl-[5px] pr-2.5 py-[3px] text-white hover:bg-white/15 transition-all duration-200"
            >
              <span className="w-[20px] h-[20px] rounded-full bg-white/15 flex items-center justify-center">
                <i className={`fas ${theme === 'dark' ? 'fa-sun text-amber-300' : 'fa-moon text-white/80'} text-[8px]`} />
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-white/80">
                {theme === 'dark' ? 'LIGHT' : 'DARK'}
              </span>
            </button>

            {/* Social Icons — ghost (white outline) */}
            <div className="hidden md:block">
              <SocialIcons variant="ghost" size="sm" />
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            >
              <i className="fas fa-bars text-base" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navigation={NAV_LINKS}
      />
    </>
  )
}