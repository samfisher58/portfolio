'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    period: "March 2024 - Present",
    title: "Executive",
    company: "GENEX INFOSYS PLC",
    achievements: [
      "Leading cross-functional teams to deliver high-quality IT solutions for enterprise clients.",
      "Overseeing project execution and ensuring adherence to quality standards and timelines.",
      "Implementing process improvements that enhanced operational efficiency by 30%.",
      "Managing client relationships and coordinating with stakeholders for successful project delivery."
    ],
    side: "left"
  },
  {
    period: "February 2023 - March 2024",
    title: "Subject Matter Expert (SME)",
    company: "GENEX INFOSYS PLC",
    achievements: [
      "Provided technical expertise and guidance on complex IT projects and solutions.",
      "Conducted knowledge transfer sessions and mentored junior team members.",
      "Analyzed business requirements and translated them into technical specifications.",
      "Collaborated with development teams to ensure best practices and quality deliverables."
    ],
    side: "right"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
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
  left: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },
  right: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
}

const timelineDotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.3
    }
  }
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section 
      ref={ref}
      className="relative z-10 py-24 bg-slate-950/40 border-y border-white/5" 
      id="experience"
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
            Timeline
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent inline-block"
            variants={itemVariants}
          >
            Work Experience
          </motion.h3>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2 hidden md:block"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          />
          
          <motion.div 
            className="space-y-12 relative"
            variants={containerVariants}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative flex flex-col md:flex-row items-center"
                variants={itemVariants}
              >
                {exp.side === "left" ? (
                  <>
                    <motion.div 
                      className="flex-1 md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0"
                      variants={cardVariants.left}
                    >
                      <motion.div
                        whileHover={{ 
                          scale: 1.02, 
                          x: -10,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                      >
                        <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/[0.08] transition-all group cursor-pointer">
                          <motion.span 
                            className="text-primary font-mono text-sm mb-2 block"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {exp.period}
                          </motion.span>
                          <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.title}</h4>
                          <p className="text-slate-400 font-medium mb-3">{exp.company}</p>
                          <ul className="text-sm text-slate-500 space-y-2 list-none md:list-none">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li 
                                key={i} 
                                className="flex md:justify-end items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 0.8 + (i * 0.1), duration: 0.4 }}
                              >
                                <span className="md:order-2">•</span> {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </Card>
                      </motion.div>
                    </motion.div>
                    <motion.div 
                      className="absolute left-[-8px] md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_#a855f7] z-10 -translate-x-1/2 hidden md:block"
                      variants={timelineDotVariants}
                      animate={{
                        boxShadow: [
                          "0 0 15px #a855f7",
                          "0 0 25px #a855f7",
                          "0 0 15px #a855f7"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="flex-1 md:w-1/2 md:pl-12"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 md:w-1/2 md:pr-12"></div>
                    <motion.div 
                      className="absolute left-[-8px] md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_#a855f7] z-10 -translate-x-1/2 hidden md:block"
                      variants={timelineDotVariants}
                      animate={{
                        boxShadow: [
                          "0 0 15px #a855f7",
                          "0 0 25px #a855f7", 
                          "0 0 15px #a855f7"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                    <motion.div 
                      className="flex-1 md:w-1/2 md:pl-12 mt-4 md:mt-0"
                      variants={cardVariants.right}
                    >
                      <motion.div
                        whileHover={{ 
                          scale: 1.02, 
                          x: 10,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                      >
                        <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/[0.08] transition-all group cursor-pointer">
                          <motion.span 
                            className="text-primary font-mono text-sm mb-2 block"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                          >
                            {exp.period}
                          </motion.span>
                          <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.title}</h4>
                          <p className="text-slate-400 font-medium mb-3">{exp.company}</p>
                          <ul className="text-sm text-slate-500 space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ delay: 1.2 + (i * 0.1), duration: 0.4 }}
                              >
                                <span>•</span> {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </Card>
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}