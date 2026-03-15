import React from 'react'
import Image from 'next/image'
import { Typewriter } from '@/components/ui'

export default function HeroSection() {
  return (
    <div className="hero text-center" id="home">
      <div className="container">

        {/* Portrait with pill border outline */}
        <div className="banner-outline has-after">
          <div
            className="hero-banner img-holder has-after"
            style={{ '--width': '600', '--height': '600' } as React.CSSProperties}
            data-tilt
          >
            <Image
              src="/assets/images/p4.jpg"
              width={600}
              height={600}
              alt="Aaditya Gunjal"
              className="img-cover"
              priority
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
  )
}
