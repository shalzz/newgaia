"use client"

import { motion } from "framer-motion"

export function DharmicCreativism() {
  return (
    <motion.section
      className="min-h-[50vh] flex items-center justify-center p-8 bg-section-blue rounded-3xl mx-4 my-12 max-w-6xl lg:mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-5xl font-bold text-white">What is Dharmic Creativism?</h2>
        <p className="text-xl text-white/90">
          "Dharma" refers to a sense of righteousness within leading us to our sacred duty to something beyond us. It is
          through our "Dharma" that we create deep bonds with one another and create positive outcomes for our society.
          It is important for us to differentiate creativity built on this sense of "Dharma" from other forms of
          creativity.
        </p>
      </div>
    </motion.section>
  )
}

