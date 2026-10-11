import { MotionConfig } from 'motion/react'
import { Nav } from './components/Nav'
import { SmoothScroll } from './components/SmoothScroll'
import { About } from './sections/About'
import { Beyond } from './sections/Beyond'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Pillars } from './sections/Pillars'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SmoothScroll />
      <Nav />
      <main id="main">
        <Hero />
        <Pillars />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Beyond />
        <Contact />
      </main>
    </MotionConfig>
  )
}
