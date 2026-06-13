import { HeroSection } from '@/components/sections/HeroSection'
import { RegionalSection } from '@/components/sections/RegionalSection'
import { ExpressionSection } from '@/components/sections/ExpressionSection'
import { EcosystemSection } from '@/components/sections/EcosystemSection'
import { CalendarSection } from '@/components/sections/CalendarSection'
import { MeetAriaSection } from '@/components/sections/MeetAriaSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { FuelSection } from '@/components/sections/FuelSection'

export function HomePage() {
  return (
    <>
      {/*
        Shared background wrapper: hero image spans BOTH hero + regional.
        No boundary between them — same image continues underneath.
      */}
      <div
        style={{
          position: 'relative',
          backgroundImage: "url('/images/AquaNime-Bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Shared dark overlay across both sections */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.45)',
            zIndex: 0,
          }}
        />
        <HeroSection />
        <RegionalSection />
      </div>
      <ExpressionSection />
      <EcosystemSection />
      <CalendarSection />
      <MeetAriaSection />
      <PartnersSection />
      <FuelSection />
    </>
  )
}
