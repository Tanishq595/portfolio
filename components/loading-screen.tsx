"use client"

import { Loader2 } from "lucide-react"

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <Loader2 className="h-10 w-10 text-emerald-500 animate-spin" />
      <p className="mt-4 text-emerald-500 font-mono">Loading content...</p>
    </div>
  )
}
