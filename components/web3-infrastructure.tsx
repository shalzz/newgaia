"use client"

import { motion } from "framer-motion"
import { FloatingShapes } from "./floating-shapes"

import Image from 'next/image'
import mediatingDoodlePic from '/meditating-doodle.png'
import circusPic from '/circus.png'

const transformStyle = {
    willChange: "transform",
    transform: "translate3d(0px, 47.271px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
    transformStyle: "preserve-3d",
  };

export function Web3Infrastructure() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-white relative overflow-hidden">
      <FloatingShapes variant="web3" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        <motion.div
          className="space-y-6 z-10"
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
          <img src="https://cdn.prod.website-files.com/64cb213a923ec66dd9b9fb7b/64cb213a923ec66dd9b9fc3c_MeditatingDoodle%201.png" />
          <img src="https://cdn.prod.website-files.com/64cb213a923ec66dd9b9fb7b/64cb213a923ec66dd9b9fc2c_circus.png"/>
        </motion.div>
      </div>
    </section>
  )
}

