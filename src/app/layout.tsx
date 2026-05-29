import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'AquaNime — Dari Komunitas Kreatif Menuju Panggung Digital',
  description:
    'Rumah bagi para individu di balik layar industri kreatif pop-kultur Jepang. AquaNime hadir bersama Animae untuk mendukung perjalananmu.',
  keywords: [
    'aquanime',
    'animae',
    'komunitas anime',
    'pop-kultur jepang',
    'kreator jejepangan',
    'ekosistem digital',
  ],
  authors: [{ name: 'AquaNime Community' }],
  openGraph: {
    title: 'AquaNime — Dari Komunitas Kreatif Menuju Panggung Digital',
    description:
      'Rumah bagi para individu di balik layar industri kreatif pop-kultur Jepang.',
    type: 'website',
    locale: 'id_ID',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-poppins">
        <ThemeProvider>
          <div className="min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
