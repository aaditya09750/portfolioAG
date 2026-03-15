import React from 'react'
import { testimonial } from '@/data/constants'

export default function TestimonialSection() {
  return (
    <section className="section testi" aria-label="what our client says" id="review">
      <div className="container">
        <div className="testi-content">
          <blockquote className="title h4 section-text">
            {testimonial.quote}
          </blockquote>

          <div className="profile-card">
            <figure
              className="card-banner img-holder"
              style={{ '--width': '70', '--height': '70' } as React.CSSProperties}
            >
              <img
                src={testimonial.clientImage}
                width={70} height={70}
                loading="lazy"
                alt={testimonial.clientName}
                className="img-cover"
              />
            </figure>

            <div>
              <p className="title h5 card-title">{testimonial.clientName}</p>
              <p className="card-subtitle">{testimonial.clientTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
