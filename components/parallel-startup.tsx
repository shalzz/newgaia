"use client"

import { motion } from "framer-motion"
import { FloatingShapes } from "./floating-shapes"

export function ParallelStartup() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-section-pink relative overflow-hidden">
      <FloatingShapes variant="startup" />
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          A Parallel Startup Society
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Dharmic Creativism led startup society where prosperity is measured across Material, Emotional and Cultural
          aspects.
        </motion.p>
      </div>
    </section>
  )
}

