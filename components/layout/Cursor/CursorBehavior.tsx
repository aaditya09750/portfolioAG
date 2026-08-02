'use client'

import { useEffect } from 'react'

/**
 * Tracks cursor position and hover state on interactive elements.
 * Uses event delegation on document to work dynamically across all pages & routes.
 */
export default function CursorBehavior() {
  useEffect(() => {
    const dot = document.querySelector<HTMLElement>('.cursor-dot')
    const outline = document.querySelector<HTMLElement>('.cursor-outline')

    if (!dot || !outline) return

    const onMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event
      dot.style.left = `${x}px`
      dot.style.top = `${y}px`

      // Smooth outline follow
      outline.style.left = `${x}px`
      outline.style.top = `${y}px`
    }

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (
        target?.closest(
          'a, button, .btn, .navbar-link, input, textarea, [role="button"], [data-nav-link], [data-nav-toggler]',
        )
      ) {
        dot.classList.add('hovered')
        outline.classList.add('hovered')
      }
    }

    const onOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (
        target?.closest(
          'a, button, .btn, .navbar-link, input, textarea, [role="button"], [data-nav-link], [data-nav-toggler]',
        )
      ) {
        dot.classList.remove('hovered')
        outline.classList.remove('hovered')
      }
    }

    const onLeaveWindow = () => {
      dot.classList.remove('hovered')
      outline.classList.remove('hovered')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })
    document.addEventListener('mouseleave', onLeaveWindow, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mouseleave', onLeaveWindow)
    }
  }, [])

  return null
}
