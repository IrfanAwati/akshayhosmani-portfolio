import { motion, useReducedMotion } from 'motion/react'
import { EASE } from './ease'

// Decorative, illustrative charts. They show the *kind* of work, not real figures.

const view = { once: true, margin: '0px 0px -10% 0px' } as const

export function LineDraw({ color = '#a78bfa', className }: { color?: string; className?: string }) {
  const reduce = useReducedMotion()
  const d = 'M4 52 C 22 48, 26 40, 40 42 S 60 30, 72 32 S 92 16, 104 20 S 124 6, 136 4'
  return (
    <svg className={className} viewBox="0 0 140 60" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`fill-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity=".35" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={`${d} L136 60 L4 60 Z`}
        fill={`url(#fill-${color})`}
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={view}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
      <motion.path
        d={d}
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={view}
        transition={{ duration: 1.6, ease: EASE }}
      />
      <motion.circle
        cx="136"
        cy="4"
        r="3.5"
        fill={color}
        initial={reduce ? false : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={view}
        transition={{ delay: 1.5, type: 'spring', stiffness: 300 }}
      />
    </svg>
  )
}

export function Bars({ color = '#a78bfa', heights = [30, 46, 38, 62, 54, 78, 92], className }: { color?: string; heights?: number[]; className?: string }) {
  const reduce = useReducedMotion()
  const w = 100 / heights.length
  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      initial={reduce ? false : 'hidden'}
      whileInView="shown"
      viewport={view}
    >
      {heights.map((h, i) => (
        <motion.rect
          key={i}
          x={i * w + w * 0.18}
          width={w * 0.64}
          y={100 - h}
          height={h}
          rx="2"
          fill={color}
          fillOpacity={0.35 + (i / heights.length) * 0.65}
          style={{ transformBox: 'fill-box', originY: 1 }}
          variants={{ hidden: { scaleY: 0 }, shown: { scaleY: 1 } }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 + i * 0.07 }}
        />
      ))}
    </motion.svg>
  )
}

export function Donut({ color = '#f472b6', className }: { color?: string; className?: string }) {
  const reduce = useReducedMotion()
  const segs = [
    { v: 0.42, o: 1 },
    { v: 0.26, o: 0.6 },
    { v: 0.18, o: 0.38 },
    { v: 0.14, o: 0.2 },
  ]
  let acc = 0
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <g transform="rotate(-90 50 50)">
        {segs.map((s, i) => {
          const start = acc
          acc += s.v
          return (
            <motion.circle
              key={i}
              cx="50"
              cy="50"
              r="36"
              fill="none"
              stroke={color}
              strokeOpacity={s.o}
              strokeWidth="14"
              pathLength={1}
              strokeDasharray={`${s.v - 0.012} 1`}
              initial={reduce ? false : { strokeDashoffset: -start, opacity: 0 }}
              whileInView={{ strokeDashoffset: -start, opacity: 1 }}
              viewport={view}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.18 }}
            />
          )
        })}
      </g>
    </svg>
  )
}

export function Flow({ color = '#34d399', className }: { color?: string; className?: string }) {
  const reduce = useReducedMotion()
  const sources = [18, 50, 82]
  return (
    <svg className={className} viewBox="0 0 140 100" fill="none" aria-hidden="true">
      {sources.map((y, i) => (
        <g key={y}>
          <rect x="4" y={y - 9} width="26" height="18" rx="5" stroke={color} strokeOpacity=".7" strokeWidth="1.6" />
          <motion.path
            d={`M30 ${y} C 60 ${y}, 60 50, 92 50`}
            stroke={color}
            strokeWidth="1.8"
            strokeDasharray="4 5"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={view}
            transition={{ duration: 1, delay: 0.2 + i * 0.2, ease: EASE }}
          />
        </g>
      ))}
      <motion.rect
        x="92"
        y="32"
        width="44"
        height="36"
        rx="9"
        fill={color}
        fillOpacity=".18"
        stroke={color}
        strokeWidth="1.8"
        initial={reduce ? false : { scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={view}
        style={{ transformOrigin: '114px 50px' }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      />
      <path d="M104 50l6 6 12-12" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Progress ring used on one hero KPI card. */
export function Ring({ pct = 0.72, color = '#a78bfa' }: { pct?: number; color?: string }) {
  const reduce = useReducedMotion()
  return (
    <svg className="ring" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="17" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="5" />
      <motion.circle
        cx="22"
        cy="22"
        r="17"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        transform="rotate(-90 22 22)"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: pct }}
        transition={{ duration: 1.6, ease: EASE, delay: 1 }}
      />
    </svg>
  )
}
