"use client";

import { motion, type Variants } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb, 
  SiTailwindcss, SiExpress, SiGit, SiGithub, SiJavascript, 
  SiHtml5, SiCss, SiMysql, SiFigma, SiFirebase, 
  SiNetlify, SiVercel 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
};

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB", level: "2 yrs · 5+ projects" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: "1 yr · 3+ projects" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: "2 yrs · 4+ projects" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Proficient" },
      { name: "REST APIs", icon: TbApi, color: "#ffffff" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ]
  }
];

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

        {/* 3-Column Grid for Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-6 md:p-8 rounded-2xl bg-surface/50 border border-white/10 flex flex-col h-full hover:border-accent/30 transition-colors"
            >
              <h3 className="text-2xl font-display font-semibold mb-8 text-primary border-b border-white/10 pb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-6 flex-grow">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="flex items-center gap-4 group">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-accent/30 transition-colors">
                        <Icon size={28} style={{ color: skill.color }} className="group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-primary text-lg">{skill.name}</span>
                        {skill.level && (
                          <span className="text-sm text-accent/80 font-mono mt-0.5">{skill.level}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
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
