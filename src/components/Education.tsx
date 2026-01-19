'use client'

import { Card } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const educationData = [
  {
    period: "2019 - 2023",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Dhaka International University",
    description: "Comprehensive study in computer science fundamentals, software engineering principles, and modern programming technologies.",
    icon: GraduationCap,
    color: "primary"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const cardVariants = {
  hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
  visible: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section 
      ref={ref}
      className="relative z-10 py-24" 
      id="education"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3"
            variants={itemVariants}
          >
            Academics
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent inline-block"
            variants={itemVariants}
          >
            Education
          </motion.h3>
        </motion.div>
        
        <motion.div 
          className="flex justify-center max-w-5xl mx-auto"
          variants={itemVariants}
        >
          <div className="w-full max-w-md">
            <motion.div 
              className="relative group"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
            >
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-primary to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Card className="relative p-8 bg-slate-900 border-white/10 flex items-start gap-6 cursor-pointer">
                <motion.div 
                  className="w-16 h-16 rounded-xl bg-primary/10 border-primary/20 flex items-center justify-center shrink-0 border"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <GraduationCap className="text-primary w-8 h-8" />
                </motion.div>
                <div>
                  <motion.span 
                    className="text-primary font-mono text-sm mb-1 block"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    2019 - 2023
                  </motion.span>
                  <motion.h4 
                    className="text-xl font-bold text-white mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    B.Sc. in Computer Science & Engineering
                  </motion.h4>
                  <motion.p 
                    className="text-slate-400 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    Dhaka International University
                  </motion.p>
                  <motion.p 
                    className="text-sm text-slate-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    Comprehensive study in computer science fundamentals, software engineering principles, and modern programming technologies.
                  </motion.p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}