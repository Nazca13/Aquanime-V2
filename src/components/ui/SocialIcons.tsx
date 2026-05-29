const socialLinks = [
  { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
  { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
  { icon: 'fab fa-tiktok', href: '#', label: 'TikTok' },
  { icon: 'fab fa-youtube', href: '#', label: 'YouTube' },
  { icon: 'fab fa-discord', href: '#', label: 'Discord' },
]

interface SocialIconsProps {
  /** 'ghost' = white outline only (navbar), 'filled' = blue bg box (footer) */
  variant?: 'ghost' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function SocialIcons({ variant = 'ghost', size = 'md', className = '' }: SocialIconsProps) {
  const sizeMap = {
    sm: 'text-[11px]',
    md: 'text-[13px]',
    lg: 'text-[15px]',
  }

  const gapMap = {
    sm: 'gap-2.5',
    md: 'gap-3',
    lg: 'gap-3.5',
  }

  if (variant === 'ghost') {
    return (
      <div className={`flex items-center ${gapMap[size]} ${className}`}>
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className={`
              text-white/70 hover:text-white
              transition-all duration-200
              ${sizeMap[size]}
            `}
          >
            <i className={s.icon} />
          </a>
        ))}
      </div>
    )
  }

  // variant === 'filled'
  const filledSizeMap = {
    sm: 'w-7 h-7 text-[10px]',
    md: 'w-8 h-8 text-[11px]',
    lg: 'w-9 h-9 text-[12px]',
  }

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {socialLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className={`
            flex items-center justify-center rounded
            bg-primary-light text-white
            hover:bg-accent-primary hover:-translate-y-0.5
            transition-all duration-200
            ${filledSizeMap[size]}
          `}
        >
          <i className={s.icon} />
        </a>
      ))}
    </div>
  )
}