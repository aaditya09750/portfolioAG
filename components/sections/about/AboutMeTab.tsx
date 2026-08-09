import { Globe } from '@/components/ui'

export default function AboutMeTab() {
  return (
    <div className="grid-list">
      {/* Globe renders inside its own figure with data-tilt handled by <Tilt /> */}
      <Globe />

      <div className="about-content">
        <h2 className="h4 title section-title">Overview !</h2>

        <p className="section-text">
          A passionate Full Stack Developer. Specialized in build, develop and deploy robust and
          scalable frontend and backend systems. With a commitment to excellence, I&#39;m known for
          my problem solving skills and adeptness at meeting deadlines. A fast learner, I stay
          updated on industry trends through selfstudy, bringing technical expertise and enthusiasm
          to contribute to impactful projects. My goal is to apply what I learn to real world
          challenges and contribute meaningfully to the field.
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
              <a
                rel="noopener noreferrer"
                href="https://github.com/aaditya09750"
                className="social-link"
                title="GitHub"
                aria-label="GitHub profile"
                target="_blank"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aaditya9750/"
                className="social-link"
                title="LinkedIn"
                aria-label="LinkedIn profile"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://wa.me/qr/5S6RP74BVGGDH1"
                className="social-link"
                title="WhatsApp"
                aria-label="WhatsApp contact"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/_aadiii0975_____?igsh=MWoxODk0Z2xrOWh3NA=="
                className="social-link"
                title="Instagram"
                aria-label="Instagram profile"
                target="_blank"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
