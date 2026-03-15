"use client"

import React, { useEffect } from 'react'

/**
 * Preloader — renders the white curtain that splits open on load.
 *
 * The `loaded` class is added on DOMContentLoaded (mirroring the original script.js).
 * Using DOMContentLoaded (rather than a bare useEffect) means the preloader
 * won't vanish before assets are parsed.  Adding a guard ensures StrictMode's
 * double-invoke doesn't cause the transition to fire twice.
 */
export default function Preloader() {
  useEffect(() => {
    const pre = document.querySelector('[data-preloader]') as HTMLElement | null
    if (!pre) return

    const triggerLoaded = () => {
      pre.classList.add('loaded')
      document.body.classList.add('loaded')
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', triggerLoaded, { once: true })
    } else {
      // DOM already ready (hot reload, StrictMode remount, etc.)
      triggerLoaded()
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', triggerLoaded)
    }
  }, [])

  return (
    <div className="preloader" data-preloader>
      <span className="line" />
    </div>
  )
}
