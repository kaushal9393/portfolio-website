"use client";

import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiInfo, FiBookOpen, FiX } from "react-icons/fi";
import { projects } from "@/lib/projects";
import { caseStudies } from "@/lib/caseStudies";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

const CaseStudyModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  const caseStudy = (caseStudies as any)[project.title];
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <motion.div 
        variants={modalVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="bg-surface border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted hover:text-white transition-colors">
          <FiX size={24} />
        </button>
        <h3 className="text-2xl font-bold font-display text-primary mb-2">Case Study: {project.title.split('—')[0]}</h3>
        
        <div className="space-y-6 mt-6">
          <div>
            <h4 className="text-lg font-bold text-accent mb-2">The Problem</h4>
            <p className="text-muted leading-relaxed">{caseStudy.problem}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-accent mb-2">My Role</h4>
            <p className="text-muted leading-relaxed">{caseStudy.role}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-accent mb-2">Architecture & Decisions</h4>
            <ul className="list-disc list-inside text-muted space-y-2">
              {caseStudy.architecture.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          {caseStudy.snippets && caseStudy.snippets.map((snippet: any, i: number) => (
            <div key={i} className="mt-4">
              <div className="bg-background px-4 py-2 text-xs font-mono text-muted rounded-t-lg border border-white/10 border-b-0">
                {snippet.filename}
              </div>
              <pre className="bg-background/50 p-4 rounded-b-lg border border-white/10 overflow-x-auto text-sm text-primary font-mono whitespace-pre">
                <code>{snippet.code.trim()}</code>
              </pre>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any | null>(null);

  return (
    <section id="projects" className="py-24 bg-surface/30 relative">
      <AnimatePresence>
        {selectedCaseStudy && <CaseStudyModal project={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />}
      </AnimatePresence>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group flex flex-col bg-surface border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,255,136,0.1)] hover:border-accent/30 ${
                project.status === "LIVE" ? "ring-1 ring-accent/50" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-background">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <Image
                  src={project.image}
                  alt={project.altText || `Screenshot of ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {project.status === "LIVE" && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-accent text-background text-xs font-bold rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.5)]">
                    <span className="w-2 h-2 rounded-full bg-background animate-pulse" />
                    LIVE
                  </div>
                )}
                {project.status === "IN PROGRESS" && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-yellow-500 text-background text-xs font-bold rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <span className="w-2 h-2 rounded-full bg-background animate-pulse" />
                    IN PROGRESS
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-primary rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-white/10 items-center justify-between">
                  <div className="flex gap-4">
                    {project.githubUrl === "private" ? (
                      <div className="relative group/tooltip flex items-center gap-1.5 text-sm font-medium text-muted/50 cursor-help">
                        <FiGithub /> Private Repo
                        <FiInfo className="text-muted/70" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-surface border border-white/10 rounded-lg text-xs text-primary opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-30 shadow-xl">
                          Client project — repo private, ask me for a code walkthrough.
                        </div>
                      </div>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors"
                      >
                        <FiGithub /> Code
                      </a>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
                    >
                      <FiExternalLink /> Demo
                    </a>
                  </div>
                  
                  {project.hasCaseStudy && (
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      <FiBookOpen /> Case Study
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
