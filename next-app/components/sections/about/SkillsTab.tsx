'use client'

import { useEffect, useRef, useState } from 'react'
import { techSkills } from '@/data/constants'
import type { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiC,
  SiGit,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiFigma,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const iconMap: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html5: SiHtml5,
  css3: SiCss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  python: SiPython,
  java: FaJava,
  c: SiC,
  git: SiGit,
  mongodb: SiMongodb,
  mysql: SiMysql,
  docker: SiDocker,
  figma: SiFigma,
}

export default function SkillsTab() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reduced motion: skip the observer, reveal on the next frame
    // (deferred via rAF so we don't synchronously setState inside the effect body)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const id = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(id)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  let idx = 0

  return (
    <div className="sk" ref={ref}>
      <h3 className="h4 title section-title">Technical Skills.</h3>

      <div className="sk-rows">
        {techSkills.map(({ category, items }) => (
          <div className="sk-row" key={category}>
            <p className="sk-row-label">{category}</p>

            <div className="sk-row-items">
              {items.map(({ label, iconKey }) => {
                const i = idx++
                const Icon = iconMap[iconKey]
                return (
                  <div
                    key={label}
                    className={`sk-tile${visible ? ' sk-tile--in' : ''}`}
                    style={{ transitionDelay: `${i * 65}ms` }}
                  >
                    <div className="sk-tile-ring" aria-hidden="true">
                      {Icon && <Icon />}
                    </div>
                    <span className="sk-tile-name">{label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
