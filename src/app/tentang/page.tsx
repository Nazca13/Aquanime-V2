import Image from 'next/image'
import Link from 'next/link'

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed">
      <div className="bg-primary-light3/80 dark:bg-gray-900/80 min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* About AquaNime Section */}
          <section className="bg-white/95 dark:bg-gray-800/95 rounded-lg shadow-xl p-8 mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-primary-blue dark:text-primary-light2 mb-6">
              Tentang AquaNime
            </h1>
            <h2 className="text-2xl font-semibold text-primary-blue dark:text-primary-light2 mb-4">
              Komunitas Kreatif Jejepangan
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              AquaNime adalah rumah bagi individu yang bersemangat tentang budaya Jepang, 
              kreativitas, seni, musik, anime, dan segala hal terkait. Kami percaya bahwa 
              setiap imajinasi berhak untuk diwujudkan!
            </p>

            <h3 className="text-xl font-semibold text-primary-blue dark:text-primary-light2 mb-4">
              Sejarah Singkat Perjalanan Kami
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Berawal dari kelompok kecil bernama "L-Army Ordinary Weebs" pada tahun 2017, 
              komunitas kami berevolusi dan melakukan rebranding menjadi "AquaNime Ordinary Weebs" 
              pada 29 Mei 2022. Sejak itu, kami tumbuh menjadi komunitas yang beragam, 
              kaya akan pengetahuan, kreativitas, dan pengalaman anggota.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Nama "AquaNime" sendiri adalah plesetan dari "Gue Anime" yang populer di media sosial, 
              lalu disempurnakan menjadi identitas dinamis kami.
            </p>
          </section>

          {/* Vision & Mission */}
          <section id="visi-misi" className="bg-white/95 dark:bg-gray-800/95 rounded-lg shadow-xl p-8 mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary-blue dark:text-primary-light2 mb-6">
              Visi & Misi
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-blue dark:text-primary-light2 mb-4">
                  Visi:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Menjadi komunitas terdepan yang menginspirasi dan mendorong kreativitas 
                  dari segi lisan maupun visual dalam lingkup budaya Jepang, serta memperkuat 
                  hubungan antar anggota melalui kolaborasi dan inovasi.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary-blue dark:text-primary-light2 mb-4">
                  Misi:
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Memperluas pengetahuan tentang budaya Jepang dan anime</li>
                  <li>• Mendorong kreativitas melalui seni lisan dan visual yang positif</li>
                  <li>• Membangun komunitas yang inklusif dan ramah bagi semua anggota</li>
                  <li>• Menyediakan ruang bagi anggota untuk berkreasi dengan ide-ide baru</li>
                  <li>• Mengadakan kompetisi dan tantangan kreatif</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Aria Mascot Section */}
          <section id="maskot" className="bg-white/95 dark:bg-gray-800/95 rounded-lg shadow-xl p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary-blue dark:text-primary-light2 mb-6">
              Maskot AquaNime: Aria Ayumi
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-semibold text-primary-blue dark:text-primary-light2 mb-4">
                  Siapa Itu Aria?
                </h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Nama:</strong> Aria Ayumi</p>
                  <p><strong>Usia:</strong> 18 Tahun</p>
                  <p><strong>Tanggal Lahir:</strong> 12 Mei</p>
                  <p><strong>Tempat Lahir:</strong> Jakarta, Indonesia</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                  Aria adalah gadis muda yang dibesarkan oleh Ibu Dian, seorang pemilik warung 
                  pecel lele sederhana di Jakarta. Kehidupan Aria yang sederhana dan lingkungan 
                  yang keras membentuk kepribadiannya menjadi pekerja keras dan penuh empati. 
                  Dia seorang introvert, namun ramah, mudah bergaul, gigih, dan selalu berani 
                  mencoba hal baru demi impiannya.
                </p>
              </div>
              
              <div className="text-center">
                <Image
                  src="/images/aria_character_sheet_full.png"
                  alt="Aria Ayumi Character Sheet"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-lg mx-auto"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Lihat detail desain Aria dalam berbagai pose dan ekspresi
                </p>
              </div>
            </div>

            {/* Aria Gallery */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-primary-blue dark:text-primary-light2 mb-6">
                Galeri Aria
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { src: '/images/aria_full_pose1.png', caption: 'Aria: Semangat Pagi!' },
                  { src: '/images/aria_full_pose2.png', caption: 'Aria: Waktunya Bermusik!' },
                  { src: '/images/aria_face_exp1.png', caption: 'Aria: Sedang Berpikir' },
                  { src: '/images/aria_face_exp2.png', caption: 'Aria: Senyuman Manis' },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      width={200}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3">
                      <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}