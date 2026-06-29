"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/skills";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Skills & <span className="text-accent">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            // Make some cards span 2 columns for the bento effect (e.g. index 0 and 5)
            const isWide = index === 0 || index === 5;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] group ${
                  isWide ? "col-span-2 md:col-span-2" : "col-span-1"
                }`}
              >
                <Icon
                  size={48}
                  style={{ color: skill.color }}
                  className="mb-4 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="font-medium text-primary text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-2xl bg-surface border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
          <p className="text-muted text-lg leading-relaxed pl-4">
            I'm constantly learning and expanding my skill set. Beyond the core technologies listed above, I also have experience with state management, testing frameworks, CI/CD pipelines, and cloud deployment platforms. My approach is to master the fundamentals and adapt quickly to new tools and frameworks as needed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
