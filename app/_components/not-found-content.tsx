'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function NotFoundContent() {
  return (
    <div className="nf-wrapper">
      {/* Background Ambient Glows */}
      <div className="nf-ambient-glow-1" />
      <div className="nf-ambient-glow-2" />
      <div className="nf-grid-overlay" />

      {/* Header */}
      <header className="nf-header">
        <Link href="/" className="nf-brand">
          <div className="nf-logo-box">
            <Image
              src="/assets/images/aglogo.png"
              alt="Aaditya Gunjal Logo"
              width={36}
              height={36}
              className="nf-logo-img"
            />
          </div>
          <span className="nf-brand-name">Aaditya Gunjal</span>
        </Link>

        <div className="nf-badge">
          <span className="nf-badge-dot" />
          <span>404 • ROUTE_NOT_FOUND</span>
        </div>
      </header>

      {/* Hero Content */}
      <main className="nf-main">
        <div className="nf-tag">LOST IN HYPERSPACE</div>

        <h1 className="nf-title-404">404</h1>

        <h2 className="nf-subtitle">Page Lost Beyond The Horizon</h2>
        <p className="nf-description">
          The page you are looking for has been moved, renamed, or never existed in this realm. Let&apos;s get you back on track.
        </p>

        {/* Buttons */}
        <div className="nf-btn-group">
          <Link href="/" className="nf-btn-primary">
            <span>Return To Home</span>
            <span className="nf-arrow">→</span>
          </Link>
          <a href="mailto:aadigunjal0975@gmail.com" className="nf-btn-secondary">
            <span>Report Issue</span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="nf-quick-links">
          <span className="nf-quick-label">QUICK JUMP:</span>
          <Link href="/#about" className="nf-quick-item">About Me</Link>
          <span className="nf-dot">•</span>
          <Link href="/#service" className="nf-quick-item">Services</Link>
          <span className="nf-dot">•</span>
          <Link href="/#contact" className="nf-quick-item">Contact</Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="nf-footer">
        <p className="nf-copy">© {new Date().getFullYear()} Aaditya Gunjal. All rights reserved.</p>

        <div className="nf-socials">
          <a href="https://github.com/aaditya09750" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://linkedin.com/in/aaditya-gunjal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="https://wa.me/918433509521" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp" />
          </a>
        </div>
      </footer>

      {/* Self-contained CSS styles for guaranteed balanced layout */}
      <style jsx>{`
        .nf-wrapper {
          position: relative;
          min-height: 100vh;
          background-color: #080808;
          color: #ffffff;
          font-family: var(--fontFamily-poppins), sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-sizing: border-box;
        }

        .nf-ambient-glow-1 {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 70%);
          filter: blur(100px);
          pointer-events: none;
        }

        .nf-ambient-glow-2 {
          position: absolute;
          bottom: 5%;
          right: 5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        .nf-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%);
          pointer-events: none;
        }

        .nf-header {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .nf-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #ffffff;
        }

        .nf-logo-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
        }

        .nf-logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .nf-brand-name {
          font-weight: 600;
          font-size: 1.125rem;
          letter-spacing: -0.02em;
        }

        .nf-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 500px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 0.75rem;
          font-family: monospace;
          color: rgba(255, 255, 255, 0.6);
        }

        .nf-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #ef4444;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .nf-main {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 800px;
          margin: auto;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
        }

        .nf-tag {
          display: inline-block;
          padding: 4px 16px;
          border-radius: 500px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.7rem;
          font-family: monospace;
          letter-spacing: 0.15em;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 16px;
        }

        .nf-title-404 {
          font-family: var(--fontFamily-recoleta), serif;
          font-size: clamp(6rem, 16vw, 13rem);
          font-weight: 700;
          line-height: 0.9;
          margin: 0 0 16px 0;
          background: linear-gradient(180deg, #ffffff 0%, #e0e0e0 40%, rgba(255, 255, 255, 0.2) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          user-select: none;
        }

        .nf-subtitle {
          font-family: var(--fontFamily-recoleta), serif;
          font-size: clamp(1.5rem, 3.5vw, 2.25rem);
          font-weight: 600;
          margin: 0 0 12px 0;
          color: #ffffff;
        }

        .nf-description {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
          max-width: 520px;
          margin: 0 0 36px 0;
        }

        .nf-btn-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 16px;
          width: 100%;
          max-width: 440px;
          margin-bottom: 40px;
        }

        .nf-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 500px;
          background-color: #ffffff;
          color: #000000;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          transition: all 0.25s ease;
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.15);
        }

        .nf-btn-primary:hover {
          transform: translateY(-2px);
          background-color: #f0f0f0;
          box-shadow: 0 14px 40px rgba(255, 255, 255, 0.25);
        }

        .nf-arrow {
          transition: transform 0.25s ease;
        }

        .nf-btn-primary:hover .nf-arrow {
          transform: translateX(4px);
        }

        .nf-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          border-radius: 500px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .nf-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .nf-quick-links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .nf-quick-label {
          font-size: 0.65rem;
          font-family: monospace;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.4);
        }

        .nf-quick-item {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nf-quick-item:hover {
          color: #ffffff;
        }

        .nf-dot {
          opacity: 0.3;
        }

        .nf-footer {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          box-sizing: border-box;
        }

        .nf-copy {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
        }

        .nf-socials {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nf-socials a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.1rem;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .nf-socials a:hover {
          color: #ffffff;
          transform: translateY(-2px);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 640px) {
          .nf-header, .nf-footer {
            flex-direction: column;
            gap: 12px;
            text-align: center;
            padding: 16px;
          }
          .nf-btn-group {
            flex-direction: column;
          }
          .nf-btn-primary, .nf-btn-secondary {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
