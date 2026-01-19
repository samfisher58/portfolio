'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: "LoanLink – Microloan Management Web Application",
    description: "A comprehensive web application for managing microloans with user authentication, loan tracking, and administrative features for financial institutions.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop&crop=center",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://loan-link-cf99e.web.app/",
    codeUrl: "https://github.com/samfisher58/LoanLink-client-side.git"
  },
  {
    title: "Habit Tracker – Productivity Web Application",
    description: "A modern productivity application that helps users build and maintain healthy habits with progress tracking, analytics, and motivational features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop&crop=center",
    technologies: ["React", "Express.js", "MongoDB"],
    liveUrl: "https://habit-tracker-ba322.web.app/",
    codeUrl: "https://github.com/samfisher58/Habit-Tracker-Client"
  },
  {
    title: "AppHive – Web-Based Application Gallery",
    description: "A curated gallery showcasing various web applications with interactive previews, categorization, and detailed project information for developers.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop&crop=center",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://apphivesamfisher58.netlify.app/",
    codeUrl: "https://github.com/samfisher58/b12a8.git"
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
  hidden: { y: 60, opacity: 0 },
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
  hidden: { y: 80, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section 
      ref={ref}
      className="relative z-10 py-24 bg-slate-950/40 border-y border-white/5" 
      id="projects"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3"
            variants={itemVariants}
          >
            Portfolio
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent inline-block"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h3>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              <Card className="group relative bg-slate-900/50 border-white/10 overflow-hidden project-card-glow transition-all duration-500 flex flex-col h-full">
                <motion.div 
                  className="aspect-video overflow-hidden flex-shrink-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
                
                <CardContent className="p-6 flex-grow flex flex-col">
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary uppercase tracking-wider"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <motion.h4 
                    className="text-xl lg:text-2xl font-bold font-display mb-3 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent line-clamp-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
                  >
                    {project.title}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
                  >
                    {project.description}
                  </motion.p>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <motion.div 
                    className="flex flex-col gap-3 w-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 1.1 + (index * 0.1), duration: 0.5 }}
                  >
                    {/* Live Demo Button - Full Width */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full h-10 text-sm font-semibold text-white glow-border transition-all duration-300 flex items-center justify-center gap-2 hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">Live Demo</span>
                        </a>
                      </Button>
                    </motion.div>
                    
                    {/* GitHub Buttons Row */}
                    <div className="flex gap-2 w-full">
                      <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full h-10 text-xs font-semibold text-white glow-border transition-all duration-300 flex items-center justify-center gap-1 hover:bg-primary/10 min-w-0"
                          asChild
                        >
                          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">
                              {project.title.includes('LoanLink') || project.title.includes('Habit Tracker') ? 'Client' : 'Code'}
                            </span>
                          </a>
                        </Button>
                      </motion.div>
                      
                      {(project.title.includes('LoanLink') || project.title.includes('Habit Tracker')) && (
                        <motion.div
                          className="flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full h-10 text-xs font-semibold text-white glow-border transition-all duration-300 flex items-center justify-center gap-1 hover:bg-primary/10 min-w-0"
                            asChild
                          >
                            <a 
                              href={project.title.includes('LoanLink') 
                                ? 'https://github.com/samfisher58/LoanLink-server-side.git' 
                                : 'https://github.com/samfisher58/Habit-Tracker-server'
                              } 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <Github className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">Server</span>
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}