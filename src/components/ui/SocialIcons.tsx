const socialLinks = [
  { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
  { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
  { icon: 'fab fa-tiktok', href: '#', label: 'TikTok' },
  { icon: 'fab fa-youtube', href: '#', label: 'YouTube' },
  { icon: 'fab fa-discord', href: '#', label: 'Discord' },
]

interface SocialIconsProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function SocialIcons({ size = 'md', className = '' }: SocialIconsProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  }

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className={`text-white hover:text-accent-yellow transition-all duration-300 hover:-translate-y-1 ${sizeClasses[size]}`}
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  )
}