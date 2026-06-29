"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/experience";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

const lineVariants = {
  hidden: { height: 0 },
  show: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="text-accent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto pl-4 md:pl-0">
          {/* Glowing Timeline Line */}
          <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full bg-accent shadow-[0_0_15px_rgba(0,255,136,0.5)] origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 top-6 w-6 h-6 rounded-full bg-surface border-4 border-accent shadow-[0_0_10px_rgba(0,255,136,0.8)] z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-surface border border-white/10 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:border-accent/30 hover:shadow-[0_10px_30px_rgba(0,255,136,0.05)] relative group">
                      {/* Sub-line pointing to dot on desktop */}
                      <div
                        className={`hidden md:block absolute top-9 w-12 h-[2px] bg-white/10 group-hover:bg-accent/50 transition-colors ${
                          isEven ? "-right-12" : "-left-12"
                        }`}
                      />

                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                          <FiBriefcase />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted mb-6">
                        <span className="flex items-center gap-1">
                          <FiCalendar /> {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiMapPin /> {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-white/5 text-primary rounded border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
