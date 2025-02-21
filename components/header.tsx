"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import LogoPic from "../public/logo.png"

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 md:px-20 px-2 py-4 flex flex-wrap justify-between items-center bg-white bg-opacity-70" >
      <Link href="/" className="flex items-center gap-3 px-2">
        <Image
          src={LogoPic}
          alt="New Gaia Collective"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-2xl font-bold text-accent-coral hover:text-primary transition-colors">New Gaia Collective</span>
      </Link>
      <nav className="flex flex-col sm:flex-row" >
        <motion.a
          href="/fellowship"
          className="text-primary text-xl font-medium px-4 py-4 hover:text-accent-coral transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Fellowship
        </motion.a>
        <motion.a
          href="/vision"
          className="text-primary text-xl font-medium px-4 py-4 hover:text-accent-coral transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          The Vision
        </motion.a>
      </nav>
    </header>
  )
}

