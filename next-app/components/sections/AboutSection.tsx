import React from 'react'
import { Globe, Tabs } from '@/components/ui'
import { skills, certs } from '@/data/constants'

/* ─── About Me tab content ─────────────────────────────────────── */
const AboutMeContent = (
  <div className="grid-list">
    {/* Globe renders inside its own figure with data-tilt handled by Tilt.tsx */}
    <Globe />

    <div className="about-content">
      <h2 className="h4 title section-title">Overview !</h2>

      <p className="section-text">
        A passionate Full Stack Developer. Specialized in build, develop and deploy robust and
        scalable frontend and backend systems. With a commitment to excellence, I&#39;m known for my
        problem solving skills and adeptness at meeting deadlines. A fast learner, I stay updated on
        industry trends through selfstudy, bringing technical expertise and enthusiasm to contribute to
        impactful projects. My goal is to apply what I learn to real world challenges and contribute
        meaningfully to the field.
      </p>

      <ul className="about-list">
        <li className="about-item">
          <p className="list-title">Name</p>
          <span className="span title h5">Aaditya Sanjay Gunjal</span>
        </li>

        <li className="about-item">
          <p className="list-title">Phone Number</p>
          <span className="span title h5">+91 84335 09521</span>
        </li>

        <li className="about-item">
          <p className="list-title">Email Address</p>
          <span className="span title h5">aadigunjal0975@gmail.com</span>
        </li>

        <li className="about-item">
          <p className="list-title">Social Network</p>
          <div className="social-list">
            <a rel="noopener noreferrer" href="https://github.com/aaditya09750"
              className="social-link" title="GitHub" target="_blank">
              <i className="fa-brands fa-github" />
            </a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/aadityagunjal0975/"
              className="social-link" title="LinkedIn" target="_blank">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a rel="noopener noreferrer" href="https://wa.me/qr/5S6RP74BVGGDH1"
              className="social-link" title="WhatsApp" target="_blank">
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a rel="noopener noreferrer"
              href="https://www.instagram.com/_aadiii0975_____?igsh=MWoxODk0Z2xrOWh3NA=="
              className="social-link" title="Instagram" target="_blank">
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
)

/* ─── Skillsets tab content ─────────────────────────────────────── */
const SkillsContent = (
  <div className="grid-list">
    <div className="skill-content">
      <h3 className="h4 title section-title">Technical Skills.</h3>

      <ul className="skill-list">
        {skills.map(({ label, pct }) => (
          <li key={label}>
            <div className="skill-wrapper">
              <span className="span">{label}</span>
              <span className="value">{pct}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* Skillset image with tilt effect */}
    <figure className="skillset1 img-holder" style={{ '--width': '570', '--height': '420' } as React.CSSProperties} data-tilt>
      <img
        src="/assets/images/skillset1.png"
        width={570} height={600}
        loading="lazy"
        alt="skill banner"
        className="img-cover"
      />
    </figure>
  </div>
)

/* ─── Achievements tab content ──────────────────────────────────── */
const AchievementsContent = (
  <>
    <h3 className="h4 title section-title">My Achievements.</h3>
    <ul className="grid-list">
      {certs.map(({ src, alt }) => (
        <li key={src}>
          <div className="award-card">
            <figure
              className="card-banner img-holder"
              style={{ '--width': '534', '--height': '383' } as React.CSSProperties}
              data-tilt
            >
              <img src={src} width={534} height={383} loading="lazy" alt={alt} className="img-cover" />
            </figure>
          </div>
        </li>
      ))}
    </ul>
  </>
)

/* ─── Tab definitions ───────────────────────────────────────────── */
const aboutTabs = [
  { key: 'about', title: 'About Me', content: AboutMeContent },
  { key: 'skillset', title: 'Skillsets', content: SkillsContent },
  { key: 'awward', title: 'Achievements', content: AchievementsContent },
]

export default function AboutSection() {
  return (
    <section className="section about" aria-label="about-me" id="about">
      <div className="container">
        <Tabs items={aboutTabs} />
      </div>
    </section>
  )
}
