"use client"

import React, { useState } from 'react'

interface TabItem {
  key: string
  title: string
  content: React.ReactNode
}

export default function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(items[0].key)

  return (
    <div className="tab-container">
      <ul className="tab-btn-list">
        {items.map((it) => (
          <li className="tab-btn-item" key={it.key}>
            <button className={`tab-btn title h6 ${active === it.key ? 'active' : ''}`} onClick={() => setActive(it.key)}>
              {it.title}
            </button>
          </li>
        ))}
      </ul>

      {items.map((it) => (
        <div key={it.key} className={`tab-content ${active === it.key ? 'active' : ''}`} data-tab-content={it.key}>
          {it.content}
        </div>
      ))}
    </div>
  )
}
