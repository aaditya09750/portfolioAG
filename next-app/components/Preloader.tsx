"use client"

import React, { useEffect } from 'react'

export default function Preloader() {
  useEffect(() => {
    const pre = document.querySelector('[data-preloader]')
    if (!pre) return
    pre.classList.add('loaded')
    document.body.classList.add('loaded')
  }, [])

  return (
    <div className="preloader" data-preloader>
      <span className="line" />
    </div>
  )
}
