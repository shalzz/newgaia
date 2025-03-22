"use client"

import { motion } from "framer-motion"

export function FailedStates() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative h-96"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-0 left-0 w-64 h-80 bg-accent-purple rounded-lg"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute top-20 left-40 w-64 h-80 bg-[#8FA889] rounded-lg"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute top-40 left-20 w-64 h-80 bg-[#D2C4A9] rounded-lg"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>
        <motion.div
          className="space-y-6 z-10 py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-accent-coral text-5xl font-bold">Nation States are no longer sufficient</h2>
          <p className="text-gray-700 text-lg">
            <i>Capitalism, Communism and Socialism</i> are all insufficient and incomplete to create a truly prosperous society.
          </p>
          <p className="text-gray-700 text-lg">
            Riddled with information asymmetry and ossified institutes, we need a balanced and holistic approach to an
            economic system.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

