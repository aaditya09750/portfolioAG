import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header/Header'
import Footer from './Footer'

/**
 * NotFoundUI Component — Statically rendered 404 error page fallback UI.
 * Enhanced, visually captivating, balanced, and professional luxury UI.
 */
export default function NotFoundUI() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--bg-black)' }}>
      {/* Universal Sticky Header */}
      <Header />

      {/* Main Single-Column Centered Layout Container */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '120px 24px 80px',
        }}
      >
        {/* Ambient Radial Spotlight Glow */}
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, transparent 65%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Content Wrapper */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '680px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Status Badge Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '500px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '1.2rem',
              color: 'var(--text-light-gray)',
              marginBottom: '20px',
              letterSpacing: '0.05em',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block', boxShadow: '0 0 8px #ef4444' }} />
            <span>404 • ROUTE NOT FOUND</span>
          </div>

          {/* Giant Recoleta 404 Heading with subtle gradient */}
          <h1
            style={{
              fontFamily: 'var(--fontFamily-recoleta)',
              fontSize: 'clamp(8rem, 17vw, 15rem)',
              fontWeight: 700,
              lineHeight: 1,
              background: 'linear-gradient(180deg, #ffffff 0%, #a3a3a3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: '0 0 12px 0',
              letterSpacing: '-0.02em',
              userSelect: 'none',
            }}
          >
            404
          </h1>

          {/* Subtitle */}
          <h2
            style={{
              fontFamily: 'var(--fontFamily-recoleta)',
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              fontWeight: 600,
              color: 'var(--text-white)',
              margin: '0 0 12px 0',
            }}
          >
            Page Lost In Hyperspace.
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              color: 'var(--text-light-gray)',
              maxWidth: '480px',
              margin: '0 auto 36px',
            }}
          >
            The destination you are looking for has been moved, renamed, or never existed in this realm.
          </p>

          {/* Action Buttons Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              width: '100%',
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            <Link href="/" className="btn btn:hover" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <span className="span">Return To Home</span>
              <i className="fa-solid fa-house" aria-hidden />
            </Link>

            <a
              href="mailto:aadigunjal0975@gmail.com"
              className="btn btn:hover"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <span className="span">Report Issue</span>
              <i className="fa-solid fa-envelope" aria-hidden />
            </a>
          </div>
        </div>

        {/* Decorative Background Wavy Shapes matching hero */}
        <Image
          src="/assets/images/hero-shape-1.png"
          width={559}
          height={232}
          alt=""
          aria-hidden
          className="shape shape-1"
          style={{ position: 'absolute', top: '10%', left: '5%', pointerEvents: 'none', opacity: 0.4, zIndex: 1 }}
        />
        <Image
          src="/assets/images/hero-shape-2.png"
          width={1358}
          height={497}
          alt=""
          aria-hidden
          className="shape shape-2"
          style={{ position: 'absolute', bottom: '5%', right: '5%', pointerEvents: 'none', opacity: 0.4, zIndex: 1 }}
        />
      </main>

      {/* Universal Footer */}
      <Footer />
    </div>
  )
}
