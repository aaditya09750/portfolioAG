'use client'

import { useEffect } from 'react'

/**
 * Installs a 3D perspective-tilt effect on every `[data-tilt]` element
 * in the DOM. Renders nothing — pure behavior attached at page level.
 */
export default function Tilt() {
  useEffect(() => {
    const tiltElements = document.querySelectorAll<HTMLElement>('[data-tilt]')

    function initTilt(this: HTMLElement, event: MouseEvent) {
      const centerX = this.offsetWidth / 2
      const centerY = this.offsetHeight / 2
      const tiltPosY = ((event.offsetX - centerX) / centerX) * 10
      const tiltPosX = ((event.offsetY - centerY) / centerY) * 10
      this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${-tiltPosY}deg)`
    }

    function resetTilt(this: HTMLElement) {
      this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    tiltElements.forEach((el) => {
      el.addEventListener('mousemove', initTilt as EventListener)
      el.addEventListener('mouseout', resetTilt as EventListener)
    })

    return () => {
      tiltElements.forEach((el) => {
        el.removeEventListener('mousemove', initTilt as EventListener)
        el.removeEventListener('mouseout', resetTilt as EventListener)
      })
    }
  }, [])

  return null
}
