'use client'

import { ReactNode, useEffect } from 'react'

interface SmoothScrollProviderProps {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Simple smooth scrolling for anchor links only
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (link && link.hash) {
        e.preventDefault()
        const element = document.querySelector(link.hash)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Add event listener for anchor links
    document.addEventListener('click', handleClick)

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return <>{children}</>
}