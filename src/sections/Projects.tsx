import type { CSSProperties } from 'react'
import { projects, type Project } from '../content/work'
import { Bars, Donut, Flow, LineDraw } from '../components/Charts'
import { Glow, Reveal, SectionHead } from '../components/motion'

function Chart({ p }: { p: Project }) {
  if (p.chart === 'bars') return <Bars className="pc-chart" color={p.accent} />
  if (p.chart === 'donut') return <Donut className="pc-chart donut" color={p.accent} />
  if (p.chart === 'line') return <LineDraw className="pc-chart" color={p.accent} />
  return <Flow className="pc-chart" color={p.accent} />
}

export function Projects() {
  return (
    <section className="section wrap" id="projects" aria-labelledby="projects-title">
      <SectionHead
        id="projects-title"
        kicker="Analytics projects & case studies"
        a="From raw data to"
        b="decisions"
        sub="Four end-to-end case studies: query, clean, explore, then put it on a dashboard."
      />
      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <Glow as="article" className="card project">
              <div className="pc-top" style={{ '--accent': p.accent } as CSSProperties}>
                <span className="pc-num">0{i + 1}</span>
                <Chart p={p} />
              </div>
              <p className="pc-kind" style={{ color: p.accent }}>
                {p.kind}
              </p>
              <h3>{p.title}</h3>
              <p className="pc-sum">{p.summary}</p>
              <ul className="pc-kpis" aria-label="KPIs tracked">
                {p.kpis.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
              <ul className="pc-stack" aria-label="Tools">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Glow>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
