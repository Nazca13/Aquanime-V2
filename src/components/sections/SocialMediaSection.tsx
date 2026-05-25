import { SocialIcons } from '../ui/SocialIcons'

export function SocialMediaSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-homepage-light dark:bg-homepage-dark bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">
          LIHAT AKTIVITAS KAMI<br />
          LEBIH DEKAT DI SOSIAL MEDIA
        </h2>
        
        <div className="relative">
          <div className="absolute inset-0 bg-white/10 rounded-3xl blur-sm"></div>
          <div className="relative bg-white/5 rounded-3xl p-8">
            <SocialIcons size="lg" className="justify-center space-x-8" />
          </div>
        </div>
      </div>
    </section>
  )
}