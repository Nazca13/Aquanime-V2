'use client'

import { useState } from 'react'
import { ContactForm } from '@/components/forms/ContactForm'

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-surface-bg pt-20">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8 py-12">
        <div className="bg-surface-panel rounded-2xl shadow-sm p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-base mb-5">
                Kontak Kami
              </h1>
              <p className="text-text-secondary text-[14px] leading-[1.75] mb-6">
                Kami senang mendengar dari Anda! Silakan hubungi kami melalui formulir atau informasi di bawah ini.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-primary-light" />
                  <span className="text-text-secondary text-[14px]">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:aquanime.ow@gmail.com" className="text-primary-light hover:underline">
                      aquanime.ow@gmail.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-primary-light" />
                  <span className="text-text-secondary text-[14px]">
                    <strong>Wilayah:</strong> Jabodetabek & Jawa Barat
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary-base mb-2">Partnership / Kolaborasi</h3>
                  <p className="text-text-secondary text-[13px] leading-[1.7]">
                    AquaNime terbuka untuk peluang kerjasama dengan organisasi, brand, atau individu yang memiliki visi serupa.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary-base mb-5">Kirim Pesan</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}