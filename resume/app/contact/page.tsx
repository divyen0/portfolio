"use client"

import { useState } from "react"
import { FadeIn } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { Send, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <section className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <FadeIn>
            <div className="w-16 h-16 mx-auto bg-[#6495ED]/10 rounded-full flex items-center justify-center">
              <Send className="text-[#6495ED]" size={28} />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-foreground">Message Sent!</h2>
            <p className="mt-3 text-muted-foreground">
              Thanks for reaching out. {"I'll"} get back to you soon!
            </p>
            <motion.button
              onClick={() => {
                setSubmitted(false)
                setFormData({ name: "", email: "", message: "" })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-[#6495ED] text-white font-medium rounded-lg hover:bg-[#5384dc] transition-colors"
            >
              Send Another Message
            </motion.button>
          </FadeIn>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            Get In <span className="font-serif italic text-[#6495ED]">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Want to work together or just say hi? Reach out!
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex items-center gap-3 text-muted-foreground">
            <Mail size={18} className="text-[#6495ED]" />
            <a href="mailto:divyyen@gmail.com" className="hover:text-[#6495ED] transition-colors">
              divyyen@gmail.com
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#6495ED] focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#6495ED] focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#6495ED] focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#6495ED] text-white font-medium rounded-lg hover:bg-[#5384dc] transition-colors"
            >
              Send Message
              <Send size={16} />
            </motion.button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
