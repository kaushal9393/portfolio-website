"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Node.js", icon: "⬢" },
]

export default function Skills() {
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
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="gradient-text">Skills & Technologies</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="glass-dark p-8 rounded-xl text-center cursor-pointer transition-all duration-300 group-hover:glass">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-xl"
          >
            <p className="text-foreground/80 leading-relaxed">
              I'm constantly learning and expanding my skill set. Beyond the core technologies listed above, I also have
              experience with state management, testing frameworks, CI/CD pipelines, and cloud deployment platforms. My
              approach is to master the fundamentals and adapt quickly to new tools and frameworks as needed.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
