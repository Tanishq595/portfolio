"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowDown, Terminal, Code, Sparkles, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const photoRef = useRef(null)
  const isInView = useInView(photoRef, { once: false })
  const controls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const matrix = "abcdefghijklmnopqrstuvwxyz123456789@#$%^&*()*&^%"

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0f0"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Handle mouse movement for the 3D photo effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      // Calculate mouse position as percentage of window
      const newX = (clientX / windowWidth - 0.5) * 2 // -1 to 1
      const newY = (clientY / windowHeight - 0.5) * 2 // -1 to 1

      setMousePosition({ x: newX, y: newY })

      // Smoother cursor following for the floating elements
      setCursorPosition((prev) => ({
        x: prev.x + (clientX - prev.x) * 0.1,
        y: prev.y + (clientY - prev.y) * 0.1,
      }))
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Floating elements that follow cursor with delay
  const floatingElements = [
    { icon: <Code className="h-6 w-6 text-emerald-500" />, delay: 0.1, offsetX: -100, offsetY: -80 },
    { icon: <Terminal className="h-5 w-5 text-emerald-400" />, delay: 0.2, offsetX: 100, offsetY: 80 },
    { icon: <Cpu className="h-4 w-4 text-emerald-300" />, delay: 0.15, offsetX: 80, offsetY: -60 },
    { icon: <Sparkles className="h-3 w-3 text-emerald-200" />, delay: 0.25, offsetX: -60, offsetY: 100 },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20"></canvas>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 bg-emerald-500/20 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20">
                <Terminal className="mr-1 h-3 w-3" /> Full Stack Developer
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 relative">
                Tanishq Agarwal
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
            >
              <div className="flex items-center">
                <span className="mr-2">I build</span>
                <span className="font-mono text-emerald-500 typing-animation">innovative web applications</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-400 mb-8 max-w-2xl"
            >
              Passionate software developer specializing in creating exceptional digital experiences. Focused on
              building accessible, human-centered products with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
{/*               <Button
                className="bg-emerald-500 hover:bg-emerald-600 text-black relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">View My Work</span>
              </Button>
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-0 bg-emerald-500/10 group-hover:w-full transition-all duration-300" />
                <span className="relative z-10">Contact Me</span>
              </Button> */}

             <Button
  className="bg-emerald-500 hover:bg-emerald-600 text-black relative overflow-hidden group"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    window.location.href = '#projects';
  }}
>
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <span className="relative z-10">View My Work</span>
</Button>


<Button
  variant="outline"
  className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 relative overflow-hidden group"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.location.href = '#contact'}
>
  <span className="absolute inset-0 w-0 bg-emerald-500/10 group-hover:w-full transition-all duration-300" />
  <span className="relative z-10">Contact Me</span>
</Button>
            </motion.div>
          </motion.div>

          {/* Interactive Photo Section */}
          <motion.div
            ref={photoRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[500px] perspective-1000">
              {/* Floating elements that follow cursor */}
              {floatingElements.map((element, index) => (
                <motion.div
                  key={index}
                  className="absolute z-10"
                  initial={{ x: element.offsetX, y: element.offsetY, opacity: 0 }}
                  animate={{
                    x: cursorPosition.x * 20 + element.offsetX,
                    y: cursorPosition.y * 20 + element.offsetY,
                    opacity: 0.8,
                    rotate: cursorPosition.x * 10,
                  }}
                  transition={{ delay: element.delay, type: "spring", stiffness: 50 }}
                >
                  {element.icon}
                </motion.div>
              ))}

              {/* Main photo with 3D effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                animate={{
                  rotateY: mousePosition.x * 10,
                  rotateX: -mousePosition.y * 10,
                }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent z-10" />

                {/* Placeholder for profile photo - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
{/*                       <div className="w-64 h-64 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-black text-4xl font-bold">
                        TA
                      </div> */}
                      <img
      src="/Tanishq.jpeg" 
      alt="Tanishq Agarwal Profile"
      className="w-full h-full object-cover rounded-2xl"
    />
                    </div>

                    {/* Code-like overlay effect */}
                    <div className="absolute inset-0 overflow-hidden opacity-30">
                      <pre className="text-xs text-emerald-500 leading-tight p-4">
                        {`function Developer() {
  const [skills, setSkills] = useState([
    'JavaScript', 'React', 'Node.js',
    'TypeScript', 'Next.js'
  ]);
  
  const projects = useProjects();
  const experience = useExperience();
  
  return (
    <Portfolio
      name="Tanishq Agarwal"
      role="Full Stack Developer"
      skills={skills}
      projects={projects}
      experience={experience}
    />
  );
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Glowing orbs */}
              <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-emerald-500/20 blur-xl" />
              <div className="absolute -bottom-10 -left-10 w-16 h-16 rounded-full bg-teal-500/20 blur-xl" />

              {/* Tech stack icons floating around */}
              <motion.div
                className="absolute -top-5 right-20 bg-gray-800 p-2 rounded-lg shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <div className="text-xs font-mono text-emerald-500">React</div>
              </motion.div>

              <motion.div
                className="absolute top-20 -right-5 bg-gray-800 p-2 rounded-lg shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <div className="text-xs font-mono text-emerald-500">Node.js</div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-10 bg-gray-800 p-2 rounded-lg shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                <div className="text-xs font-mono text-emerald-500">TypeScript</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-emerald-500" />
      </motion.div>
    </section>
  )
}
