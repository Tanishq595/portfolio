"use client"

import { useEffect, useRef } from "react"

export default function FloatingCodeSymbols() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Code symbols to use
    const symbols = [
      "{",
      "}",
      "(",
      ")",
      "[",
      "]",
      "<>",
      "</>",
      ";",
      "=",
      "=>",
      "&&",
      "||",
      "++",
      "--",
      "!=",
      "==",
      "===",
      "!==",
    ]

    // Create symbols at random intervals
    const createSymbol = () => {
      const symbol = document.createElement("div")
      symbol.classList.add("code-symbol-float")
      symbol.innerText = symbols[Math.floor(Math.random() * symbols.length)]

      // Random position across the width of the screen
      const posX = Math.random() * 100
      symbol.style.left = `${posX}%`

      // Start from bottom of the screen
      symbol.style.bottom = "0"

      // Random size
      const size = Math.random() * 14 + 10
      symbol.style.fontSize = `${size}px`

      // Random opacity (very low)
      const opacity = Math.random() * 0.06 + 0.04
      symbol.style.opacity = opacity.toString()

      // Add to container
      container.appendChild(symbol)

      // Remove after animation completes
      setTimeout(() => {
        if (container.contains(symbol)) {
          container.removeChild(symbol)
        }
      }, 15000) // Match with CSS animation duration
    }

    // Create symbols at random intervals
    const interval = setInterval(() => {
      // Only create a new symbol 30% of the time to keep it sparse
      if (Math.random() < 0.3) {
        createSymbol()
      }
    }, 1000)

    // Initial symbols
    for (let i = 0; i < 10; i++) {
      createSymbol()
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0" />
}
