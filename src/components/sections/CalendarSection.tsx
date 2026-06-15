'use client'

import { useState, useMemo } from 'react'

const EVENTS = [
  { id: 1, dates: '21-22', month: 6, year: 2026, name: 'COMIC FRONTIER 20',  color: 'bg-primary-light' },
  { id: 2, dates: '5-6',   month: 7, year: 2026, name: 'JAPAN EXPO JAKARTA', color: 'bg-accent-primary' },
  { id: 3, dates: '12',    month: 7, year: 2026, name: 'COSPLAY MATSURI',     color: 'bg-accent-secondary' },
  { id: 4, dates: '19-20', month: 8, year: 2026, name: 'ANIMAE FEST 2026',   color: 'bg-primary-light' },
  { id: 5, dates: '2-3',   month: 9, year: 2026, name: 'JEJEPANGAN BANDUNG', color: 'bg-accent-primary' },
]

const DAYS = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']
const MONTHS = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']

function parseDates(dates: string) {
  const parts = dates.split('-')
  const start = parseInt(parts[0])
  const end = parts[1] ? parseInt(parts[1]) : start
  const result: number[] = []
  for (let d = start; d <= end; d++) result.push(d)
  return result
}

export function CalendarSection() {
  const [month, setMonth] = useState(6)
  const [year, setYear] = useState(2026)
  const [hovered, setHovered] = useState<number | null>(null)

  const daysInMonth = new Date(year, month, 0).getDate()
  const firstDay = (() => { const d = new Date(year, month - 1, 1).getDay(); return d === 0 ? 6 : d - 1 })()

  const eventDays = useMemo(() => {
    const s = new Set<number>()
    EVENTS.forEach((e) => { if (e.month === month && e.year === year) parseDates(e.dates).forEach((d) => s.add(d)) })
    return s
  }, [month, year])

  const hoveredDays = useMemo(() => {
    if (hovered === null) return new Set<number>()
    const evt = EVENTS.find((e) => e.id === hovered)
    if (!evt || evt.month !== month || evt.year !== year) return new Set<number>()
    return new Set(parseDates(evt.dates))
  }, [hovered, month, year])

  const prevMonth = () => { if (month === 1) { setMonth(12); setYear((y) => y - 1) } else setMonth((m) => m - 1) }
  const nextMonth = () => { if (month === 12) { setMonth(1); setYear((y) => y + 1) } else setMonth((m) => m + 1) }

  return (
    <section id="calendar" className="relative w-full bg-surface-bg py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(to right, #0F3E61 1px, transparent 1px), linear-gradient(to bottom, #0F3E61 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-[600px] mx-auto mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-primary-base font-extrabold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] tracking-tight leading-[1.15]">
            KALENDER EVENT
            <br />
            POP-KULTUR DI INDONESIA
          </h2>
        </div>

        {/* Content: List + Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Left — Events list */}
          <div className="space-y-2 sm:space-y-2.5">
            {EVENTS.map((e) => (
              <div
                key={e.id}
                onMouseEnter={() => setHovered(e.id)}
                onMouseLeave={() => setHovered(null)}
                className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                  hovered === e.id
                    ? 'bg-primary-base text-white border-primary-light shadow-lg shadow-primary-light/15'
                    : 'bg-white text-text-primary border-surface-border hover:border-primary-light/30'
                }`}
              >
                <span className={`${e.color} text-white text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg min-w-[44px] sm:min-w-[48px] text-center`}>
                  {e.dates}
                </span>
                <span className="font-semibold text-[12px] sm:text-[13px] tracking-wide">{e.name}</span>
              </div>
            ))}
          </div>

          {/* Right — Calendar grid */}
          <div className="bg-primary-base rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl">
            {/* Month nav */}
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <button onClick={prevMonth} className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/8 text-white flex items-center justify-center hover:bg-white/15 transition-colors">
                <i className="fas fa-chevron-left text-[10px] sm:text-[11px]" />
              </button>
              <h3 className="text-white font-bold text-[12px] sm:text-[13px] md:text-[14px] tracking-wider">
                {MONTHS[month - 1]} {year}
              </h3>
              <button onClick={nextMonth} className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/8 text-white flex items-center justify-center hover:bg-white/15 transition-colors">
                <i className="fas fa-chevron-right text-[10px] sm:text-[11px]" />
              </button>
            </div>

            {/* Day labels */}
            <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-1 sm:mb-1.5">
              {DAYS.map((d) => (
                <div key={d} className="text-center text-white/35 text-[9px] sm:text-[10px] font-medium py-1">{d}</div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
              {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} className="aspect-square" />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1
                const isHov = hoveredDays.has(day)
                const isEvt = eventDays.has(day)
                return (
                  <div
                    key={day}
                    className={`aspect-square flex items-center justify-center rounded-lg text-[10px] sm:text-[11px] md:text-[12px] font-medium transition-all duration-300 ${
                      isHov ? 'bg-primary-light text-white shadow-md shadow-primary-light/35 scale-110'
                      : isEvt ? 'bg-primary-light/20 text-primary-light'
                      : 'text-white/45 hover:bg-white/5'
                    }`}
                  >
                    {day}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
