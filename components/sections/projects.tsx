"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI-Finance & Productivity-Tools",
    description:
      "An AI-powered platform that simplifies financial management and boosts productivity through intelligent automation.",
    image: "/ai finance.png",
    tags: ["Next", "Node.js", "Typescript", "MongoDB"],
    github: "https://github.com/akshaybhawar03/AI-FINANCE.git",
    demo: "https://ai-puce-mu.vercel.app/",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: "/projects/taskapp.jpg",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourusername/task-management",
    demo: "https://tasks.yourdomain.com",
  },
  {
    title: "Pothole-Reporting-System",
    description:
      "AI-powered system for detecting, reporting, and managing potholes in real time.",
    image: "/road pothole.png",
    tags: ["HTML", "CSS", "Javascript", "Node.js", "MongoDB"],
    github: "https://github.com/kaushal9393/Pothole-Reporting-System.git",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Impulse LAB",
    description: "A digital pathology lab platform for managing patient records, test reports, and online bookings efficiently.",
    image: "/impulse lab.png",
    tags: ["Next.js", "Node.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/akshaybhawar03/impulse.git",
    demo: "https://impulse-smoky.vercel.app/",
  },
  {
    title: "FIN-NEXUS-AI",
    description: "Smart AI system for managing and optimizing personal financial insights efficiently.",
    image: "/fin nexus.png",
    tags: ["Next", "OpenAI API", "node.js", "Tailwind CSS", "Typescript"],
    github: "https://github.com/akshaybhawar03/AI-FINANCE.git",
    demo: "https://ai-finance-swart.vercel.app/",
  },
  {
    title: "Recipe Finder",
    description: "Discover and save your favorite recipes with ingredient search.",
    image: "/projects/recipe.jpg",
    tags: ["React", "Spoonacular API", "Redux", "Material-UI"],
    github: "https://github.com/yourusername/recipe-finder",
    demo: "https://recipes.yourdomain.com",
  },
]

export default function Projects() {
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
    <section data-section="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
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
              <span className="gradient-text">Featured Projects</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} className="group relative">
                <div className="glass-dark rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:glass">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed mb-4">{project.description}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-white/10">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
