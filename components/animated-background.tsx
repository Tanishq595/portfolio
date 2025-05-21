"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Terminal,
  Braces,
  FileCode,
  Database,
  Server,
  Cpu,
  GitBranch,
  Hash,
  Brackets,
  Laptop,
  Bug,
  Layers,
} from "lucide-react"

type IconProps = {
  icon: React.ReactNode
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

const programmingIcons = [
  Code,
  Terminal,
  Braces,
  FileCode,
  Database,
  Server,
  Cpu,
  GitBranch,
  Hash,
  Brackets,
  Laptop,
  Bug,
  Layers,
]

export default function AnimatedBackground() {
  const [icons, setIcons] = useState<IconProps[]>([])

  useEffect(() => {
    // Generate random icons for the background
    const generateIcons = () => {
      const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1200
      const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800
      const iconCount = Math.floor((windowWidth * windowHeight) / 70000) // Adjust density based on screen size

      const newIcons: IconProps[] = []

      for (let i = 0; i < iconCount; i++) {
        const IconComponent = programmingIcons[Math.floor(Math.random() * programmingIcons.length)]
        newIcons.push({
          icon: <IconComponent />,
          x: Math.random() * 100, // percentage of screen width
          y: Math.random() * 100, // percentage of screen height
          size: Math.random() * 16 + 8, // random size between 8px and 24px
          duration: Math.random() * 20 + 10, // random duration between 10s and 30s
          delay: Math.random() * 5, // random delay between 0s and 5s
        })
      }

      setIcons(newIcons)
    }

    generateIcons()

    // Regenerate icons on window resize
    const handleResize = () => {
      generateIcons()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-emerald-500"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            opacity: 0.05, // Very low opacity
            width: icon.size,
            height: icon.size,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50, // Random movement in x direction
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50, // Random movement in y direction
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            rotate: [0, Math.random() * 360, 0], // Random rotation
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          {icon.icon}
        </motion.div>
      ))}
    </div>
  )
}
