// Small line icons, drawn here so the site has no icon-font dependency.
type P = { size?: number; className?: string }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export const icons = {
  query: ({ size = 22, className }: P) => (
    <svg {...base(size)} className={className}>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6M5 11.5v6c0 1.4 3.1 2.5 7 2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
      <path d="M19.4 19.4L21 21" />
    </svg>
  ),
  dash: ({ size = 22, className }: P) => (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 16v-3M11 16V9M15 16v-5M3 7h18" />
    </svg>
  ),
  stats: ({ size = 22, className }: P) => (
    <svg {...base(size)} className={className}>
      <path d="M3 20h18" />
      <path d="M4 16l5-6 4 3 7-8" />
      <path d="M16 5h4v4" />
    </svg>
  ),
  people: ({ size = 22, className }: P) => (
    <svg {...base(size)} className={className}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16 14.6c2.8.2 5 2.1 5 5" />
    </svg>
  ),
  arrow: ({ size = 16, className }: P) => (
    <svg {...base(size)} className={className} strokeWidth={2.2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  out: ({ size = 16, className }: P) => (
    <svg {...base(size)} className={className} strokeWidth={2.2}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  ),
  pin: ({ size = 16, className }: P) => (
    <svg {...base(size)} className={className}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 1114 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  mail: ({ size = 18, className }: P) => (
    <svg {...base(size)} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </svg>
  ),
  phone: ({ size = 18, className }: P) => (
    <svg {...base(size)} className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
    </svg>
  ),
  linkedin: ({ size = 18, className }: P) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4z" />
    </svg>
  ),
  check: ({ size = 16, className }: P) => (
    <svg {...base(size)} className={className} strokeWidth={2.4}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  ),
  award: ({ size = 22, className }: P) => (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14l-1.5 7 5-3 5 3-1.5-7" />
    </svg>
  ),
  cap: ({ size = 22, className }: P) => (
    <svg {...base(size)} className={className}>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6" />
    </svg>
  ),
  instagram: ({ size = 18, className }: P) => (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  youtube: ({ size = 18, className }: P) => (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="M10 9.2v5.6l5-2.8z" fill="currentColor" />
    </svg>
  ),
  music: ({ size = 22, className }: P) => (
    <svg {...base(size)} className={className}>
      <path d="M14 4l6 6M17 7l-6.5 6.5" />
      <path d="M10.5 13.5a4 4 0 10-1.2 4.9c.9-.7 1.7-1.8 1.9-3" />
      <circle cx="7.6" cy="15.6" r="1.2" />
    </svg>
  ),
  moto: ({ size = 22, className }: P) => (
    <svg {...base(size)} className={className}>
      <circle cx="5.5" cy="16.5" r="3.5" />
      <circle cx="18.5" cy="16.5" r="3.5" />
      <path d="M5.5 16.5l4-6h5l4 6M14.5 10.5L13 6h3M9.5 10.5l3 6" />
    </svg>
  ),
  events: ({ size = 22, className }: P) => (
    <svg {...base(size)} className={className}>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M12 13l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3z" />
    </svg>
  ),
  spark: ({ size = 14, className }: P) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" />
    </svg>
  ),
}

/** Brand mark: an "A" peak with a rising chart line through it. */
export function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c4b5fd" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="19" fill="rgba(124,58,237,.16)" stroke="url(#lg)" strokeWidth="1.5" />
      <path d="M10 29L20 10l10 19" fill="none" stroke="url(#lg)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 24l5-3 4 2 6-6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
