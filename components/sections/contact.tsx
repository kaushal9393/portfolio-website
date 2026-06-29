"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "#",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
    color: "hover:text-primary",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@example.com",
    color: "hover:text-accent",
  },
]

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="gradient-text">Let's Connect</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </div>

          {/* Contact Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Message */}
            <motion.div variants={itemVariants} className="glass-dark p-8 rounded-xl text-center">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hello, feel free to reach out!
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Send me an email
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center gap-8">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    className={`p-4 glass-dark rounded-full text-foreground/60 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-8 border-t border-white/10"
          >
            <p className="text-foreground/50 text-sm">
              © 2025 Kaushal Giri. All rights reserved. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
