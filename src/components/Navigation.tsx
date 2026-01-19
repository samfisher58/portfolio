'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#', isActive: true },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const containerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const logoVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "backOut"
    }
  }
}

export default function Navigation() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Scroll effect
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
      <motion.nav 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-500",
          scrolled 
            ? "bg-white/90 dark:bg-black/20 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/10 shadow-lg" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            variants={logoVariants}
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl sm:text-2xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
                Saymon
              </span>
              <motion.span 
                className="text-primary font-mono ml-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                &lt;/&gt;
              </motion.span>
            </motion.div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            variants={containerVariants}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 font-medium transition-all duration-300 group",
                  activeItem === item.name
                    ? "text-primary dark:text-primary"
                    : "text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                )}
                onClick={() => handleNavClick(item.name)}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
                
                {/* Active indicator */}
                {activeItem === item.name && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-pink-500 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-primary/20 dark:hover:bg-primary/20 transition-all duration-300 group overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: isDark ? 0 : 180 }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                >
                  {isDark ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-blue-500" />
                  )}
                </motion.div>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[80px] left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-xl"
          >
            <motion.div 
              className="px-6 py-8 space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.1,
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-lg font-medium transition-all duration-300",
                    activeItem === item.name
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-primary/5"
                  )}
                  onClick={() => handleNavClick(item.name)}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Theme Toggle */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="pt-4 border-t border-white/10"
              >
                <Button
                  variant="ghost"
                  onClick={toggleTheme}
                  className="w-full justify-start px-4 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300"
                >
                  <motion.div
                    className="mr-3"
                    animate={{ rotate: isDark ? 0 : 180 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                  >
                    {isDark ? (
                      <Sun className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <Moon className="h-5 w-5 text-blue-500" />
                    )}
                  </motion.div>
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}