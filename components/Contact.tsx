"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background gradients for the final section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-accent/10 blur-[120px] rounded-full opacity-50 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="max-w-3xl mx-auto bg-surface/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle border highlight on hover */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-3xl transition-colors duration-500" />
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Let's Work <span className="text-accent">Together</span>
          </h2>
          
          <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hello, feel free to reach out!
          </p>

          <a
            href="mailto:kaushalgiri8080@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-background font-bold text-lg rounded-full transition-all duration-300 hover:bg-accent hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] group/btn relative overflow-hidden"
          >
            <span className="relative z-10">Send me an email</span>
            <FiArrowRight className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
          </a>

          <div className="flex justify-center gap-4 mt-12 pt-12 border-t border-white/5">
            <a href="https://github.com/kaushal9393" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kaushal-giri-24a47b346" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:kaushalgiri8080@gmail.com" className="p-4 rounded-full bg-white/5 border border-white/10 text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300">
              <FiMail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center pb-8 border-t border-white/5 pt-8">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Kaushal Giri. All rights reserved.
        </p>
        <p className="text-white/30 text-xs mt-2 font-mono">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}
