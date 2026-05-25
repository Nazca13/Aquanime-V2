import Image from 'next/image'

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed">
      <div className="bg-primary-light3/80 dark:bg-gray-900/80 min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <section className="bg-white/95 dark:bg-gray-800/95 rounded-lg shadow-xl p-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-primary-blue dark:text-primary-light2 mb-6 text-center">
              Portal Informasi Komunitas
            </h1>
            
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">
                Sedang Maintenance
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Kami sedang menyiapkan konten menarik untuk Portal Informasi Komunitas kami. 
                Mohon bersabar dan nantikan pembaruan!
              </p>
              <Image
                src="/images/aria_coming_soon.png"
                alt="Aria Coming Soon"
                width={250}
                height={250}
                className="mx-auto"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}