"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const stats = [
    { label: "Projects", value: 7, suffix: "+" },
    { label: "Internships", value: 2, suffix: "+" },
    { label: "Tech Stacks", value: 3, suffix: "+" },
    { label: "Year Experience", value: 1, suffix: "" },
  ];

  return (
    <section id="about" className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted text-lg leading-relaxed"
          >
            <p>
              I'm a passionate full-stack developer with a keen eye for creating elegant solutions to complex problems. With expertise in modern web technologies, I build applications that are not only functional but also delightful to use.
            </p>
            <p>
              My journey in web development has been driven by a love for learning and a commitment to writing clean, maintainable code. I thrive in collaborative environments and enjoy mentoring junior developers.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-primary mb-1">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-sm text-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mx-auto w-full max-w-[400px] aspect-[4/5]"
          >
            <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-2xl animate-pulse" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:border-accent/50 group">
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl z-20 transition-all duration-500" />
              <Image
                src="/profile.jpeg" // Using the correctly named image
                alt="Kaushal Giri"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
