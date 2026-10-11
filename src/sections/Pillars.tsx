import { pillars } from '../content/profile'
import { icons } from '../components/Icons'
import { Reveal } from '../components/motion'

export function Pillars() {
  return (
    <section className="pillars wrap" id="pillars" aria-label="What I do">
      <Reveal className="pillars-card">
        {pillars.map((p) => {
          const Icon = icons[p.icon as keyof typeof icons]
          return (
            <div className="pillar" key={p.title}>
              <span className="icon-orb">
                <Icon />
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
