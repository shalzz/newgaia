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
      <body className="bg-background font-sans">{children}</body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
