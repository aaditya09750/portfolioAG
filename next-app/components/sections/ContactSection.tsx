import React from 'react'
import Image from 'next/image'
import { contactItems } from '@/data/constants'

export default function ContactSection() {
  return (
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
            {contactItems.map((item) => (
              <li className="contact-item" key={item.alt}>
                <div className="item-icon">
                  <Image src={item.icon} width={50} height={50} alt={item.alt} />
                </div>
                <div>
                  {item.isAddress
                    ? item.lines.map((line, i) => (
                        <address key={i} className="title h6">{line}</address>
                      ))
                    : item.lines.map((line, i) => (
                        <span key={i} className="title h6">{line}</span>
                      ))
                  }
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}
