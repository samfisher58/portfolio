'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Code, Coffee } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.footer 
      ref={ref}
      className="relative z-10 py-12 text-center border-t border-white/5 bg-slate-950/20"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center space-y-6"
          variants={itemVariants}
        >
          {/* Animated Icons */}
          <motion.div 
            className="flex items-center space-x-4 text-slate-400"
            variants={itemVariants}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm">Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                color: ["#ef4444", "#f97316", "#ef4444"]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.div>
            <span className="text-sm">and</span>
            <motion.div
              animate={{ 
                y: [0, -3, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Coffee className="w-5 h-5 text-amber-500" />
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.p 
            className="text-slate-500 text-sm"
            variants={itemVariants}
          >
            © 2024 Saymon. All rights reserved.
          </motion.p>

          {/* Animated Signature */}
          <motion.div
            className="text-xs text-slate-600 font-mono"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              color: "#a855f7"
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              &lt;/&gt; Built with Next.js, Tailwind CSS &amp; Framer Motion
            </motion.span>
          </motion.div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}