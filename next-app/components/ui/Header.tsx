"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [navActive, setNavActive] = useState(false)

  useEffect(() => {
    // Minimal client-side hookup to keep parity with original project
    const togglers = document.querySelectorAll('[data-nav-toggler]')
    const navbar = document.querySelector('[data-navbar]')
    const overlay = document.querySelector('[data-overlay]')

    const toggle = () => {
      if (!navbar || !overlay) return
      navbar.classList.toggle('active')
      overlay.classList.toggle('active')
      document.body.classList.toggle('nav-active')
      setNavActive((v) => !v)
    }

    togglers.forEach((el) => el.addEventListener('click', toggle))

    const onNavLink = () => {
      if (!navbar || !overlay) return
      navbar.classList.remove('active')
      overlay.classList.remove('active')
      document.body.classList.remove('nav-active')
      setNavActive(false)
    }

    document.querySelectorAll('[data-nav-link]').forEach((el) => el.addEventListener('click', onNavLink))

    const header = document.querySelector('[data-header]')
    const onScroll = () => header && header.classList[window.scrollY > 100 ? 'add' : 'remove']('active')
    window.addEventListener('scroll', onScroll)

    return () => {
      togglers.forEach((el) => el.removeEventListener('click', toggle))
      document.querySelectorAll('[data-nav-link]').forEach((el) => el.removeEventListener('click', onNavLink))
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <Image src="/assets/images/aglogo.png" width={60} height={60} alt="logo" />
        </a>

        <nav className="navbar" data-navbar role="navigation" aria-label="Main Navigation" aria-hidden={!navActive ? 'true' : 'false'}>
          <div className="navbar-top">
            <a href="#" className="logo">
              <Image src="/assets/images/aglogo.png" width={40} height={40} alt="logo" />
            </a>

            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler aria-expanded={navActive ? 'true' : 'false'}>
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

        <button className="nav-open-btn btn:hover" aria-label="open menu" data-nav-toggler aria-expanded={navActive ? 'true' : 'false'}>
          <span className="line line-1" />
          <span className="line line-2" />
        </button>

        <div className="overlay" data-overlay data-nav-toggler />
      </div>
    </header>
  )
}
