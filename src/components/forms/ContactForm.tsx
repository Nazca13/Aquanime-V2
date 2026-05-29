'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'info' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Harap isi semua kolom yang wajib!' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'info', message: 'Mengirim...' })

    try {
      emailjs.init("2tQt_0ldRIoW6V-KK")
      await emailjs.send("service_gc1bb7h", "template_iqjyj4r", {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Tanpa Subjek',
        message: formData.message,
      })

      setStatus({ type: 'success', message: 'Email berhasil terkirim! Terima kasih atas pesan Anda.' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Gagal mengirim email. Silakan coba lagi.' })
      console.error('EmailJS error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = 'w-full px-4 py-3 border border-surface-border rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent bg-white text-text-primary text-[14px] transition-all'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-[13px] font-semibold text-text-primary mb-1.5">
          Nama Lengkap *
        </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className="block text-[13px] font-semibold text-text-primary mb-1.5">
          Email Anda *
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} />
      </div>

      <div>
        <label htmlFor="subject" className="block text-[13px] font-semibold text-text-primary mb-1.5">
          Subjek
        </label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="block text-[13px] font-semibold text-text-primary mb-1.5">
          Pesan Anda *
        </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-vertical`} />
      </div>

      {status.message && (
        <div className={`p-3 rounded-xl text-[13px] ${
          status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200'
          : status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200'
          : 'bg-blue-50 text-blue-700 border border-blue-200'
        }`}>
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-light text-white py-3 px-6 rounded-xl font-bold text-[13px] tracking-wider hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
      </button>
    </form>
  )
}