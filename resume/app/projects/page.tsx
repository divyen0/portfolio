"use client"

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Bill to Law",
    description: "Educational website explaining how a bill becomes a law in the U.S., built for AP U.S. Government class.",
    link: "https://v0-bill-to-law-website.vercel.app/",
  },
  {
    title: "Liquor Store Scheduler",
    description: "Real functional scheduling tool built for my uncle's 3 liquor stores. Assigns employees to store locations for their shifts.",
    link: "https://liquor-store-manager--DivyenPatel1.replit.app",
  },
  {
    title: "Student Dashboard",
    description: "App to help students track homework and due dates.",
    link: "https://v0-divyen.vercel.app/",
  },
  {
    title: "Chess Game",
    description: "Interactive chess game, one of my earliest projects.",
    link: "https://v0-divyens-chess-game-plan-9h9jdo.vercel.app/",
  },
]

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            My <span className="font-serif italic text-[#6495ED]">Projects</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Things {"I've"} built to solve real problems and learn new skills.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="group h-full p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground group-hover:text-[#6495ED] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#6495ED] text-white text-sm font-medium rounded-lg hover:bg-[#5384dc] transition-colors"
                >
                  Visit Site
                  <ExternalLink size={14} />
                </motion.a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <p className="mt-12 text-center text-muted-foreground">
            More projects coming soon 🚀
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
