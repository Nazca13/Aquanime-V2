import Image from 'next/image'
import Link from 'next/link'

const partners = [
  { name: 'ATX', logo: '/images/atx_logo.png' },
  { name: 'Karaoke Manekineko', logo: '/images/manekineko_logo.png' },
  { name: 'RRI Jakarta 105.0 FM', logo: '/images/rri_logo.png' },
  { name: 'Suara.com', logo: '/images/suara_com_logo.png' },
  { name: 'Yoursay.id', logo: '/images/yoursay_id_logo.png' },
  { name: 'Oronamin C', logo: '/images/oronamin_c_logo.png' },
  { name: 'Bstation', logo: '/images/bstation_logo.png' },
  { name: 'AOK', logo: '/images/aok_logo.png' },
  { name: 'Jagat', logo: '/images/jagat_logo.png' },
]

export function PartnersSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in">
          MEDIA & PARTNER<br />
          YANG SUDAH BERKOLABORASI DENGAN AQUANIME
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300 flex items-center justify-center h-20"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                width={100}
                height={60}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white text-lg mb-6">Mau jadi partner kami juga?</p>
          <Link
            href="/kontak"
            className="inline-block bg-white/20 text-white border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary-blue transition-all duration-300"
          >
            HUBUNGI SEKARANG
          </Link>
        </div>
      </div>
    </section>
  )
}