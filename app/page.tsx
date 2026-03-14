"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion-wrapper"

export default function HomePage() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                <span className="font-serif italic text-[#6495ED]">Divyen</span>{" "}
                <span className="text-foreground">Patel</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                Student · Developer · Problem Solver
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed max-w-lg">
                9th grader at HCS Scholars Academy with a passion for technology, math, and building real things.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#6495ED] text-white font-medium rounded-lg hover:bg-[#5384dc] transition-colors"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                >
                  Get In Touch
                </motion.a>
              </div>
            </FadeIn>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center">
            <FadeIn delay={0.2} direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/divyen.jpg"
                  alt="Divyen Patel"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
