"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";

const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false });
const HeroShape = dynamic(() => import("./HeroShape"), { ssr: false });

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroBackground />
      </div>

      {/* Social Sidebar */}
      <div className="hidden md:flex flex-col gap-6 absolute left-8 top-1/2 -translate-y-1/2 z-20">
        <a href="https://github.com/kaushal9393" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted hover:text-accent transition-colors hover:-translate-y-1 duration-300">
          <FiGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/kaushal-giri-24a47b346" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-muted hover:text-accent transition-colors hover:-translate-y-1 duration-300">
          <FiLinkedin size={24} />
        </a>
        <a href="mailto:kaushalgiri8080@gmail.com" aria-label="Send Email" className="text-muted hover:text-accent transition-colors hover:-translate-y-1 duration-300">
          <FiMail size={24} />
        </a>
        <div className="w-[1px] h-24 bg-white/10 mx-auto mt-4"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:ml-16 lg:ml-24">
          
          {/* Left Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted mb-4 font-mono flex items-center gap-2">
                Welcome to my portfolio
                <span className="w-2 h-5 bg-accent animate-pulse inline-block"></span>
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Kaushal Giri</span><br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-primary">Full-Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              I craft beautiful, performant web experiences using modern technologies. 
              Specializing in React, Next.js, and full-stack development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-surface border border-white/10 rounded-full text-primary font-medium overflow-hidden transition-all hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]"
              >
                <div className="absolute inset-0 bg-accent/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">View Projects</span>
                <FiArrowDown className="relative z-10 group-hover:rotate-[-90deg] transition-transform duration-300" />
              </a>
              <a
                href="/resume.pdf"
                download="Kaushal_Giri_Resume.pdf"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 rounded-full text-primary font-medium overflow-hidden transition-all hover:border-accent hover:text-accent"
              >
                <span className="relative z-10">Download Resume</span>
                <FiDownload className="relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Right Floating Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block h-[500px] w-full"
          >
            <HeroShape />
          </motion.div>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs tracking-widest text-muted uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[ping_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>
    </section>
  );
}
