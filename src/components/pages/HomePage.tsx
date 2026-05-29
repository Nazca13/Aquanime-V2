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
      {/* Flex column + same bg = ZERO gap possible */}
      <div className="flex flex-col" style={{ backgroundColor: '#2F7FB4' }}>
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
