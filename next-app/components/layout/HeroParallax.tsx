'use client'

import { useEffect } from 'react'

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export default function HeroParallax() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const shape1 = document.querySelector<HTMLElement>('[data-parallax="shape-1"]')
    const shape2 = document.querySelector<HTMLElement>('[data-parallax="shape-2"]')

    if (!shape1 || !shape2) return

    let rafId = 0
    let current1 = 0
    let current2 = 0

    const ease = 0.08

    const update = () => {
      const scrollY = window.scrollY || 0
      const vh = window.innerHeight || 1
      const vw = window.innerWidth || 1

      const intensity = Math.min(1, vw / 1200)
      const t = clamp(scrollY / (vh * 1.2), 0, 4)

      const target1 = -t * 18 * intensity
      const target2 = -t * 26 * intensity

      current1 += (target1 - current1) * ease
      current2 += (target2 - current2) * ease

      shape1.style.transform = `translate3d(0, ${current1.toFixed(2)}px, 0)`
      shape2.style.transform = `translate3d(0, ${current2.toFixed(2)}px, 0)`

      rafId = window.requestAnimationFrame(update)
    }

    rafId = window.requestAnimationFrame(update)

    return () => {
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  return null
}
