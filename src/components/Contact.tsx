'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MessageCircle, Send, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "islamsaymon18@gmail.com",
      href: "mailto:islamsaymon18@gmail.com",
      description: "Send me an email",
      color: "blue",
      bgGradient: "from-blue-500/20 to-blue-600/30",
      borderColor: "border-blue-500/30 dark:border-blue-500/50",
      hoverGradient: "hover:from-blue-500/30 hover:to-blue-600/40"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "01865967114",
      href: "tel:+8801865967114",
      description: "Call me directly",
      color: "green",
      bgGradient: "from-green-500/20 to-green-600/30",
      borderColor: "border-green-500/30 dark:border-green-500/50",
      hoverGradient: "hover:from-green-500/30 hover:to-green-600/40"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "01865967114",
      href: "https://wa.me/8801865967114",
      description: "Message on WhatsApp",
      color: "emerald",
      bgGradient: "from-emerald-500/20 to-emerald-600/30",
      borderColor: "border-emerald-500/30 dark:border-emerald-500/50",
      hoverGradient: "hover:from-emerald-500/30 hover:to-emerald-600/40"
    }
  ]

  return (
    <motion.section 
      ref={ref}
      className="relative z-10 py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/40 border-y border-slate-200/50 dark:border-white/5 overflow-hidden" 
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="absolute inset-0 grid-pattern opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent inline-block mb-4"
            variants={itemVariants}
          >
            Contact Information
          </motion.h3>
          <motion.p 
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to start your next project? Get in touch and let's create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className={`p-6 bg-gradient-to-br ${method.bgGradient} ${method.borderColor} ${method.hoverGradient} transition-all cursor-pointer backdrop-blur-sm h-full flex flex-col`}>
                <motion.div
                  className="flex flex-col items-center text-center"
                  animate={{ 
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br from-${method.color}-500/30 to-${method.color}-600/40 flex items-center justify-center mb-4 border border-${method.color}-500/30`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <method.icon className={`w-8 h-8 text-${method.color}-600 dark:text-${method.color}-400`} />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                    {method.title}
                  </h4>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {method.description}
                  </p>
                  
                  <motion.a
                    href={method.href}
                    target={method.title === "WhatsApp" ? "_blank" : "_self"}
                    rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="text-slate-700 dark:text-slate-300 font-medium hover:text-primary transition-colors mb-4 break-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {method.value}
                  </motion.a>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className={`group border-${method.color}-500/30 hover:border-${method.color}-500 hover:bg-${method.color}-500/10 transition-all`}
                      asChild
                    >
                      <a 
                        href={method.href}
                        target={method.title === "WhatsApp" ? "_blank" : "_self"}
                        rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                      >
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Contact Now
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-2xl border border-primary/20 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MapPin className="w-6 h-6 text-primary" />
            </motion.div>
            <div className="text-left">
              <h4 className="font-semibold text-slate-800 dark:text-white">
                Based in Bangladesh
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Available for remote work worldwide
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}