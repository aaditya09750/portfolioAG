import Image from 'next/image'

/**
 * MaintenanceUI Component — Statically rendered maintenance mode fallback UI.
 * Enhanced, visually captivating, balanced, and professional luxury UI.
 */
export default function MaintenanceUI() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'var(--bg-black)',
      }}
    >
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
            width: '650px',
            height: '650px',
            background:
              'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, rgba(255, 255, 255, 0.04) 40%, transparent 70%)',
            filter: 'blur(90px)',
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
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              fontSize: '1.2rem',
              color: '#fbbf24',
              marginBottom: '24px',
              letterSpacing: '0.05em',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#fbbf24',
                display: 'inline-block',
                boxShadow: '0 0 8px #fbbf24',
              }}
            />
            <span>SCHEDULED MAINTENANCE • UPGRADE V2.0</span>
          </div>

          {/* Recoleta Title */}
          <h1
            style={{
              fontFamily: 'var(--fontFamily-recoleta)',
              fontSize: 'clamp(3.5rem, 6vw, 6rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: 'var(--text-white)',
              margin: '0 0 12px 0',
              maxWidth: '640px',
            }}
          >
            Under Maintenance.
          </h1>

          {/* Subtitle */}
          <h2
            style={{
              fontFamily: 'var(--fontFamily-recoleta)',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 500,
              color: 'var(--text-white)',
              margin: '0 0 16px 0',
            }}
          >
            We&apos;re making some improvements.
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              color: 'var(--text-light-gray)',
              maxWidth: '500px',
              margin: '0 auto 36px',
            }}
          >
            Our website is currently undergoing scheduled maintenance to optimize assets and enhance
            performance. Please check back shortly.
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
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            <a
              href="mailto:aadigunjal0975@gmail.com"
              className="btn btn:hover"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              <span className="span">Email Inquiry</span>
              <i className="fa-solid fa-envelope" aria-hidden />
            </a>

            <a
              href="https://wa.me/918433509521"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn:hover"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderColor: 'rgba(16, 185, 129, 0.3)',
                color: '#34d399',
              }}
            >
              <span className="span">WhatsApp Connect</span>
              <i className="fa-brands fa-whatsapp" aria-hidden />
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
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            pointerEvents: 'none',
            opacity: 0.4,
            zIndex: 1,
          }}
        />
        <Image
          src="/assets/images/hero-shape-2.png"
          width={1358}
          height={497}
          alt=""
          aria-hidden
          className="shape shape-2"
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            pointerEvents: 'none',
            opacity: 0.4,
            zIndex: 1,
          }}
        />
      </main>
    </div>
  )
}
