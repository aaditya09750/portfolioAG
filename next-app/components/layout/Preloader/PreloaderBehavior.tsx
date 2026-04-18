'use client'

import { useEffect } from 'react'

/**
 * Adds the `loaded` class to the preloader + body on DOMContentLoaded
 * (or immediately if the DOM is already ready, e.g. HMR / StrictMode
 * remount). Renders nothing.
 */
export default function PreloaderBehavior() {
  useEffect(() => {
    const pre = document.querySelector<HTMLElement>('[data-preloader]')
    if (!pre) return

    const triggerLoaded = () => {
      pre.classList.add('loaded')
      document.body.classList.add('loaded')
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', triggerLoaded, { once: true })
    } else {
      triggerLoaded()
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', triggerLoaded)
    }
  }, [])

  return null
}
