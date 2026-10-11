import { useState } from 'react'
import { profile } from '../content/profile'
import { certifications, education } from '../content/work'
import { icons } from '../components/Icons'
import { Counter, Glow, Reveal, SectionHead } from '../components/motion'

export function About() {
  const [imgOk, setImgOk] = useState(true)
  return (
    <section className="section wrap" id="about" aria-labelledby="about-title">
      <SectionHead id="about-title" kicker="About me" a="Engineer by degree," b="analyst by choice" />

      <div className="about-grid">
        <Reveal className="card about-main">
          <div className="about-photo">
            {imgOk ? (
              <img src={profile.images.about} alt={`${profile.first} ${profile.last}`} loading="lazy" onError={() => setImgOk(false)} />
            ) : (
              <span className="mono">AH</span>
            )}
          </div>
          <div className="about-copy">
            {profile.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="about-stats">
              <div>
                <b>
                  <Counter to={9} />
                </b>
                <span>month BA internship</span>
              </div>
              <div>
                <b>
                  <Counter to={4} />
                </b>
                <span>companies</span>
              </div>
              <div>
                <b>
                  <Counter to={4} />
                </b>
                <span>case studies</span>
              </div>
            </div>
            <ul className="interests" aria-label="Interests">
              {profile.interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="card edu" delay={0.1}>
          <h3>
            <icons.cap /> Education
          </h3>
          <ol>
            {education.map((e) => (
              <li key={e.title}>
                <span className="edu-period">{e.period}</span>
                <b>{e.title}</b>
                <span>{e.detail}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div className="cert-grid">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <Glow className="card cert">
              <span className="icon-orb sm">
                <icons.award size={20} />
              </span>
              <div>
                <b>{c.title}</b>
                <span>
                  {c.by}
                  {c.when && ` · ${c.when}`}
                </span>
              </div>
            </Glow>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
