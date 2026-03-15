"use client"

import React, { useEffect } from 'react'

export default function Tilt() {
  useEffect(() => {
    const tiltElements = document.querySelectorAll('[data-tilt]')

    const initTilt = function (this: HTMLElement, event: MouseEvent) {
      const centerX = this.offsetWidth / 2;
      const centerY = this.offsetHeight / 2;
      const tiltPosY = (((event.offsetX as number) - centerX) / centerX) * 10;
      const tiltPosX = (((event.offsetY as number) - centerY) / centerY) * 10;
      const rotateX = String(tiltPosX) + 'deg';
      const rotateY = String(tiltPosY - (tiltPosY * 2)) + 'deg';
      (this as HTMLElement).style.transform = 'perspective(1000px) rotateX(' + rotateX + ') rotateY(' + rotateY + ')';
    };

    const resetTilt = function (this: HTMLElement) {
      (this as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    tiltElements.forEach((el) => {
      el.addEventListener('mousemove', initTilt as any)
      el.addEventListener('mouseout', resetTilt as any)
    })

    return () => {
      tiltElements.forEach((el) => {
        el.removeEventListener('mousemove', initTilt as any)
        el.removeEventListener('mouseout', resetTilt as any)
      })
    }
  }, [])

  return null
}
