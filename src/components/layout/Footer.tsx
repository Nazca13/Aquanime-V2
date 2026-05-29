import Link from 'next/link'
import Image from 'next/image'
import { SocialIcons } from '@/components/ui/SocialIcons'

const FOOTER_MENUS = [
  {
    title: 'EKSPLORASI',
    links: [
      { name: 'Beranda', href: '/' },
      { name: 'Tentang Kami', href: '/tentang' },
      { name: 'Portal Informasi', href: '/portal' },
      { name: 'Event & Kalender', href: '#' },
    ],
  },
  {
    title: 'KOMUNITAS',
    links: [
      { name: 'Join Komunitas', href: '#' },
      { name: 'Divisi & Regional', href: '#' },
      { name: 'Karya Member', href: '#' },
      { name: 'Forum Diskusi', href: '#' },
    ],
  },
  {
    title: "ARIA'S CORNER",
    links: [
      { name: 'Database Maskot', href: '#' },
      { name: 'Baca Light Novel', href: '#' },
      { name: 'Fanmade & Cosplay', href: '#' },
      { name: 'Mini Diary', href: '#' },
    ],
  },
  {
    title: 'BANTUAN & LEGAL',
    links: [
      { name: 'Hubungi Kami', href: '/kontak' },
      { name: 'Partnership & Media', href: '#' },
      { name: 'FAQ / Bantuan Umum', href: '#' },
      { name: 'Kebijakan Privasi', href: '#' },
      { name: 'Syarat & Ketentuan', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-primary-base text-white">
      {/* Main content */}
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* ── Left column: logo + desc + regional + email ── */}
          <div className="lg:col-span-4 space-y-5">
            <Image
              src="/images/AquanimeXAnimae-Logo.png"
              alt="AquaNime x Animae"
              width={200}
              height={44}
              className="h-9 sm:h-10 w-auto"
            />

            <p className="text-white/45 text-[12.5px] leading-[1.7] max-w-[280px]">
              Ekosistem digital terintegrasi pendukung pergerakan pop-kultur,
              ruang ekspresi, dan rumah bagi para kreator.
            </p>

            <div>
              <h4 className="text-accent-primary font-bold text-[11px] tracking-[0.15em] uppercase">
                REGIONAL & CABANG
              </h4>
              <div className="mt-1.5 space-y-0.5 text-white/50 text-[12.5px]">
                <p>Jabodetabek (ID)</p>
                <p>Bandung, Jawa Barat (ID)</p>
                <p>Kanto (JP)</p>
              </div>
            </div>

            <a href="mailto:aquanime.ow@gmail.com" className="block text-primary-light text-[12.5px] hover:underline">
              aquanime.ow@gmail.com
            </a>
          </div>

          {/* ── Right columns: 4 menus ── */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-5">
            {FOOTER_MENUS.map((section) => (
              <div key={section.title}>
                <h4 className="text-accent-primary font-bold text-[11px] tracking-[0.12em] uppercase mb-3.5">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-white/50 hover:text-white text-[12px] transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-white/35 text-[11px]">© 2017 - 2026 Komunitas AquaNime X Animae Platform.</p>
            <p className="text-white/25 text-[10.5px] mt-0.5">Didukung oleh komunitas untuk komunitas. All rights reserved.</p>
          </div>
          <SocialIcons variant="filled" size="sm" />
        </div>
      </div>
    </footer>
  )
}