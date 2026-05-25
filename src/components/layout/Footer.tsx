import Link from 'next/link'

const footerSections = [
  {
    title: 'EKSPLORASI',
    links: [
      { name: 'Beranda', href: '/' },
      { name: 'Tentang kami', href: '/tentang' },
      { name: 'Visi & Misi', href: '/tentang#visi-misi' },
      { name: 'Tentang Maskot', href: '/tentang#maskot' },
      { name: 'Portal Informasi', href: '/portal' },
      { name: 'Proyek Komunitas', href: '/proyek' },
      { name: 'Event dan Gathering', href: '#' },
    ],
  },
  {
    title: 'KOMUNITAS',
    links: [
      { name: 'Join Komunitas', href: '/community/join' },
      { name: 'Divisi & Regional', href: '/community/divisi-regional' },
      { name: 'Karya Member', href: '/community/karya-member' },
      { name: 'Forum Diskusi', href: '/community/forum-diskusi' },
      { name: 'Baca Light Novel Aria', href: '/community/light-novel-aria' },
      { name: 'Fanmade', href: '/community/fanmade' },
    ],
  },
  {
    title: 'BANTUAN DAN RELASI',
    links: [
      { name: 'Kontak Kami', href: '/kontak' },
      { name: 'Hubungi Founder', href: '/kontak#hubungi-founder' },
      { name: 'Partnership / Kolaborasi', href: '/kontak#partnership-kolaborasi' },
      { name: 'Media & Public Relation', href: '#' },
      { name: 'Donasi', href: '#' },
      { name: 'FAQ / Pertanyaan Umum', href: '/community/faq' },
    ],
  },
  {
    title: 'LEGAL & INFO TEKNIS',
    links: [
      { name: 'Kebijakan Privasi', href: '/legal/kebijakan-privasi' },
      { name: 'Syarat & Ketentuan', href: '/legal/syarat-ketentuan' },
      { name: 'Kode Etik Komunitas', href: '/legal/kode-etik-komunitas' },
      { name: 'Versi Website / Update Log', href: '/legal/versi-website-log' },
      { name: 'Laporan Bug / Masukan', href: '/legal/laporan-bug-masukan' },
    ],
  },
  {
    title: "ARIA'S CORNER",
    links: [
      { name: 'Quote of the Day by Aria', href: '/aria-corner/quote-of-the-day' },
      { name: "Aria's Mini Diary", href: '/aria-corner/mini-diary' },
      { name: 'Aria Photocard Collection', href: '/aria-corner/photocard-collection' },
      { name: "Aria Cosplayer's", href: '/aria-corner/cosplayer-tribute' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-dark-grey text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-accent-yellow font-semibold mb-4 border-b border-white/20 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-accent-yellow transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
          <p className="mb-2">Komunitas AquaNime</p>
          <p className="mb-2">Wilayah: Jabodetabek, Jawa Barat</p>
          <p className="mb-2">Email: aquanime.ow@gmail.com</p>
          <p>©2017-2025 AquaNime. All rights reserved. Didukung oleh komunitas untuk komunitas.</p>
        </div>
      </div>
    </footer>
  )
}