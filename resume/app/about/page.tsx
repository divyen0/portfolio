"use client"

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { GraduationCap, Languages, Target, Zap, Users, CheckCircle, Brain } from "lucide-react"

const skills = [
  { label: "Quick Learner", icon: Zap },
  { label: "Trilingual", icon: Languages },
  { label: "Tech-Savvy", icon: Brain },
  { label: "Team Player", icon: Users },
  { label: "Gets Work Done", icon: CheckCircle },
]

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            About <span className="font-serif italic text-[#6495ED]">Me</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {"I'm"} Divyen Patel, a 9th grader at{" "}
            <span className="text-[#6495ED] font-medium">HCS Scholars Academy</span> (2025–2029), 
            one of the most prestigious public magnet schools in Horry County, South Carolina. 
            Before that, I attended Whittemore Park Middle School (2022–2025) and Homewood Elementary (2015–2022).
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {"I'm"} fluent in three languages — <span className="text-foreground font-medium">English</span>, <span className="text-foreground font-medium">Gujarati</span>, and <span className="text-foreground font-medium">Hindi</span> — 
            which has given me a unique perspective on communication and culture. 
            My interests span technology, mathematics, and problem-solving. When {"I'm"} not coding, 
            you might find me solving Rubik{"'"}s cubes at lightning speed or playing volleyball.
          </p>
        </FadeIn>

        {/* Education Timeline */}
        <FadeIn delay={0.3}>
          <div className="mt-12">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <GraduationCap className="text-[#6495ED]" />
              Education
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#6495ED] shrink-0" />
                <div>
                  <p className="font-medium text-foreground">HCS Scholars Academy</p>
                  <p className="text-sm text-muted-foreground">2025 – 2029</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-border shrink-0" />
                <div>
                  <p className="font-medium text-muted-foreground">Whittemore Park Middle School</p>
                  <p className="text-sm text-muted-foreground">2022 – 2025</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-border shrink-0" />
                <div>
                  <p className="font-medium text-muted-foreground">Homewood Elementary</p>
                  <p className="text-sm text-muted-foreground">2015 – 2022</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Skills */}
        <div className="mt-12">
          <FadeIn>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Target className="text-[#6495ED]" />
              Skills
            </h2>
          </FadeIn>

          <StaggerContainer className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <StaggerItem key={skill.label}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <skill.icon size={16} className="text-[#6495ED]" />
                  <span className="text-sm font-medium text-foreground">{skill.label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Goal */}
        <FadeIn delay={0.4}>
          <div className="mt-12 p-6 bg-[#6495ED]/5 border border-[#6495ED]/20 rounded-xl">
            <h3 className="text-lg font-bold text-[#6495ED]">My Goal</h3>
            <p className="mt-2 text-foreground/80 leading-relaxed">
              Earn leadership roles and gain real-world tech experience by the end of high school.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
