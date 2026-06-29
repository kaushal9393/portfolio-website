"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "CodeClause",
    location: "Remote",
    duration: "Jan 2024 - Feb 2024",
    description: [
      "Developed and maintained web applications using modern frameworks and technologies.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Optimized application performance and improved user experience.",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Bharat Intern",
    location: "Remote",
    duration: "Dec 2023 - Jan 2024",
    description: [
      "Built responsive and interactive user interfaces using modern web technologies.",
      "Implemented RESTful APIs and integrated with various third-party services.",
      "Participated in code reviews and contributed to team knowledge sharing.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
]

interface ExperienceProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Experience({ className, ...props }: ExperienceProps) {
  return (
    <section 
      className={cn("py-16 relative overflow-hidden", className)} 
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 -ml-px"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative pl-8"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background -ml-2 z-10"></div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <Briefcase className="w-4 h-4 mr-2 text-primary" />
                          <span className="text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-primary" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-xs font-medium">{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2 mt-1.5">•</span>
                          <span className="text-foreground/90 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-border/20 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
