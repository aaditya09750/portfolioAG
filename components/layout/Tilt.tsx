'use client'

import { useEffect } from 'react'

/**
 * Installs a 3D perspective-tilt effect on every `[data-tilt]` element
 * in the DOM. Renders nothing — pure behavior attached at page level.
 */
export default function Tilt() {
  useEffect(() => {
    const tiltElements = document.querySelectorAll<HTMLElement>('[data-tilt]')

    const initTilt = (el: HTMLElement, event: MouseEvent) => {
      const centerX = el.offsetWidth / 2
      const centerY = el.offsetHeight / 2
      const tiltPosY = ((event.offsetX - centerX) / centerX) * 10
      const tiltPosX = ((event.offsetY - centerY) / centerY) * 10
      el.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${-tiltPosY}deg)`
    }

    const resetTilt = (el: HTMLElement) => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    const handlers = new Map<HTMLElement, { move: (_event: MouseEvent) => void; out: () => void }>()

    tiltElements.forEach((el) => {
      const move = (event: MouseEvent) => initTilt(el, event)
      const out = () => resetTilt(el)
      handlers.set(el, { move, out })
      el.addEventListener('mousemove', move)
      el.addEventListener('mouseout', out)
    })

    return () => {
      tiltElements.forEach((el) => {
        const h = handlers.get(el)
        if (h) {
          el.removeEventListener('mousemove', h.move)
          el.removeEventListener('mouseout', h.out)
        }
      })
    }
  }, [])

  return null
}
