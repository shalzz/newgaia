"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"

interface FloatingShapesProps {
  variant?: "hero" | "startup" | "web3"
}

export function FloatingShapes({ variant = "hero" }: FloatingShapesProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const xTransform = useTransform(springX, (x) => x * 2)
  const yTransform = useTransform(springY, (y) => y * 2)
  const xTransformNeg = useTransform(springX, (x) => x * -1.5)
  const yTransformNeg = useTransform(springY, (y) => y * -1.5)
  const xTransform12 = useTransform(springX, (x) => x * 1.2)
  const yTransform12 = useTransform(springY, (y) => y * 1.2)
  const xTransformNeg2 = useTransform(springX, (x) => x * -2)
  const yTransformNeg2 = useTransform(springY, (y) => y * -2)
  const xTransform18 = useTransform(springX, (x) => x * 1.8)
  const yTransform18 = useTransform(springY, (y) => y * 1.8)
  const xTransform15 = useTransform(springX, (x) => x * 1.5)
  const yTransform15 = useTransform(springY, (y) => y * 1.5)
  const xTransformNeg12 = useTransform(springX, (x) => x * -1.2)
  const yTransformNeg12 = useTransform(springY, (y) => y * -1.2)
  const xTransformNeg15 = useTransform(springX, (x) => x * -1.5)
  const yTransformNeg15 = useTransform(springY, (y) => y * -1.5)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const deltaX = (e.clientX - centerX) / 50
      const deltaY = (e.clientY - centerY) / 50

      mouseX.set(deltaX)
      mouseY.set(deltaY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary"
          style={{
            x: xTransform,
            y: yTransform,
          }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-40 w-24 h-24 rounded-full bg-accent-coral"
          style={{
            x: xTransformNeg,
            y: yTransformNeg,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-accent-green rounded-full"
          style={{
            x: xTransform12,
            y: yTransform12,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-60 right-60 w-16 h-16 bg-accent-yellow rounded-full"
          style={{
            x: xTransformNeg2,
            y: yTransformNeg2,
          }}
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-20 right-96 w-32 h-32 bg-accent-red rounded-[50%_50%_50%_0%]"
          style={{
            x: xTransform18,
            y: yTransform18,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
    )
  }

  if (variant === "startup") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-10 top-20 w-24 h-24 rounded-full bg-[#8B6F6F]"
          style={{
            x: xTransform15,
            y: yTransform15,
          }}
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-20 bottom-20 w-32 h-32 rounded-full bg-accent-yellow"
          style={{
            x: xTransformNeg12,
            y: yTransformNeg12,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    )
  }

  // Web3 variant
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute right-10 top-20 w-32 h-32 rounded-full border-8 border-accent-coral opacity-50"
        style={{
          x: xTransform18,
          y: yTransform18,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute left-20 bottom-20 w-40 h-40 bg-accent-green rounded-full"
        style={{
          x: xTransformNeg15,
          y: yTransformNeg15,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

