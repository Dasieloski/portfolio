'use client'

import { useState, useEffect } from 'react'
import { motion,Variants, TargetAndTransition } from 'framer-motion'

type MixBlendMode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

 const variants: Variants = {
  default: {
    x: mousePosition.x - 16,
    y: mousePosition.y - 16,
  },
  text: {
    height: 150,
    width: 150,
    x: mousePosition.x - 75,
    y: mousePosition.y - 75,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    mixBlendMode: 'difference' as MixBlendMode,
  },
};


  const textEnter = () => setCursorVariant('text')
  const textLeave = () => setCursorVariant('default')

  useEffect(() => {
    const textElements = document.querySelectorAll('p, h1, h2, h3, a, button')
    textElements.forEach((el) => {
      el.addEventListener('mouseenter', textEnter)
      el.addEventListener('mouseleave', textLeave)
    })

    return () => {
      textElements.forEach((el) => {
        el.removeEventListener('mouseenter', textEnter)
        el.removeEventListener('mouseleave', textLeave)
      })
    }
  }, [])

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
      }}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: '50%',
        backgroundColor: 'white',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}