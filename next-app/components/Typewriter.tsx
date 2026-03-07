"use client"

import React, { useEffect, useRef } from 'react'

interface Props {
  lines: string[]
}

export default function Typewriter({ lines }: Props) {
  const refs = useRef<Array<HTMLSpanElement | null>>([])

  useEffect(() => {
    let currentLine = 0
    const typeWriterLine = (lineElement: HTMLSpanElement, text: string, cb?: () => void) => {
      let index = 0
      lineElement.textContent = ''
      lineElement.classList.add('typing')
      const tick = () => {
        if (index < text.length) {
          lineElement.textContent += text.charAt(index)
          index++
          setTimeout(tick, 50)
        } else {
          lineElement.classList.remove('typing')
          lineElement.classList.add('done')
          if (cb) cb()
        }
      }
      tick()
    }

    const typeNextLine = () => {
      if (currentLine < refs.current.length) {
        const el = refs.current[currentLine]
        if (!el) return
        typeWriterLine(el, lines[currentLine], () => {
          currentLine++
          setTimeout(typeNextLine, 300)
        })
      } else {
        currentLine = 0
        setTimeout(() => {
          refs.current.forEach((line) => {
            if (line) {
              line.classList.remove('done')
              line.textContent = ''
            }
          })
          typeNextLine()
        }, 1000)
      }
    }

    setTimeout(typeNextLine, 800)
  }, [lines])

  return (
    <>
      {lines.map((l, i) => (
        <span key={i} className="typewriter-line" data-typewriter={l} ref={(el) => (refs.current[i] = el)} />
      ))}
    </>
  )
}
