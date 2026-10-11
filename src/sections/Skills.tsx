import type { CSSProperties } from 'react'
import { skillGroups, tools } from '../content/skills'
import { Glow, Reveal, SectionHead } from '../components/motion'

export function Skills() {
  const loop = [...tools, ...tools]
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHead id="skills-title" kicker="Toolkit" a="Everything I use to make data" b="speak" />
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((t, i) => (
            <span key={i} className="mq-item">
              {t.name}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap">
        <ul className="tool-grid" aria-label="Tools">
          {tools.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <Glow as="li" className="card tool">
                <span className="tool-tile" style={{ '--c': t.color } as CSSProperties}>
                  {t.icon ? <img src={t.icon} alt="" width={30} height={30} /> : <b>{t.mono}</b>}
                </span>
                <span className="tool-name">{t.name}</span>
              </Glow>
            </Reveal>
          ))}
        </ul>

        <div className="skill-groups">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.1} className="card sg">
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
