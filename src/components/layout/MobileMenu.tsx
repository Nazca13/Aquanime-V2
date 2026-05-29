'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/components/providers/ThemeProvider'
import { SocialIcons } from '@/components/ui/SocialIcons'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: Array<{ name: string; href: string }>
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] z-50 bg-primary-base transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <Image src="/images/AquaNime-Logo.png" alt="AquaNime" width={110} height={28} className="h-5 w-auto" />
            <button onClick={onClose} className="text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10">
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 py-4 px-5">
            <ul className="space-y-1">
              {navigation.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    onClick={onClose}
                    className="block py-3 px-4 rounded-xl text-white/85 font-semibold text-sm tracking-wider hover:bg-primary-light/15 hover:text-white transition-all"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleTheme}
              className="mt-5 w-full flex items-center gap-2 bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-medium hover:bg-white/15 transition-all"
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun text-accent-secondary' : 'fa-moon text-primary-light'}`} />
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </nav>

          {/* Bottom */}
          <div className="px-5 py-4 border-t border-white/10">
            <SocialIcons size="sm" className="justify-center" />
          </div>
        </div>
      </div>
    </>
  )
}