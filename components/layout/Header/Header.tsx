import Image from 'next/image'
import Link from 'next/link'
import HeaderBehavior from './HeaderBehavior'

/**
 * Header — fully server-rendered markup. The interactive toggle /
 * scroll logic is delegated to <HeaderBehavior />, a sibling Client
 * Component that renders nothing and wires up listeners imperatively.
 *
 * Links use absolute path anchors (/#home, /#about, etc.) so navigation
 * correctly routes back to home sections from any page or 404 route.
 */
export default function Header() {
  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <Link href="/" className="logo">
            <Image src="/assets/images/aglogo.png" width={60} height={60} alt="logo" />
          </Link>

          <nav
            className="navbar"
            data-navbar
            role="navigation"
            aria-label="Main Navigation"
            aria-hidden="true"
          >
            <div className="navbar-top">
              <Link href="/" className="logo">
                <Image src="/assets/images/aglogo.png" width={40} height={40} alt="logo" />
              </Link>

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
              <li>
                <Link href="/#home" className="navbar-link" data-nav-link>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="navbar-link" data-nav-link>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#review" className="navbar-link" data-nav-link>
                  Review
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="navbar-link" data-nav-link>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Link href="/#contact" className="btn btn:hover">
            <span className="span">Send Message</span>
          </Link>

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
