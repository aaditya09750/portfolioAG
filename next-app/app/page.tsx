import React from 'react'
import Header from '../components/Header'
import Preloader from '../components/Preloader'
import Cursor from '../components/Cursor'
import Globe from '../components/Globe.client'
import Typewriter from '../components/Typewriter'
import Tilt from '../components/Tilt'
import Tabs from '../components/Tabs'

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
const skills = [
  { label: 'Database Management', pct: 55 },
  { label: 'Web Development', pct: 75 },
  { label: 'Graphic Designing', pct: 95 },
  { label: 'Data Analysis', pct: 45 },
  { label: 'Mobile App Development', pct: 35 },
]

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
const certs = [
  { src: '/assets/images/certificate01.png', alt: 'Certificate 1' },
  { src: '/assets/images/certificate03.png', alt: 'Certificate 3' },
  { src: '/assets/images/certificate02.png', alt: 'Certificate 2' },
]

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

/* ─── Page ──────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      {/* Preloader — white curtain that splits on load */}
      <Preloader />

      {/* Header — sticky on scroll, hamburger on mobile */}
      <Header />

      {/* Custom cursor — dot + outline, only on ≥768px via CSS */}
      <Cursor />

      {/* Tilt effect — wires [data-tilt] elements after mount */}
      <Tilt />

      <article>

        {/* ── HERO ───────────────────────────────────────── */}
        <div className="hero text-center" id="home">
          <div className="container">

            {/* Portrait with pill border outline */}
            <div className="banner-outline has-after">
              <div
                className="hero-banner img-holder has-after"
                style={{ '--width': '600', '--height': '600' } as React.CSSProperties}
                data-tilt
              >
                <img
                  src="/assets/images/p4.jpg"
                  width={600} height={600}
                  alt="Aaditya Gunjal"
                  className="img-cover"
                />
              </div>

              {/* Name overlay at bottom of portrait */}
              <span className="span title">Aaditya Gunjal</span>
            </div>

            {/* Heading + CTA */}
            <div className="hero-content">
              <h1 className="h1 title typewriter">
                <Typewriter lines={["Hello I'm Full", 'Stack Developer.']} />
              </h1>

              <div className="wrapper">
                {/* Download CV */}
                <a href="./assets/Cv.pdf" className="btn btn:hover" target="_blank" rel="noopener noreferrer">
                  <span className="span">Download CV</span>
                  <i className="fa-solid fa-cloud-arrow-down" aria-hidden />
                </a>

                <p className="hero-text">
                  Bringing Your Vision To Life,<br />
                  pixel by pixel.
                </p>
              </div>
            </div>

            {/* Decorative shapes (fixed, behind everything) */}
            <img src="/assets/images/hero-shape-1.png" width={559} height={232} alt="" aria-hidden className="shape shape-1" />
            <img src="/assets/images/hero-shape-2.png" width={1358} height={497} alt="" aria-hidden className="shape shape-2" />

          </div>
        </div>


        {/* ── SERVICE ────────────────────────────────────── */}
        <section className="service text-center" aria-label="my services" id="service">
          <div className="container">
            <ul className="service-list">
              {[
                { icon: '1', label: <>Full STACK<br />DEVELOPMENT</> },
                { icon: '2', label: <>PROJECT<br />MANAGEMENT</> },
                { icon: '3', label: <>GRAPHIC <br />DESIGNING</> },
                { icon: '4', label: <>DATABASE <br />MANAGEMENT</> },
              ].map(({ icon, label }) => (
                <li className="service-item" key={icon}>
                  <div className="service-card">
                    <div className="card-icon">
                      <img
                        src={`/assets/images/service-icon-${icon}.svg`}
                        width={80} height={80}
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>
                    <h3 className="card-title">
                      <a href="#">{label}</a>
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>


        {/* ── ABOUT (tabs) ─────────────────────────────── */}
        <section className="section about" aria-label="about-me" id="about">
          <div className="container">
            <Tabs items={aboutTabs} />
          </div>
        </section>


        {/* ── CTA ────────────────────────────────────────── */}
        <section className="section cta" aria-label="work with me">
          <div className="container">
            <h2 className="title h2 section-title text-center">
              Let&#39;s Work Together On Your Next Project!
            </h2>
            <a href="#contact" className="btn btn:hover">
              <span className="span">Hire Me Now</span>
              <i className="fa-solid fa-arrow-right" aria-hidden />
            </a>
          </div>
        </section>


        {/* ── TESTIMONIALS ────────────────────────────────── */}
        <section className="section testi" aria-label="what our client says" id="review">
          <div className="container">
            <div className="testi-content">
              <blockquote className="title h4 section-text">
                &ldquo; I had the pleasure of working with Aaditya on a recent project, as a full stack developer truly
                impressed me. They delivered clean, efficient code and seamlessly integrated both frontend and backend
                components. Their attention to detail, and commitment to meeting deadlines made the entire process smooth
                and stress-free. I highly recommend Aaditya for any web development needs!. &rdquo;
              </blockquote>

              <div className="profile-card">
                <figure
                  className="card-banner img-holder"
                  style={{ '--width': '70', '--height': '70' } as React.CSSProperties}
                >
                  <img
                    src="/assets/images/client1.png"
                    width={70} height={70}
                    loading="lazy"
                    alt="Yash Santosh Hule"
                    className="img-cover"
                  />
                </figure>

                <div>
                  <p className="title h5 card-title">Yash Santosh Hule</p>
                  <p className="card-subtitle">Founder of BM25.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── CONTACT ─────────────────────────────────────── */}
        <section className="section contact" aria-label="contact me" id="contact">
          <div className="container">
            <h2 className="title h3 section-title">Get In Touch</h2>

            <div className="contact-content">

              {/* Contact form — submits via web3forms */}
              <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                <input type="hidden" name="access_key" value="4af7645a-a2c0-404c-b070-504e3ab63484" />

                <input type="text" name="name" placeholder="Full name" autoComplete="off" required className="input-field" />
                <input type="email" name="email_address" placeholder="Email address" autoComplete="off" required className="input-field" />
                <input type="tel" name="phone" placeholder="Phone" autoComplete="off" className="input-field" />
                <textarea name="message" placeholder="Enter Message" required className="input-field" />

                <button type="submit" className="btn btn:hover">
                  <span className="span">Send Message.</span>
                  <i className="fa-solid fa-arrow-right" aria-hidden />
                </button>
              </form>

              {/* Google Maps embed */}
              <iframe
                className="map"
                title="Location — Dombivli, Maharashtra"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60282.793445233176!2d73.05838201982075!3d19.209410251799152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7958ef72d8707%3A0x84bf6ab96e280b08!2sDombivli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727904902464!5m2!1sen!2sin"
                width={600} height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Contact info list */}
              <ul className="contact-list">
                <li className="contact-item">
                  <div className="item-icon">
                    <img src="/assets/images/contact-icon-1.png" width={50} height={50} loading="lazy" alt="phone icon" />
                  </div>
                  <div>
                    <span className="title h6">+91 84335 09521</span>
                    <span className="title h6">+91 84335 09521</span>
                  </div>
                </li>

                <li className="contact-item">
                  <div className="item-icon">
                    <img src="/assets/images/contact-icon-2.png" width={50} height={50} loading="lazy" alt="address icon" />
                  </div>
                  <div>
                    <address className="title h6">
                      401 Jayram Sadan, Sunil Nagar, DNC rd, Dombivali East 421201.
                    </address>
                  </div>
                </li>

                <li className="contact-item">
                  <div className="item-icon">
                    <img src="/assets/images/contact-icon-3.png" width={50} height={50} loading="lazy" alt="email icon" />
                  </div>
                  <div>
                    <span className="title h6">aadigunjal0975@gmail.com</span>
                    <span className="title h6">aadityagunjal0975@gmail.com</span>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </section>

      </article>


      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <p className="copyright">Copyright &amp; Design By Aaditya Gunjal - 2024</p>

          <a href="#top" className="back-top-btn">
            <span className="span">Back To Top</span>
            <i className="fa-solid fa-arrow-up" aria-hidden />
          </a>
        </div>
      </footer>

    </main>
  )
}
