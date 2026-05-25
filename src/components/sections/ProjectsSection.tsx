import Link from 'next/link'

const projects = [
  {
    icon: 'fas fa-hat-wizard',
    title: 'PROYEK MASKOT',
    description: 'Mengembangkan maskot komunitas "Aria Ayumi" sebagai wajah komunitas, melalui ilustrasi, cosplay, dan media sosial. Proyek ini terbuka untuk kreator yang ingin berkontribusi dalam visual branding dan storytelling Aria.',
    href: '/proyek/maskot',
  },
  {
    icon: 'fas fa-guitar',
    title: 'PROYEK BAND',
    description: 'Membangun grup band komunitas bergenre J-Pop Rock di region Jawa Barat. Terdiri dari 5 personel: Gitaris, Drummer, Vokalis Gitar, Vokalis Belakang, dan Bassist. Terbuka untuk kolaborasi, latihan, dan perform bareng di event komunitas.',
    href: '/proyek/band',
  },
  {
    icon: 'fas fa-book-open',
    title: 'PROYEK LIGHT NOVEL',
    description: 'Menulis cerita original berbasis maskot "Aria" dan komunitas, menggabungkan proyek visual dan musik ke dalam satu universe. Genre utama: Slice of Life, Drama, dan Musik. Bisa jadi IP komunitas yang berkembang bersama.',
    href: '/proyek/light-novel',
  },
  {
    icon: 'fas fa-newspaper',
    title: 'PROYEK JURNALISTIK',
    description: 'Mengemas riset dan berita seputar anime & budaya Jejepangan dalam format video dan artikel. Diedarkan lewat media sosial AquaNime. Terbuka bagi penulis, editor, dan video creator yang ingin berbagi insight.',
    href: '/proyek/jurnalistik',
  },
]

export function ProjectsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in">
          TEMPAT IDE LIAR JADI NYATA
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/95 dark:bg-gray-800/95 p-6 rounded-lg shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300 animate-fade-in"
            >
              <div className="text-accent-yellow text-5xl mb-4">
                <i className={project.icon}></i>
              </div>
              <h3 className="text-primary-blue dark:text-primary-light2 font-bold text-lg mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <Link
                href={project.href}
                className="inline-block bg-primary-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-light1 transition-colors duration-300"
              >
                Selengkapnya
              </Link>
            </div>
          ))}
        </div>

        <Link
          href="/proyek"
          className="inline-block bg-white/20 text-white border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary-blue transition-all duration-300"
        >
          LIHAT SEMUA PROYEK
        </Link>
      </div>
    </section>
  )
}