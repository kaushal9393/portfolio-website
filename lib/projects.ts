export type ProjectStatus = "LIVE" | "IN PROGRESS" | "ARCHIVED";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured?: boolean;
  status?: ProjectStatus;
  altText: string;
  hasCaseStudy?: boolean;
}

export const projects: Project[] = [
  {
    title: "SmartGodown.in — Smart Inventory Management",
    description: "A full-stack smart inventory management platform for godown/warehouse operations. Built to handle real-time stock tracking, role-based access, and automated alerts. Currently used by 2 local businesses.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "private", // Mark as private to show "Private Repo" in UI
    liveUrl: "https://smartgodown.in",
    image: "/images/smartgodown.png",
    featured: true, // Used for the "LIVE" badge and highlight border
    status: "LIVE",
    altText: "SmartGodown dashboard showing real-time stock tracking and alerts for inventory management",
    hasCaseStudy: true,
  },
  {
    title: "AI-Finance & Productivity-Tools",
    description: "An AI-powered platform simplifying financial management through intelligent automation. Built with Next.js and MongoDB, it automated personal finance workflows and improved tracking efficiency by 50%.",
    tags: ["Next.js", "Node.js", "TypeScript", "MongoDB"],
    githubUrl: "private",
    liveUrl: "https://ai-finance-swart.vercel.app/",
    image: "/images/finance.png",
    featured: true,
    status: "LIVE",
    altText: "AI-Finance dashboard automating personal finance workflows",
  },
  {
    title: "Impulse Lab — Health Diagnostics",
    description: "An accessible health diagnostics platform with appointment management and lab test tracking. It allows patients to easily book tests and view their reports online.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "private",
    liveUrl: "https://impulse-smoky.vercel.app/",
    image: "/images/impulse.png",
    featured: false,
    status: "IN PROGRESS",
    altText: "Impulse Lab health diagnostics appointment booking and test tracking interface",
  },
  {
    title: "FN Nexus AI — Personal Finance Infrastructure",
    description: "An AI-driven personal finance infrastructure featuring multi-step onboarding and in-depth analytics to help users optimize their spending.",
    tags: ["Next.js", "TypeScript", "AI/ML"],
    githubUrl: "private",
    liveUrl: "https://ai-puce-mu.vercel.app/",
    image: "/images/nexus.png",
    featured: false,
    status: "ARCHIVED",
    altText: "FN Nexus AI personal finance infrastructure analytics view",
  },
  {
    title: "Emi Expense Manager App",
    description: "An intuitive mobile application that helps users easily track and manage daily expenses, featuring comprehensive charts and categorization.",
    tags: ["React Native", "JavaScript", "Mobile App"],
    githubUrl: "private",
    liveUrl: "https://play.google.com/store/apps/details?id=com.emiexpense.app",
    image: "/images/emi.jpeg",
    featured: false,
    status: "LIVE",
    altText: "Emi Expense Manager mobile application showing daily expense charts",
  },
];
