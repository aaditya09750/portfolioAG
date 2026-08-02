'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function MaintenanceContent() {
  return (
    <div className="mc-wrapper">
      {/* Background Ambient Glows */}
      <div className="mc-ambient-glow-1" />
      <div className="mc-ambient-glow-2" />
      <div className="mc-grid-overlay" />

      {/* Header */}
      <header className="mc-header">
        <Link href="/" className="mc-brand">
          <div className="mc-logo-box">
            <Image
              src="/assets/images/aglogo.png"
              alt="Aaditya Gunjal Logo"
              width={36}
              height={36}
              className="mc-logo-img"
            />
          </div>
          <span className="mc-brand-name">Aaditya Gunjal</span>
        </Link>

        <div className="mc-badge">
          <span className="mc-badge-dot" />
          <span>SYSTEM MAINTENANCE ACTIVE</span>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mc-main">
        {/* Concentric Animated Orbital Visual */}
        <div className="mc-orbit-container">
          <div className="mc-ring-outer" />
          <div className="mc-ring-middle" />
          <div className="mc-ring-inner" />

          {/* Central Logo Emblem */}
          <div className="mc-center-emblem">
            <Image
              src="/assets/images/aglogo.png"
              alt="Aaditya Gunjal Emblem"
              width={64}
              height={64}
              className="mc-emblem-img"
            />
          </div>
        </div>

        {/* Status Tag */}
        <div className="mc-tag">PLATFORM UPGRADE V2.0</div>

        {/* Headline & Description */}
        <h1 className="mc-title">Crafting Something Extraordinary</h1>
        <p className="mc-description">
          We are currently conducting scheduled performance enhancements and architecture updates to deliver an even faster, smoother portfolio experience.
        </p>

        {/* Status Cards Grid */}
        <div className="mc-status-grid">
          <div className="mc-status-card">
            <span className="mc-status-label">CORE SYSTEMS</span>
            <div className="mc-status-value mc-status-operational">
              <span className="mc-dot mc-dot-green" />
              <span>100% Operational</span>
            </div>
          </div>

          <div className="mc-status-card">
            <span className="mc-status-label">UPGRADE PROGRESS</span>
            <div className="mc-status-value mc-status-progress">
              <span className="mc-dot mc-dot-amber" />
              <span>Optimizing Assets</span>
            </div>
          </div>

          <div className="mc-status-card">
            <span className="mc-status-label">ESTIMATED RETURN</span>
            <div className="mc-status-value mc-status-return">
              <span className="mc-dot mc-dot-blue" />
              <span>Very Shortly</span>
            </div>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="mc-btn-group">
          <a href="mailto:aadigunjal0975@gmail.com" className="mc-btn-primary">
            <span>Email Direct Inquiry</span>
          </a>
          <a
            href="https://wa.me/918433509521"
            target="_blank"
            rel="noopener noreferrer"
            className="mc-btn-secondary"
          >
            <i className="fa-brands fa-whatsapp" />
            <span>WhatsApp Connect</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mc-footer">
        <p className="mc-copy">© {new Date().getFullYear()} Aaditya Gunjal. All rights reserved.</p>

        <div className="mc-socials">
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
        .mc-wrapper {
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

        .mc-ambient-glow-1 {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, rgba(16, 185, 129, 0.08) 40%, rgba(59, 130, 246, 0.06) 70%, transparent 80%);
          filter: blur(120px);
          pointer-events: none;
        }

        .mc-ambient-glow-2 {
          position: absolute;
          bottom: 5%;
          left: 5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        .mc-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%);
          pointer-events: none;
        }

        .mc-header {
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

        .mc-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #ffffff;
        }

        .mc-logo-box {
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

        .mc-logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .mc-brand-name {
          font-weight: 600;
          font-size: 1.125rem;
          letter-spacing: -0.02em;
        }

        .mc-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 500px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.25);
          font-size: 0.75rem;
          font-family: monospace;
          color: #fbbf24;
        }

        .mc-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #fbbf24;
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .mc-main {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 800px;
          margin: auto;
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
        }

        .mc-orbit-container {
          position: relative;
          width: 130px;
          height: 130px;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mc-ring-outer {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px dashed rgba(255, 255, 255, 0.2);
          animation: spin 20s linear infinite;
        }

        .mc-ring-middle {
          position: absolute;
          inset: 10px;
          border-radius: 50%;
          border: 1px solid rgba(245, 158, 11, 0.4);
          animation: spin 8s linear infinite reverse;
        }

        .mc-ring-inner {
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #ffffff;
          border-bottom-color: rgba(255, 255, 255, 0.3);
          animation: spin 2s linear infinite;
        }

        .mc-center-emblem {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background-color: #000;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mc-emblem-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .mc-tag {
          display: inline-block;
          padding: 4px 16px;
          border-radius: 500px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.7rem;
          font-family: monospace;
          letter-spacing: 0.15em;
          color: #fbbf24;
          margin-bottom: 16px;
        }

        .mc-title {
          font-family: var(--fontFamily-recoleta), serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 16px 0;
          color: #ffffff;
          max-width: 680px;
        }

        .mc-description {
          font-size: 1rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.65);
          max-width: 540px;
          margin: 0 0 36px 0;
        }

        .mc-status-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 640px;
          margin-bottom: 40px;
        }

        .mc-status-card {
          padding: 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: left;
          backdrop-filter: blur(8px);
        }

        .mc-status-label {
          display: block;
          font-size: 0.65rem;
          font-family: monospace;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 6px;
        }

        .mc-status-value {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .mc-status-operational { color: #34d399; }
        .mc-status-progress { color: #fbbf24; }
        .mc-status-return { color: #ffffff; }

        .mc-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .mc-dot-green { background-color: #34d399; }
        .mc-dot-amber { background-color: #fbbf24; animation: pulse 1.5s infinite; }
        .mc-dot-blue { background-color: #60a5fa; }

        .mc-btn-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 16px;
          width: 100%;
          max-width: 440px;
        }

        .mc-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          border-radius: 500px;
          background-color: #ffffff;
          color: #000000;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.25s ease;
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.15);
        }

        .mc-btn-primary:hover {
          transform: translateY(-2px);
          background-color: #f0f0f0;
          box-shadow: 0 14px 40px rgba(255, 255, 255, 0.25);
        }

        .mc-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 500px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .mc-btn-secondary:hover {
          background: rgba(16, 185, 129, 0.2);
          border-color: rgba(16, 185, 129, 0.5);
          transform: translateY(-2px);
        }

        .mc-footer {
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

        .mc-copy {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
        }

        .mc-socials {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .mc-socials a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.1rem;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .mc-socials a:hover {
          color: #ffffff;
          transform: translateY(-2px);
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 640px) {
          .mc-header, .mc-footer {
            flex-direction: column;
            gap: 12px;
            text-align: center;
            padding: 16px;
          }
          .mc-status-grid {
            grid-template-columns: 1fr;
          }
          .mc-btn-group {
            flex-direction: column;
          }
          .mc-btn-primary, .mc-btn-secondary {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
