'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface Message {
  id: string
  sender: 'user' | 'aria'
  content: string
  timestamp: Date
}

const manualResponses = [
  {
    keywords: ['halo', 'hai', 'hi', 'salam', 'konbanwa', 'hey', 'hello', 'apa kabar'],
    response: 'Konbanwa! ✨ Selamat datang di AquaNime! Apa kabar hari ini? Aria siap bantu kalau kamu butuh info! 😄'
  },
  {
    keywords: ['apa itu aquanime', 'tentang aquanime', 'aquanime apa', 'sejarah aquanime'],
    response: 'AquaNime itu komunitas kreatif pecinta budaya Jepang! 🎨🎵 Awalnya dari "L-Army Ordinary Weebs" di 2017, lalu rebranding jadi AquaNime Ordinary Weebs di 2022! Visi kami? Jadi komunitas terdepan yang menginspirasi kreativitas! (＾▽＾)ノ'
  },
  {
    keywords: ['proyek', 'project', 'apa saja proyek', 'karya apa'],
    response: 'Di AquaNime ada banyak proyek keren! ✨ Ada Proyek Maskot Aria, Band, Light Novel, sama Jurnalistik. Tiap proyek punya tujuan unik buat kembangin kreativitas member. Cek halaman Proyek untuk detailnya ya! (●\'ω\'●)'
  },
  {
    keywords: ['maskot', 'aria', 'aria ayumi', 'siapa aria'],
    response: 'Aria itu maskot kesayangan kita! 💖 Dia berusia 18 tahun, lahir di Jakarta, dan punya semangat tinggi untuk mewujudkan mimpi. Perjalanan Aria mencerminkan semangat semua member AquaNime! (*^▽^*)'
  },
  {
    keywords: ['gabung', 'join', 'cara gabung', 'ikut komunitas'],
    response: 'Mau gabung AquaNime? Yuk! 😄 Caranya gampang banget, tinggal baca Kode Etik, pilih platform (Discord/WhatsApp), isi formulir, terus verifikasi. Kunjungi halaman Komunitas kita untuk info selengkapnya ya! (｡>ω<｡)'
  },
]

function getManualResponse(userMessage: string): string {
  const lowerCaseMessage = userMessage.toLowerCase()
  for (const entry of manualResponses) {
    for (const keyword of entry.keywords) {
      if (lowerCaseMessage.includes(keyword)) {
        return entry.response
      }
    }
  }
  return 'Aria kurang paham, nih. 😵 Bisa tanyakan lagi atau coba topik tentang AquaNime atau budaya Jepang? 🙏 (´•ω•`)'
}

export function AriaChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const welcomeMessage: Message = {
          id: '1',
          sender: 'aria',
          content: 'Halo! 👋 Ada yang bisa Aria bantu hari ini? 😄',
          timestamp: new Date(),
        }
        setMessages([welcomeMessage])
      }, 500)
    }
  }, [isOpen, messages.length])

  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const ariaResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'aria',
        content: getManualResponse(inputValue),
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, ariaResponse])
      setIsTyping(false)
    }, Math.random() * 1000 + 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-8 right-4 z-50">
      {/* Chat Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative"
      >
        <Image
          src="/images/aria_chibi_icon.png"
          alt="Aria Chat"
          width={50}
          height={50}
          className="rounded-full"
        />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 bg-accent-yellow text-dark-grey text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
        )}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-slide-in">
          {/* Header */}
          <div className="bg-primary-blue text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold flex items-center gap-2">
              Aria's Chat <i className="fas fa-robot"></i>
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-accent-yellow transition-colors text-xl"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-primary-light3 dark:bg-gray-700">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary-blue text-white rounded-br-sm'
                      : 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white rounded-bl-sm flex items-start gap-2'
                  }`}
                >
                  {message.sender === 'aria' && (
                    <Image
                      src="/images/aria_chibi_icon.png"
                      alt="Aria"
                      width={24}
                      height={24}
                      className="rounded-full flex-shrink-0 mt-1"
                    />
                  )}
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white dark:bg-gray-600 p-3 rounded-lg rounded-bl-sm flex items-center gap-2">
                  <Image
                    src="/images/aria_chibi_icon.png"
                    alt="Aria"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-primary-light2 dark:bg-gray-600 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ketik pesan Anda..."
              className="flex-1 px-4 py-2 rounded-full border border-primary-light1 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-gray-700 dark:text-white dark:border-gray-500"
            />
            <button
              onClick={sendMessage}
              className="bg-accent-yellow text-dark-grey rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-400 transition-colors"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}