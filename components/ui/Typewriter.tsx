'use client'

import React, { useEffect, useRef } from 'react'

interface Props {
  lines: string[]
}

export default function Typewriter({ lines }: Props) {
  const refs = useRef<Array<HTMLSpanElement | null>>([])

  useEffect(() => {
    // Collect all pending timeout IDs so we can cancel them on cleanup.
    // This is critical for React StrictMode, which mounts + unmounts + remounts
    // in development; without cleanup the two effect runs race and double-type.
    const timers: ReturnType<typeof setTimeout>[] = []
    let cancelled = false // guard: don't fire new timeouts after cleanup

    let currentLine = 0

    const typeWriterLine = (lineElement: HTMLSpanElement, text: string, cb?: () => void) => {
      let index = 0
      lineElement.textContent = ''
      lineElement.classList.add('typing')

      const tick = () => {
        if (cancelled) return
        if (index < text.length) {
          lineElement.textContent += text.charAt(index)
          index++
          timers.push(setTimeout(tick, 50))
        } else {
          lineElement.classList.remove('typing')
          lineElement.classList.add('done')
          if (cb) cb()
        }
      }
      tick()
    }

    const typeNextLine = () => {
      if (cancelled) return
      if (currentLine < refs.current.length) {
        const el = refs.current[currentLine]
        if (!el) return
        typeWriterLine(el, lines[currentLine], () => {
          currentLine++
          timers.push(setTimeout(typeNextLine, 300))
        })
      } else {
        // All lines done — pause, clear, then restart loop
        timers.push(
          setTimeout(() => {
            if (cancelled) return
            currentLine = 0
            refs.current.forEach((line) => {
              if (line) {
                line.classList.remove('done')
                line.textContent = ''
              }
            })
            typeNextLine()
          }, 1000),
        )
      }
    }

    // Initial delay matches original script.js (800ms)
    timers.push(setTimeout(typeNextLine, 800))

    return () => {
      // Cancel every pending timer so StrictMode's double-invoke
      // doesn't start two concurrent typing chains
      cancelled = true
      timers.forEach(clearTimeout)
      // Reset text content so if remounted we start fresh
      refs.current.forEach((line) => {
        if (line) {
          line.textContent = ''
          line.classList.remove('typing', 'done')
        }
      })
    }
  }, [lines])

  return (
    <>
      {lines.map((l, i) => (
        <span
          key={i}
          className="typewriter-line"
          data-typewriter={l}
          ref={(el) => {
            refs.current[i] = el
          }}
        />
      ))}
    </>
  )
}
