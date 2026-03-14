"use client"

import { useState, useEffect } from "react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const goals = [
  "Get a job at Conway Memorial Library as Library Assistant",
  "Compete in Math Competitions",
  "Complete 50+ Volunteer Hours",
  "Join the Volleyball Team",
  "Develop better study techniques to ace quizzes and tests",
  "Earn a leadership role by end of high school",
  "Gain more real-world tech experience",
]

export default function RoadmapPage() {
  const [checkedGoals, setCheckedGoals] = useState<Set<number>>(new Set())

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("roadmap-goals")
    if (saved) {
      setCheckedGoals(new Set(JSON.parse(saved)))
    }
  }, [])

  // Save to localStorage when checkedGoals changes
  useEffect(() => {
    localStorage.setItem("roadmap-goals", JSON.stringify([...checkedGoals]))
  }, [checkedGoals])

  const toggleGoal = (index: number) => {
    setCheckedGoals((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            <span className="font-serif italic text-[#6495ED]">Roadmap</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Things {"I'm"} working toward.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 space-y-4">
          {goals.map((goal, index) => {
            const isChecked = checkedGoals.has(index)
            return (
              <StaggerItem key={index}>
                <motion.button
                  onClick={() => toggleGoal(index)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full flex items-center gap-4 p-5 bg-card border rounded-xl text-left transition-all duration-300 ${
                    isChecked
                      ? "border-[#6495ED] bg-[#6495ED]/5"
                      : "border-border hover:border-[#6495ED]/50"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isChecked
                        ? "bg-[#6495ED] border-[#6495ED]"
                        : "border-muted-foreground"
                    }`}
                  >
                    {isChecked && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <Check size={14} className="text-white" />
                      </motion.div>
                    )}
                  </div>
                  <span
                    className={`text-base font-medium transition-all duration-300 ${
                      isChecked ? "text-[#6495ED]" : "text-foreground"
                    }`}
                  >
                    {goal}
                  </span>
                </motion.button>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <p className="mt-12 text-center text-muted-foreground text-sm">
            This page updates as I grow 🚀
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
