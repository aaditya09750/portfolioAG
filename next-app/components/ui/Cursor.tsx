"use client"

import React, { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursors = Array.from(document.querySelectorAll('[data-cursor]')) as HTMLElement[]
    const hoveredElements = Array.from(document.querySelectorAll('button, a, .btn, .navbar-link'))

    const onMove = (event: MouseEvent) => {
      const posX = event.clientX
      const posY = event.clientY
      const dot = cursors[0]
      const outline = cursors[1]
      if (dot) {
        dot.style.left = `${posX}px`
        dot.style.top = `${posY}px`
      }
      if (outline) {
        setTimeout(() => {
          outline.style.left = `${posX}px`
          outline.style.top = `${posY}px`
        }, 80)
      }
    }

    const onHover = () => cursors.forEach((c) => c.classList.add('hovered'))
    const onLeave = () => cursors.forEach((c) => c.classList.remove('hovered'))

    window.addEventListener('mousemove', onMove)
    hoveredElements.forEach((el) => el.addEventListener('mouseover', onHover))
    hoveredElements.forEach((el) => el.addEventListener('mouseout', onLeave))

    return () => {
      window.removeEventListener('mousemove', onMove)
      hoveredElements.forEach((el) => el.removeEventListener('mouseover', onHover))
      hoveredElements.forEach((el) => el.removeEventListener('mouseout', onLeave))
    }
  }, [])

  return (
    <>
      <span className="cursor-dot" data-cursor aria-hidden="true" role="presentation" />
      <span className="cursor-outline" data-cursor aria-hidden="true" role="presentation" />
    </>
  )
}
