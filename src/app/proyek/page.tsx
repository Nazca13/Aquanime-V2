import Link from 'next/link'

const projects = [
  {
    icon: 'fas fa-hat-wizard',
    title: 'Proyek Maskot',
    description: 'Mengembangkan maskot komunitas "Aria Ayumi" sebagai wajah komunitas.',
  },
  {
    icon: 'fas fa-guitar',
    title: 'Proyek Band',
    description: 'Membangun grup band komunitas bergenre J-Pop Rock di region Jawa Barat.',
  },
  {
    icon: 'fas fa-book-open',
    title: 'Proyek Light Novel',
    description: 'Menulis cerita original berbasis maskot "Aria" dan komunitas.',
  },
  {
    icon: 'fas fa-newspaper',
    title: 'Proyek Jurnalistik',
    description: 'Mengemas riset dan berita seputar anime & budaya Jejepangan.',
  },
]

export default function ProyekPage() {
  return (
    <div className="min-h-screen bg-surface-bg pt-20">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 py-12">
        <section className="bg-surface-panel rounded-2xl shadow-sm p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-base text-center mb-4">
            Tempat Ide Liar Jadi Nyata
          </h1>
          <p className="text-center text-text-secondary text-[14px] mb-10 max-w-lg mx-auto">
            Di AquaNime, ide-ide kreatifmu akan menemukan jalannya!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="bg-surface-bg p-6 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-primary-light text-4xl mb-4 text-center">
                  <i className={p.icon} />
                </div>
                <h3 className="text-primary-base font-bold text-lg mb-3 text-center">{p.title}</h3>
                <p className="text-text-secondary text-[13px] leading-[1.7] text-center">{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}