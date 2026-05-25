'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/components/providers/ThemeProvider'
import { SocialIcons } from '../ui/SocialIcons'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: Array<{ name: string; href: string }>
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
        style={{
          backgroundImage: "url('/images/aria-sidebar-full.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-primary-blue/90 to-primary-blue/95 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-accent-yellow transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Social Icons at top */}
          <div className="flex justify-end p-4 pt-16">
            <SocialIcons />
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex flex-col justify-center px-6">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block w-full text-right bg-primary-blue/80 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-white/10 hover:text-accent-yellow transition-all duration-300 transform hover:-translate-x-1 hover:scale-105"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme toggle for mobile */}
            <button
              onClick={toggleTheme}
              className="mt-8 flex items-center justify-center space-x-2 bg-white/15 border border-white/30 rounded-full px-4 py-2 text-white hover:bg-white/25 transition-all duration-300 mx-auto"
            >
              {theme === 'dark' ? (
                <>
                  <i className="fas fa-sun"></i>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <i className="fas fa-moon"></i>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}