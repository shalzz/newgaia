import { Familjen_Grotesk as Cabinet_Grotesk } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const cabinet = Cabinet_Grotesk({
  subsets: ["latin"],
  variable: "--font-cabinet-grotesk",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cabinet.variable}>
      <head>
        <link rel="icon" href="https://cdn.prod.website-files.com/64cb213a923ec66dd9b9fb7b/64cb709bf6721528f69ba85a_logo%203-favicon.png" sizes="any" />
      </head>
      <body className="bg-background font-sans">{children}</body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  generator: 'v0.dev',
  title: "New Gaia Collective",
  description: "We aim is to empower human creativity and use it as the means to foster the evolution of human civilization."
};
