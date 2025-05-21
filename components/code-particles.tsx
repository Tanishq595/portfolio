"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  text: string
  opacity: number
  color: string
}

export default function CodeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Code symbols to use for particles
    const codeSymbols = [
      "{",
      "}",
      "(",
      ")",
      "[",
      "]",
      "<",
      ">",
      ";",
      "=",
      "+",
      "-",
      "*",
      "/",
      "&&",
      "||",
      "=>",
      "function",
      "const",
      "let",
      "var",
      "if",
      "else",
      "for",
      "while",
      "return",
    ]

    // Colors for particles
    const colors = ["#10b981", "#14b8a6", "#0d9488", "#0f766e", "#0891b2"]

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(30, Math.floor(window.innerWidth / 50)) // Adjust based on screen size

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 14 + 8, // Size between 8 and 22
        speedX: (Math.random() - 0.5) * 0.5, // Speed between -0.25 and 0.25
        speedY: (Math.random() - 0.5) * 0.5,
        text: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        opacity: Math.random() * 0.07 + 0.03, // Opacity between 0.03 and 0.1
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Move particle
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX
        }

        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY
        }

        // Draw particle
        ctx.font = `${particle.size}px monospace`
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fillText(particle.text, particle.x, particle.y)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
