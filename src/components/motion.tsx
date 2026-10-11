import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'motion/react'

import { EASE } from './ease'

/** Fade + rise when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Pill kicker + big title with a gradient tail, like the reference layout. */
export function SectionHead({
  kicker,
  a,
  b,
  sub,
  id,
}: {
  kicker: string
  a: string
  b?: string
  sub?: string
  id: string
}) {
  return (
    <Reveal className="section-head">
      <p className="kicker">{kicker}</p>
      <h2 id={id}>
        {a} {b && <span className="grad">{b}</span>}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  )
}

/** Counts up from 0 the first time it scrolls into view. */
export function Counter({ to, suffix = '', duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduce = useReducedMotion()
  const [val, setVal] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const c = animate(0, to, { duration, ease: EASE, onUpdate: (v) => setVal(Math.round(v)) })
    return () => c.stop()
  }, [inView, reduce, to, duration])

  return (
    <span ref={ref} className="counter">
      {val}
      {suffix}
    </span>
  )
}

/** Card that tracks the pointer to drive a soft spotlight (--mx / --my). */
export function Glow({ children, className = '', as: Tag = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'article' | 'li' }) {
  return (
    <Tag
      className={`glow ${className}`}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
      }}
    >
      {children}
    </Tag>
  )
}
