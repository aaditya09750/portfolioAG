import Image from 'next/image'
import HeaderBehavior from './HeaderBehavior'

/**
 * Header — fully server-rendered markup. The interactive toggle /
 * scroll logic is delegated to <HeaderBehavior />, a sibling Client
 * Component that renders nothing and wires up listeners imperatively.
 *
 * Initial aria state represents the closed-menu state; HeaderBehavior
 * updates these attributes via setAttribute when the user toggles.
 */
export default function Header() {
  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <Image src="/assets/images/aglogo.png" width={60} height={60} alt="logo" />
          </a>

          <nav
            className="navbar"
            data-navbar
            role="navigation"
            aria-label="Main Navigation"
            aria-hidden="true"
          >
            <div className="navbar-top">
              <a href="#" className="logo">
                <Image src="/assets/images/aglogo.png" width={40} height={40} alt="logo" />
              </a>

              <button
                className="nav-close-btn"
                aria-label="close menu"
                aria-expanded="false"
                data-nav-toggler
              >
                <span>✕</span>
              </button>
            </div>

            <ul className="navbar-list">
              <li><a href="#home" className="navbar-link" data-nav-link>Home</a></li>
              <li><a href="#about" className="navbar-link" data-nav-link>About</a></li>
              <li><a href="#review" className="navbar-link" data-nav-link>Review</a></li>
              <li><a href="#contact" className="navbar-link" data-nav-link>Contact</a></li>
            </ul>
          </nav>

          <a href="#contact" className="btn btn:hover">
            <span className="span">Send Message</span>
          </a>

          <button
            className="nav-open-btn btn:hover"
            aria-label="open menu"
            aria-expanded="false"
            data-nav-toggler
          >
            <span className="line line-1" />
            <span className="line line-2" />
          </button>

          <div className="overlay" data-overlay data-nav-toggler />
        </div>
      </header>

      <HeaderBehavior />
    </>
  )
}
