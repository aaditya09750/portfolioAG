'use client'

import { useEffect } from 'react'

/**
 * Attaches nav toggle + scroll listeners to the Header markup.
 * Renders nothing — pure side-effect component so the surrounding
 * <Header /> can stay a Server Component.
 */
export default function HeaderBehavior() {
  useEffect(() => {
    const togglers = document.querySelectorAll<HTMLElement>('[data-nav-toggler]')
    const navbar = document.querySelector<HTMLElement>('[data-navbar]')
    const overlay = document.querySelector<HTMLElement>('[data-overlay]')
    const header = document.querySelector<HTMLElement>('[data-header]')
    const navLinks = document.querySelectorAll<HTMLElement>('[data-nav-link]')

    const setAria = (active: boolean) => {
      if (navbar) navbar.setAttribute('aria-hidden', active ? 'false' : 'true')
      togglers.forEach((el) => el.setAttribute('aria-expanded', active ? 'true' : 'false'))
    }

    const toggle = () => {
      if (!navbar || !overlay) return
      const nowActive = !navbar.classList.contains('active')
      navbar.classList.toggle('active', nowActive)
      overlay.classList.toggle('active', nowActive)
      document.body.classList.toggle('nav-active', nowActive)
      setAria(nowActive)
    }

    const close = () => {
      if (!navbar || !overlay) return
      navbar.classList.remove('active')
      overlay.classList.remove('active')
      document.body.classList.remove('nav-active')
      setAria(false)
    }

    const onScroll = () => {
      if (!header) return
      header.classList[window.scrollY > 100 ? 'add' : 'remove']('active')
    }

    togglers.forEach((el) => el.addEventListener('click', toggle))
    navLinks.forEach((el) => el.addEventListener('click', close))
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      togglers.forEach((el) => el.removeEventListener('click', toggle))
      navLinks.forEach((el) => el.removeEventListener('click', close))
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
