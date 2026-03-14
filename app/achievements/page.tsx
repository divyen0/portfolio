"use client"

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"

const achievements = [
  {
    emoji: "🏆",
    title: "2025 HCS Tech Fair — Bronze Champion",
    description: "3rd place in the Websites category at Horry County Schools Tech Fair",
  },
  {
    emoji: "📜",
    title: "NHD Regionals Advancement",
    description: "Reached regionals at National History Day, a nationwide academic competition",
  },
  {
    emoji: "📚",
    title: "Yearbook Designer",
    description: "Helped design the Whittemore Park MS yearbook through Leadership class",
  },
  {
    emoji: "🌟",
    title: "Burman H. Jones Award",
    description: "Highest honor at Homewood Elementary; requires attending all 5 years, excellent grades, and passing an interview",
  },
  {
    emoji: "🏫",
    title: "HCS Scholars Academy",
    description: "Accepted into one of Horry County's most competitive public magnet schools",
  },
  {
    emoji: "🙏",
    title: "BAPS Hindu Temple Volunteer",
    description: "8 hours of volunteer work supervising kids and running game stations at Kids Diwali, Myrtle Beach",
  },
  {
    emoji: "🌐",
    title: "Trilingual",
    description: "Fluently speaks English, Gujarati, and Hindi",
  },
]

export default function AchievementsPage() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            <span className="font-serif italic text-[#6495ED]">Achievements</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Milestones and accomplishments along my journey.
          </p>
        </FadeIn>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <StaggerContainer className="space-y-6">
            {achievements.map((achievement, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="relative flex gap-6 items-start"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-12 h-12 shrink-0 items-center justify-center bg-card border-2 border-[#6495ED] rounded-full text-xl z-10">
                    {achievement.emoji}
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl md:hidden">{achievement.emoji}</span>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{achievement.title}</h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
