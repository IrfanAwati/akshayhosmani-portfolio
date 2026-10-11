import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef, useState } from 'react'
import { heroKpis, profile } from '../content/profile'
import { Bars, LineDraw, Ring } from '../components/Charts'
import { EASE } from '../components/ease'
import { icons } from '../components/Icons'
import { Counter } from '../components/motion'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const artY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120])
  const [imgOk, setImgOk] = useState(true)

  // pointer parallax for the floating KPI cards
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 80, damping: 18 })
  const sy = useSpring(py, { stiffness: 80, damping: 18 })
  const near = { x: useTransform(sx, (v) => v * 22), y: useTransform(sy, (v) => v * 22) }
  const far = { x: useTransform(sx, (v) => v * -14), y: useTransform(sy, (v) => v * -14) }

  const up = (d: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease: EASE, delay: d } }
  const pop = (d: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, scale: 0.85, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, transition: { duration: 0.9, ease: EASE, delay: d } }

  const [k1, k2, k3] = heroKpis

  return (
    <section
      className="hero"
      id="home"
      ref={ref}
      aria-labelledby="hero-title"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== 'mouse') return
        px.set(e.clientX / window.innerWidth - 0.5)
        py.set(e.clientY / window.innerHeight - 0.5)
      }}
    >
      <div className="hero-bg" aria-hidden="true">
        <div className="beam b1" />
        <div className="beam b2" />
        <div className="grid-floor" />
      </div>

      <div className="hero-copy">
        <motion.p className="pill" {...up(0.05)}>
          <span className="live-dot" /> {profile.kicker}
        </motion.p>
        <motion.h1 id="hero-title" className="hero-title" {...up(0.15)}>
          <span className="sr-only">
            {profile.first} {profile.last}, {profile.role}.{' '}
          </span>
          {profile.headline.map((l, i) => (
            <span key={l} className={i === profile.headline.length - 1 ? 'line grad' : 'line'}>
              {l}
            </span>
          ))}
        </motion.h1>
        <motion.p className="hero-intro" {...up(0.3)}>
          Hi, I'm <b>{profile.first} {profile.last}</b>. {profile.intro}
        </motion.p>

        <motion.div className="hero-ctas" {...up(0.4)}>
          <a href="#projects" className="btn btn-primary">
            See my work <icons.arrow />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let's talk
            <span className="btn-ring">
              <icons.out size={13} />
            </span>
          </a>
        </motion.div>

        <motion.div className="hero-meta" {...up(0.5)}>
          <span className="chips" aria-hidden="true">
            {['SQL', 'BI', 'Py', 'X'].map((c) => (
              <i key={c}>{c}</i>
            ))}
          </span>
          <p>
            <icons.pin size={14} /> Based in <b>{profile.location}</b>
            <br />
            Open to Business Analyst roles
          </p>
        </motion.div>
      </div>

      <motion.div className="hero-art" style={{ y: artY }}>
        <div className="halo" aria-hidden="true" />
        <motion.div className="portrait" {...pop(0.2)}>
          {imgOk ? (
            <img
              src={profile.images.hero}
              alt={`Professional portrait of ${profile.first} ${profile.last} in a charcoal suit and white shirt (AI-enhanced from his photos)`}
              onError={() => setImgOk(false)}
              fetchPriority="high"
            />
          ) : (
            <div className="portrait-fallback" aria-hidden="true">
              <span className="mono">AH</span>
              <Bars className="pf-bars" color="#8b5cf6" heights={[22, 38, 30, 52, 46, 66, 60, 82, 74, 94]} />
            </div>
          )}
        </motion.div>

        <motion.div className="kpi k-views glass" style={near} {...pop(0.6)}>
          <p className="kpi-label">{k1.label}</p>
          <p className="kpi-val">
            <Counter to={k1.value} suffix={k1.suffix} />
          </p>
          <p className="kpi-delta">{k1.delta}</p>
          <LineDraw className="kpi-line" />
        </motion.div>

        <motion.div className="kpi k-dash glass" style={far} {...pop(0.8)}>
          <p className="kpi-label">{k2.label}</p>
          <p className="kpi-val">
            <Counter to={k2.value} suffix={k2.suffix} />
          </p>
          <p className="kpi-delta">{k2.delta}</p>
          <Bars className="kpi-bars" />
        </motion.div>

        <motion.div className="kpi k-yrs glass" style={near} {...pop(1)}>
          <div>
            <p className="kpi-label">{k3.label}</p>
            <p className="kpi-val">
              <Counter to={k3.value} suffix={k3.suffix} />
            </p>
            <p className="kpi-delta">{k3.delta}</p>
          </div>
          <Ring />
        </motion.div>
      </motion.div>

      <a href="#pillars" className="scroll-cue" aria-label="Scroll to content">
        <span className="mouse" aria-hidden="true" />
      </a>
    </section>
  )
}
