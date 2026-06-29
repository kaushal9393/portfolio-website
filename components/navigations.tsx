"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface NavigationProps {
  refs: {
    heroRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    skillsRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    experienceRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
  };
}

export default function Navigation({ refs }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // ✅ Added Home (heroRef) to navItems
  const navItems = [
    { label: "Home", ref: refs.heroRef },
    { label: "About", ref: refs.aboutRef },
    { label: "Skills", ref: refs.skillsRef },
    { label: "Projects", ref: refs.projectsRef },
    { label: "Experience", ref: refs.experienceRef },
    { label: "Contact", ref: refs.contactRef },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold gradient-text"
        >
          KG
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => scrollToSection(item.ref)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6"
        >
          <div
            className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 mt-4 mx-4 glass p-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.ref)}
              className="text-left text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
