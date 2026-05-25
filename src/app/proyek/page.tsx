import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    icon: 'fas fa-hat-wizard',
    title: 'Proyek Maskot',
    description: 'Mengembangkan maskot komunitas "Aria Ayumi" sebagai wajah komunitas, melalui ilustrasi, cosplay, dan media sosial. Proyek ini terbuka untuk kreator yang ingin berkontribusi dalam visual branding dan storytelling Aria.',
    href: '/proyek/maskot',
  },
  {
    icon: 'fas fa-guitar',
    title: 'Proyek Band',
    description: 'Membangun grup band komunitas bergenre J-Pop Rock di region Jawa Barat. Terdiri dari 5 personel: Gitaris, Drummer, Vokalis Gitar, Vokalis Belakang, dan Bassist. Terbuka untuk kolaborasi, latihan, dan perform bareng di event komunitas.',
    href: '/proyek/band',
  },
  {
    icon: 'fas fa-book-open',
    title: 'Proyek Light Novel',
    description: 'Menulis cerita original berbasis maskot "Aria" dan komunitas, menggabungkan proyek visual dan musik ke dalam satu universe. Genre utama: Slice of Life, Drama, dan Musik. Bisa jadi IP komunitas yang berkembang bersama.',
    href: '/proyek/light-novel',
  },
  {
    icon: 'fas fa-newspaper',
    title: 'Proyek Jurnalistik',
    description: 'Mengemas riset dan berita seputar anime & budaya Jejepangan dalam format video dan artikel. Diedarkan lewat media sosial AquaNime. Terbuka bagi penulis, editor, dan video creator yang ingin berbagi insight.',
    href: '/proyek/jurnalistik',
  },
]

const partners = [
  { name: 'ATX', logo: '/images/atx_logo.png' },
  { name: 'Karaoke Manekineko', logo: '/images/manekineko_logo.png' },
  { name: 'RRI Jakarta 105.0 FM', logo: '/images/rri_logo.png' },
  { name: 'Suara.com', logo: '/images/suara_com_logo.png' },
  { name: 'Yoursay.id', logo: '/images/yoursay_id_logo.png' },
  { name: 'Oronamin C', logo: '/images/oronamin_c_logo.png' },
]

const collaborations = [
  { name: 'Bstation', logo: '/images/bstation_logo.png' },
  { name: 'AOK', logo: '/images/aok_logo.png' },
  { name: 'Jagat', logo: '/images/jagat_logo.png' },
]

export default function ProyekPage() {
  return (
    <div className="min-h-screen bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed">
      <div className="bg-primary-light3/80 dark:bg-gray-900/80 min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Projects Section */}
          <section className="bg-white/95 dark:bg-gray-800/95 rounded-lg shadow-xl p-8 mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-primary-blue dark:text-primary-light2 text-center mb-6">
              Tempat Ide Liar Jadi Nyata
            </h1>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-12 text-lg">
              Di AquaNime, ide-ide kreatifmu akan menemukan jalannya! Kami berkolaborasi di berbagai proyek yang menginspirasi.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-accent-yellow text-5xl mb-4 text-center">
                    <i className={project.icon}></i>
                  </div>
                  <h3 className="text-primary-blue dark:text-primary-light2 font-bold text-xl mb-4 text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="text-center">
                    <Link
                      href={project.href}
                      className="inline-block bg-primary-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-light1 transition-colors duration-300"
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Collaborations Section */}
          <section className="bg-primary-light1/90 dark:bg-gray-700/90 rounded-lg shadow-xl p-8 mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Kolaborasi Kami
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {collaborations.map((collab) => (
                <div
                  key={collab.name}
                  className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-lg shadow-lg flex items-center justify-center h-20 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={collab.logo}
                    alt={`${collab.name} Logo`}
                    width={100}
                    height={60}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Partners Section */}
          <section className="bg-primary-light1/90 dark:bg-gray-700/90 rounded-lg shadow-xl p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Partner Kami
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white/95 dark:bg-gray-800/95 p-4 rounded-lg shadow-lg flex items-center justify-center h-20 hover:transform hover:scale-105 transition-all duration-300"
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
                className="inline-block bg-primary-blue text-white px-8 py-3 rounded-full font-bold hover:bg-primary-blue/80 transition-all duration-300 transform hover:-translate-y-1"
              >
                HUBUNGI SEKARANG
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}