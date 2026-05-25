'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/components/providers/ThemeProvider'
import { MobileMenu } from './MobileMenu'
import { SocialIcons } from '../ui/SocialIcons'

const navigation = [
  { name: 'BERANDA', href: '/' },
  { name: 'TENTANG', href: '/tentang' },
  { name: 'PROYEK', href: '/proyek' },
  { name: 'PORTAL', href: '/portal' },
  { name: 'KONTAK', href: '/kontak' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-blue/95 backdrop-blur-sm shadow-lg'
            : 'bg-primary-blue/70'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 z-50">
              <Image
                src="/images/logo.png"
                alt="AquaNime Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-white font-bold text-lg sm:text-xl hidden sm:block">
                AquaNime
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-accent-yellow transition-colors duration-300 font-semibold text-sm relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Theme Toggle & Social Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="hidden sm:flex items-center space-x-2 bg-white/15 border border-white/30 rounded-full px-3 py-1.5 text-white hover:bg-white/25 hover:border-accent-yellow hover:text-accent-yellow transition-all duration-300 text-sm"
              >
                {theme === 'dark' ? (
                  <>
                    <i className="fas fa-sun"></i>
                    <span className="hidden md:inline">Light Mode</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-moon"></i>
                    <span className="hidden md:inline">Dark Mode</span>
                  </>
                )}
              </button>

              <div className="hidden md:block">
                <SocialIcons />
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden text-white text-2xl z-50"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  )
}