'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#', isActive: true },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
]

export default function NavigationSimple() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (itemName: string) => {
    setActiveItem(itemName)
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500",
          scrolled 
            ? "bg-white/10 dark:bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <span className="text-2xl font-bold font-display tracking-tight dark:text-white text-slate-900">
              Saymon<span className="text-primary font-mono">&lt;/&gt;</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 font-medium transition-all duration-300 group hover:-translate-y-0.5",
                  activeItem === item.name
                    ? "text-primary dark:text-primary"
                    : "text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                )}
                onClick={() => handleNavClick(item.name)}
              >
                {item.name}
                
                {/* Active indicator */}
                {activeItem === item.name && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-pink-500 rounded-full animate-pulse" />
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-lg -z-10 scale-0 group-hover:scale-100 transition-transform duration-200" />
              </a>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 group hover:scale-110"
            >
              <div className="transition-transform duration-300 group-hover:rotate-180">
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-blue-500" />
                )}
              </div>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110"
          >
            <div className={cn("transition-transform duration-300", isMenuOpen && "rotate-180")}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </div>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-[80px] left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-xl transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-8 space-y-6">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:translate-x-2",
                activeItem === item.name
                  ? "text-primary bg-primary/10 border border-primary/20"
                  : "text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-primary/5"
              )}
              onClick={() => handleNavClick(item.name)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile Theme Toggle */}
          <div className="pt-4 border-t border-white/10">
            <Button
              variant="ghost"
              onClick={toggleTheme}
              className="w-full justify-start px-4 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              <div className="mr-3 transition-transform duration-300 hover:rotate-180">
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-blue-500" />
                )}
              </div>
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}