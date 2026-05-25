import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { SocialMediaSection } from '@/components/sections/SocialMediaSection'
import { AriaChat } from '@/components/ui/AriaChat'

export default function HomePage() {
  return (
    <div className="homepage-container">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CallToActionSection />
      <SocialMediaSection />
      <AriaChat />
    </div>
  )
}