"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Braces,
  FileCode,
  Github,
  Database,
  Server,
  Code2,
  Terminal,
  Cpu,
  Cloud,
  Globe,
  Hash,
  Layers,
} from "lucide-react"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

type FloatingIcon = {
  id: number
  icon: JSX.Element
  x: number
  y: number
  size: number
  rotation: number
  duration: number
  delay: number
}

// Programming language and tech stack text icons
const techNames = [
  "JS",
  "TS",
  "HTML",
  "CSS",
  "React",
  "Node",
  "SQL",
  "Git",
  "API",
  "Vue",
  "PHP",
  "C++",
  "Java",
  "Python",
  "Ruby",
  "Go",
  "AWS",
  "</>",
  "{}",
  "()",
  "[]",
]

export default function TechIconsBackground() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    // Generate icons based on screen size
    const generateIcons = () => {
      const lucideIcons = [
        <Braces key="braces" />,
        <FileCode key="filecode" />,
        <Github key="github" />,
        <Database key="database" />,
        <Server key="server" />,
        <Code2 key="code2" />,
        <Terminal key="terminal" />,
        <Cpu key="cpu" />,
        <Cloud key="cloud" />,
        <Globe key="globe" />,
        <Hash key="hash" />,
        <Layers key="layers" />,
      ]

      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const iconCount = Math.min(40, Math.floor((windowWidth * windowHeight) / 40000))

      const newIcons: FloatingIcon[] = []

      for (let i = 0; i < iconCount; i++) {
        // Randomly choose between Lucide icon or tech name text
        const isLucideIcon = Math.random() > 0.5

        let icon
        if (isLucideIcon) {
          const randomIcon = lucideIcons[Math.floor(Math.random() * lucideIcons.length)]
          icon = randomIcon
        } else {
          const randomTech = techNames[Math.floor(Math.random() * techNames.length)]
          icon = <span className="font-mono font-bold">{randomTech}</span>
        }

        newIcons.push({
          id: i,
          icon,
          x: Math.random() * 100, // % of viewport width
          y: Math.random() * 100, // % of viewport height
          size: Math.random() * 20 + 10, // between 10px and 30px
          rotation: Math.random() * 360, // random initial rotation
          duration: Math.random() * 60 + 40, // between 40s and 100s for very slow movement
          delay: Math.random() * 10, // random delay up to 10s
        })
      }

      setIcons(newIcons)
    }

    generateIcons()

    const handleResize = () => {
      generateIcons()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-emerald-500"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            fontSize: `${icon.size}px`,
            opacity: 0.08, // Slightly higher opacity but still very subtle
          }}
          initial={{ rotate: icon.rotation }}
          animate={{
            x: [
              0,
              Math.random() * 40 - 20, // Move randomly within ±20px
              0,
            ],
            y: [
              0,
              Math.random() * 40 - 20, // Move randomly within ±20px
              0,
            ],
            rotate: [
              icon.rotation,
              icon.rotation + (Math.random() > 0.5 ? 20 : -20), // Slight rotation
              icon.rotation,
            ],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {icon.icon}
        </motion.div>
      ))}
    </div>
  )
}
