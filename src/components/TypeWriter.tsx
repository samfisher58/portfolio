'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface TypeWriterProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export default function TypeWriter({ text, className = '', speed = 50, delay = 0 }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView || hasStarted) return

    const startTimeout = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [isInView, delay, hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, hasStarted])

  return (
    <span ref={ref} className={className}>
      {displayText}
      {hasStarted && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}