'use client'

import { Card } from '@/components/ui/card'
import { Monitor, Server, Settings } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const frontendSkills = [
  {
    name: 'React',
    description: 'Modern UI development',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    borderColor: 'border-cyan-400/30 group-hover:border-cyan-400',
    shadowColor: 'shadow-[0_0_15px_rgba(34,211,238,0.15)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]'
  },
  {
    name: 'JavaScript',
    description: 'Dynamic web programming',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    borderColor: 'border-yellow-500/30 group-hover:border-yellow-500',
    shadowColor: 'shadow-[0_0_15px_rgba(234,179,8,0.15)] group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]'
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first styling',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    borderColor: 'border-cyan-500/30 group-hover:border-cyan-500',
    shadowColor: 'shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]'
  }
]

const backendSkills = [
  {
    name: 'Node.js',
    description: 'Scalable server systems',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    borderColor: 'border-green-500/30 group-hover:border-green-500',
    shadowColor: 'shadow-[0_0_15px_rgba(34,197,94,0.15)] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]'
  },
  {
    name: 'Express.js',
    description: 'Fast web framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
    borderColor: 'border-gray-500/30 group-hover:border-gray-400',
    shadowColor: 'shadow-[0_0_15px_rgba(107,114,128,0.15)] group-hover:shadow-[0_0_20px_rgba(107,114,128,0.3)]'
  },
  {
    name: 'MongoDB',
    description: 'NoSQL database design',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    borderColor: 'border-emerald-500/30 group-hover:border-emerald-500',
    shadowColor: 'shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]'
  }
]

const toolsSkills = [
  {
    name: 'Redux',
    description: 'State management',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    borderColor: 'border-purple-500/30 group-hover:border-purple-500',
    shadowColor: 'shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
  },
  {
    name: 'Figma',
    description: 'UI/UX prototyping',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    borderColor: 'border-pink-500/30 group-hover:border-pink-500',
    shadowColor: 'shadow-[0_0_15px_rgba(236,72,153,0.15)] group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]'
  },
  {
    name: 'Git',
    description: 'Version control & CI/CD',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    borderColor: 'border-slate-400/30 group-hover:border-slate-100',
    shadowColor: 'shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]'
  }
]

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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const cardVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

function SkillCard({ skill, index }: { skill: any, index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05, 
        x: 10,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className={`group p-5 bg-slate-900/50 border-white/5 skill-card-glow transition-all duration-300 cursor-pointer`}>
        <div className="flex items-center space-x-4">
          <motion.div 
            className={`w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center p-2.5 ${skill.borderColor} transition-colors ${skill.shadowColor}`}
            animate={{ rotate: [0, 360] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: index * 2
            }}
          >
            <Image src={skill.icon} alt={skill.name} width={24} height={24} className="w-full h-full object-contain" />
          </motion.div>
          <div>
            <h5 className="text-slate-900 dark:text-white font-semibold">{skill.name}</h5>
            <p className="text-xs text-slate-600 dark:text-slate-500">{skill.description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: frontendSkills,
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      title: "Backend", 
      icon: Server,
      skills: backendSkills,
      iconColor: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20"
    },
    {
      title: "Tools",
      icon: Settings,
      skills: toolsSkills,
      iconColor: "text-orange-400",
      bgColor: "bg-orange-400/10", 
      borderColor: "border-orange-400/20"
    }
  ]

  return (
    <motion.section 
      ref={ref}
      className="relative z-10 py-16 sm:py-24 bg-white dark:bg-transparent" 
      id="skills"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3"
            variants={itemVariants}
          >
            Expertise
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent inline-block"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h3>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-8"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div 
                  className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center ${category.borderColor}`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className={`${category.iconColor} w-5 h-5`} />
                </motion.div>
                <h4 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">{category.title}</h4>
              </motion.div>
              <motion.div 
                className="grid grid-cols-1 gap-4"
                variants={containerVariants}
              >
                {category.skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}