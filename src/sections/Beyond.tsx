import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { beyond, profile } from '../content/profile'
import { icons } from '../components/Icons'
import { Glow, Reveal, SectionHead } from '../components/motion'

export function Beyond() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%'])

  return (
    <section className="section wrap" id="beyond" aria-labelledby="beyond-title">
      <SectionHead
        id="beyond-title"
        kicker="Beyond the dashboard"
        a="Off the clock, I make"
        b="some noise"
        sub="When the dashboards are closed, I'm on stage with a guitar, out on a solo ride, or working on an event."
      />

      <div className="beyond-grid" ref={ref}>
        <Reveal className="stage">
          <motion.img
            src={profile.images.music}
            alt={`${profile.first} performing live on stage with an acoustic guitar (AI-enhanced from his photo)`}
            loading="lazy"
            style={{ y: imgY, scale: 1.18 }}
          />
          <div className="stage-shade" aria-hidden="true" />
          <a className="ig-badge glass" href={profile.instagram} target="_blank" rel="noreferrer">
            <span className="ig-orb">
              <icons.instagram size={18} />
            </span>
            <span>
              <b>{profile.instagramHandle}</b>
              <small>AKSH HOSAMANI | Musician</small>
            </span>
            <icons.out size={14} />
          </a>
          <p className="stage-quote">
            <span>“{beyond.bio}”</span>
            <small>from his Instagram bio</small>
          </p>
          <div className="eq" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <i key={i} style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </Reveal>

        <div className="beyond-side">
          <Reveal className="bio-tags">
            {beyond.bioTags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </Reveal>

          {beyond.cards.map((c, i) => {
            const Icon = icons[c.kind as 'music' | 'moto' | 'events']
            return (
              <Reveal key={c.title} delay={0.08 * i}>
                <Glow className="card act">
                  <span className="icon-orb sm">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                    <a href={c.href} target="_blank" rel="noreferrer" className="act-link">
                      <icons.instagram size={14} /> {c.handle}
                    </a>
                  </div>
                </Glow>
              </Reveal>
            )
          })}

          <Reveal className="beyond-ctas" delay={0.2}>
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="btn btn-ig">
              <icons.instagram size={18} /> Follow on Instagram
            </a>
            <a href={beyond.youtube} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <icons.youtube size={18} /> YouTube
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
