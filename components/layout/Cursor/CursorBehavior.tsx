'use client'

import { useEffect } from 'react'

/**
 * Tracks cursor position and hover state on interactive elements.
 * The two <span> targets are rendered by the server in <Cursor />;
 * this component only attaches listeners and updates inline styles.
 */
export default function CursorBehavior() {
  useEffect(() => {
    const cursors = Array.from(document.querySelectorAll<HTMLElement>('[data-cursor]'))
    const hoveredElements = Array.from(
      document.querySelectorAll('button, a, .btn, .navbar-link'),
    )

    const onMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event
      const [dot, outline] = cursors
      if (dot) {
        dot.style.left = `${x}px`
        dot.style.top = `${y}px`
      }
      if (outline) {
        setTimeout(() => {
          outline.style.left = `${x}px`
          outline.style.top = `${y}px`
        }, 80)
      }
    }

    const onHover = () => cursors.forEach((c) => c.classList.add('hovered'))
    const onLeave = () => cursors.forEach((c) => c.classList.remove('hovered'))

    window.addEventListener('mousemove', onMove)
    hoveredElements.forEach((el) => {
      el.addEventListener('mouseover', onHover)
      el.addEventListener('mouseout', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      hoveredElements.forEach((el) => {
        el.removeEventListener('mouseover', onHover)
        el.removeEventListener('mouseout', onLeave)
      })
    }
  }, [])

  return null
}
