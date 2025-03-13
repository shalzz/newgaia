"use client"

import { motion } from "framer-motion"
import { FloatingShapes } from "./floating-shapes"

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative bg-section-pink">
      <FloatingShapes variant="hero"/>
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-primary max-w-4xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Creativity at the Core of Organization
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-primary/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Join New Gaia Collective in reimagining how we organize ourselves, with creativity at the heart of society.
        </motion.p>
      </motion.div>
    </section>
  )
}

