'use client'

import { useState } from 'react'
import { ContactForm } from '@/components/forms/ContactForm'

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed">
      <div className="bg-primary-light3/80 dark:bg-gray-900/80 min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white/95 dark:bg-gray-800/95 rounded-lg shadow-xl p-8 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h1 id="kontak-kami" className="text-4xl font-bold text-primary-blue dark:text-primary-light2 mb-6">
                  Kontak Kami
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Kami senang mendengar dari Anda! Silakan hubungi kami melalui formulir atau informasi di bawah ini.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-envelope text-primary-blue dark:text-primary-light2"></i>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Email:</strong> 
                      <a href="mailto:aquanime.ow@gmail.com" className="text-primary-blue dark:text-primary-light2 hover:underline ml-2">
                        aquanime.ow@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-map-marker-alt text-primary-blue dark:text-primary-light2"></i>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Wilayah:</strong> Jabodetabek & Jawa Barat
                    </span>
                  </div>
                </div>

                {/* Additional Contact Sections */}
                <div className="space-y-8">
                  <div id="hubungi-founder">
                    <h3 className="text-xl font-semibold text-primary-blue dark:text-primary-light2 mb-3">
                      Hubungi Founder
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Untuk pertanyaan, kolaborasi, atau isu penting lainnya yang ingin disampaikan langsung kepada founder kami.
                    </p>
                  </div>

                  <div id="partnership-kolaborasi">
                    <h3 className="text-xl font-semibold text-primary-blue dark:text-primary-light2 mb-3">
                      Partnership / Kolaborasi
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      AquaNime terbuka untuk peluang kerjasama dengan organisasi, brand, atau individu yang memiliki visi serupa. Mari berkreasi bersama!
                    </p>
                  </div>

                  <div id="media-pr">
                    <h3 className="text-xl font-semibold text-primary-blue dark:text-primary-light2 mb-3">
                      Media & Public Relation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Bagi rekan-rekan media yang membutuhkan informasi, wawancara, atau liputan tentang AquaNime.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-primary-blue dark:text-primary-light2 mb-6">
                  Kirim Pesan
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}