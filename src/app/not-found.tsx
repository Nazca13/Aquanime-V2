import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed flex items-center justify-center">
      <div className="bg-white/95 dark:bg-gray-800/95 rounded-lg shadow-xl p-12 text-center max-w-md mx-4">
        <Image
          src="/images/aria_face_exp1.png"
          alt="Aria Confused"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />
        <h1 className="text-6xl font-bold text-primary-blue dark:text-primary-light2 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Aria tidak bisa menemukan halaman yang kamu cari. Mungkin halaman ini sedang dipindahkan atau tidak ada.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-light1 transition-colors duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}