"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-20 py-4 flex justify-between items-center bg-white" >
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="https://sjc.microlink.io/CWchOYx_1htklH11A8yJ_-4XFkeuOodt4qB9V2ysTeKYuZ-1hAl3nAwcqS0V-sQrjyqspzzOu7A-1j7I3UdIIQ.jpeg"
          alt="New Gaia Collective"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-2xl font-bold text-primary">New Gaia Collective</span>
      </Link>
      <nav>
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

