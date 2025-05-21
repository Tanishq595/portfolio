"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Terminal } from "lucide-react"

export default function InitialLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return prevProgress + 5
      })
    }, 150)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-8">
              <Code2 className="w-20 h-20 text-emerald-500" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-2 -right-2 bg-emerald-500 text-black text-xs font-bold px-2 py-1 rounded"
              >
                DEV
              </motion.div>
            </div>

            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-emerald-500"
              />
            </div>

            <div className="flex items-center text-emerald-500 font-mono">
              <Terminal className="w-4 h-4 mr-2" />
              <span>Loading {progress}%</span>
            </div>

            <div className="mt-4 font-mono text-xs text-gray-500 max-w-xs text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="typing-effect"
              >
                {`> import { TanishqAgarwal } from './developer'`}
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-10 font-mono text-xs text-gray-600">
            © {new Date().getFullYear()} Tanishq Agarwal
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
