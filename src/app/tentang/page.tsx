export default function TentangPage() {
  return (
    <div className="min-h-screen bg-surface-bg pt-20">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 py-12">
        {/* About */}
        <section className="bg-surface-panel rounded-2xl shadow-sm p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-base mb-5">
            Tentang AquaNime
          </h1>
          <h2 className="text-xl font-bold text-primary-base mb-3">
            Komunitas Kreatif Jejepangan
          </h2>
          <p className="text-text-secondary text-[14px] leading-[1.75] mb-5">
            AquaNime adalah rumah bagi individu yang bersemangat tentang budaya Jepang,
            kreativitas, seni, musik, anime, dan segala hal terkait. Kami percaya bahwa
            setiap imajinasi berhak untuk diwujudkan!
          </p>
          <h3 className="text-lg font-bold text-primary-base mb-3">
            Sejarah Singkat Perjalanan Kami
          </h3>
          <p className="text-text-secondary text-[14px] leading-[1.75] mb-3">
            Berawal dari kelompok kecil bernama &quot;L-Army Ordinary Weebs&quot; pada tahun 2017,
            komunitas kami berevolusi dan melakukan rebranding menjadi &quot;AquaNime Ordinary Weebs&quot;
            pada 29 Mei 2022.
          </p>
          <p className="text-text-secondary text-[14px] leading-[1.75]">
            Nama &quot;AquaNime&quot; sendiri adalah plesetan dari &quot;Gue Anime&quot; yang populer di media sosial,
            lalu disempurnakan menjadi identitas dinamis kami.
          </p>
        </section>

        {/* Visi Misi */}
        <section id="visi-misi" className="bg-surface-panel rounded-2xl shadow-sm p-8 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-base mb-5">
            Visi & Misi
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-primary-base mb-3">Visi:</h3>
              <p className="text-text-secondary text-[14px] leading-[1.75]">
                Menjadi komunitas terdepan yang menginspirasi dan mendorong kreativitas
                dari segi lisan maupun visual dalam lingkup budaya Jepang.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary-base mb-3">Misi:</h3>
              <ul className="text-text-secondary text-[14px] leading-[1.75] space-y-1.5">
                <li>• Memperluas pengetahuan tentang budaya Jepang dan anime</li>
                <li>• Mendorong kreativitas melalui seni lisan dan visual yang positif</li>
                <li>• Membangun komunitas yang inklusif dan ramah bagi semua anggota</li>
                <li>• Menyediakan ruang bagi anggota untuk berkreasi dengan ide-ide baru</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Maskot */}
        <section id="maskot" className="bg-surface-panel rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-base mb-5">
            Maskot AquaNime: Aria Ayumi
          </h2>
          <p className="text-text-secondary text-[14px] leading-[1.75]">
            Aria adalah gadis muda yang dibesarkan oleh Ibu Dian, seorang pemilik warung
            pecel lele sederhana di Jakarta. Kehidupan Aria yang sederhana dan lingkungan
            yang keras membentuk kepribadiannya menjadi pekerja keras dan penuh empati.
          </p>
        </section>
      </div>
    </div>
  )
}