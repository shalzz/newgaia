"use client"

import { motion } from "framer-motion"
import { FloatingShapes } from "./floating-shapes"
import { MeditationIllustration } from "./meditation-illustration"

export function Web3Infrastructure() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-white relative overflow-hidden">
      <FloatingShapes variant="web3" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary">Web 3.0 Infrastructure</h2>
          <p className="text-xl text-gray-600">
            Building a Network state where creativity is incentivised leveraging Decentralized Autonomous Organizations
            (DAO's), Tokenomics and Emotional Wellness.
          </p>
        </motion.div>
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <MeditationIllustration />
        </motion.div>
      </div>
    </section>
  )
}

