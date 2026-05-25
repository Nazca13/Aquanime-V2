'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Nama Member 1',
    role: 'Divisi Kreatif',
    content: 'Bergabung dengan AquaNime adalah salah satu keputusan terbaik saya! Saya menemukan banyak teman baru dan bisa mengembangkan bakat saya di sini.',
    avatar: '/images/member1.png',
  },
  {
    name: 'Nama Member 2',
    role: 'Regional Bandung',
    content: 'Dukungan yang saya dapatkan dari komunitas ini luar biasa. Ide-ide saya tidak pernah dianggap aneh, justru selalu didukung untuk berkembang.',
    avatar: '/images/member2.png',
  },
  {
    name: 'Nama Member 3',
    role: 'Proyek Band',
    content: 'Sering ada event dan kolaborasi seru. AquaNime bukan hanya komunitas, tapi keluarga yang selalu ada untuk saling belajar.',
    avatar: '/images/member3.png',
  },
  {
    name: 'Nama Member 4',
    role: 'Divisi Konten',
    content: 'Dari cuma suka-suka anime, sekarang saya jadi bisa nulis light novel berkat bimbingan dari para senior di sini.',
    avatar: '/images/member4.png',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const nextSlide = () => {
    const totalSlides = Math.ceil(testimonials.length / itemsPerView)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    const totalSlides = Math.ceil(testimonials.length / itemsPerView)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          DARI KOMUNITAS BIASA,<br />
          JADI TEMPAT BERKEMBANG LUAR BIASA
        </h2>
        <p className="text-white text-lg md:text-xl mb-12 animate-fade-in">
          Komunitas ini lebih dari sekadar kumpul-kumpul ini tentang perjalanan dan transformasi bareng teman-teman yang sepemikiran.
        </p>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-4 ${
                    itemsPerView === 1 ? 'w-full' : itemsPerView === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="bg-white/95 dark:bg-gray-800/95 p-6 rounded-lg shadow-xl">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={70}
                      height={70}
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <h4 className="font-semibold text-primary-blue dark:text-primary-light2">
                      {testimonial.name}
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary-blue rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary-blue rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent-yellow scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}