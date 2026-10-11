import { motion, useReducedMotion, useScroll } from 'motion/react'
import { useRef } from 'react'
import { roles } from '../content/work'
import { icons } from '../components/Icons'
import { Glow, Reveal, SectionHead } from '../components/motion'

export function Experience() {
  const ref = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })

  return (
    <section className="section wrap" id="experience" aria-labelledby="exp-title">
      <SectionHead
        id="exp-title"
        kicker="Experience"
        a="The journey so"
        b="far"
        sub="From the showroom floor to the dashboard: customer-facing roles that taught me what decision-makers actually need."
      />
      <ol className="timeline" ref={ref}>
        <span className="tl-track" aria-hidden="true">
          <motion.span className="tl-fill" style={{ scaleY: reduce ? 1 : scrollYProgress }} />
        </span>
        {roles.map((r, i) => (
          <li key={r.company} className="tl-item">
            <span className={`tl-dot ${i === 0 ? 'is-now' : ''}`} aria-hidden="true" />
            <Reveal delay={0.05}>
              <Glow className="card role">
                <div className="role-head">
                  <div>
                    <p className="role-period">{r.period}</p>
                    <h3>{r.title}</h3>
                    <p className="role-co">
                      {r.company} <span>· {r.place}</span>
                    </p>
                  </div>
                  <span className="tag">{r.tag}</span>
                </div>
                {r.highlight && (
                  <p className="role-hl">
                    <icons.spark /> {r.highlight}
                  </p>
                )}
                <ul className="role-pts">
                  {r.points.map((p) => (
                    <li key={p}>
                      <icons.check size={15} />
                      {p}
                    </li>
                  ))}
                </ul>
              </Glow>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
