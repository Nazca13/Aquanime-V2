import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-bg flex items-center justify-center">
      <div className="bg-surface-panel rounded-2xl shadow-sm p-12 text-center max-w-md mx-5">
        <h1 className="text-7xl font-extrabold text-primary-base mb-3">404</h1>
        <h2 className="text-xl font-bold text-text-primary mb-3">Halaman Tidak Ditemukan</h2>
        <p className="text-text-secondary text-[14px] leading-[1.7] mb-8">
          Aria tidak bisa menemukan halaman yang kamu cari.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-[44px] px-7 bg-primary-light text-white font-bold text-[13px] tracking-wider rounded-lg hover:brightness-110 transition-all"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}