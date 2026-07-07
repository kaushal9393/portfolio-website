import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  title: "Kaushal Giri | Full-Stack Developer — React, Next.js, Node.js",
  description: "Kaushal Giri is a full-stack developer specializing in React, Next.js, Node.js, and MongoDB. Explore projects, skills, and experience. Based in India.",
  authors: [{ name: "Kaushal Giri" }],
  keywords: "Kaushal Giri, Full Stack Developer, React Developer, Next.js, Node.js, MongoDB, Web Developer India, Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://girikaushal.netlify.app",
  },
  openGraph: {
    type: "website",
    title: "Kaushal Giri | Full-Stack Developer",
    description: "Full-stack developer with 2+ years of experience building real-world apps using React, Next.js, and Node.js.",
    url: "https://girikaushal.netlify.app",
    siteName: "Kaushal Giri Portfolio",
    images: [
      {
        url: "https://girikaushal.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaushal Giri — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushal Giri | Full-Stack Developer",
    description: "Full-stack developer — React, Next.js, Node.js, MongoDB.",
    images: ["https://girikaushal.netlify.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
        <meta name="rating" content="general" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kaushal Giri",
              "url": "https://girikaushal.netlify.app",
              "image": "https://girikaushal.netlify.app/profile.jpeg",
              "description": "Full-stack developer from India specializing in React, Next.js, Node.js, and MongoDB. Building real-world web and mobile apps.",
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance / Open to Work"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Pune University"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://github.com/kaushal9393",
                "https://www.linkedin.com/in/kaushal-giri-24a47b346",
                "https://girikaushal.netlify.app"
              ],
              "knowsAbout": [
                "React.js", "Next.js", "Node.js", "MongoDB", 
                "Express.js", "Tailwind CSS", "Full-Stack Development"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-primary antialiased`}>
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
