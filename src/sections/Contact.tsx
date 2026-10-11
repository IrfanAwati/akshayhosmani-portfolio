import { nav, profile } from '../content/profile'
import { icons, Logo } from '../components/Icons'
import { Reveal } from '../components/motion'

export function Contact() {
  const channels = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: icons.mail },
    { label: 'Phone', value: profile.phone, href: profile.phoneHref, Icon: icons.phone },
    { label: 'LinkedIn', value: 'akshay-hosamani', href: profile.linkedin, Icon: icons.linkedin },
  ]
  return (
    <>
      <section className="section wrap" id="contact" aria-labelledby="contact-title">
        <Reveal className="cta">
          <div className="cta-copy">
            <p className="pill">
              <span className="live-dot" /> Available for new opportunities
            </p>
            <h2 id="contact-title">
              Need someone who turns data into <span className="grad">decisions?</span>
            </h2>
            <p>Business analysis, BI reporting, dashboards or sales analytics. Let's have a conversation.</p>
            <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg">
              Say hello <icons.arrow />
            </a>
          </div>
          <ul className="channels">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <span className="icon-orb sm">
                    <Icon />
                  </span>
                  <span>
                    <small>{label}</small>
                    {value}
                  </span>
                  <icons.out className="ch-out" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <footer className="footer wrap">
        <div className="f-brand">
          <a href="#home" className="logo">
            <Logo />
            <span className="logo-word">
              <b>{profile.first.toUpperCase()}</b>
              <small>{profile.last.toUpperCase()}</small>
            </span>
          </a>
          <p>
            {profile.role} · {profile.location}
          </p>
        </div>
        <nav aria-label="Footer">
          {nav.slice(1).map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <p className="f-copy">
          © {new Date().getFullYear()} {profile.first} {profile.last}
        </p>
      </footer>
    </>
  )
}
