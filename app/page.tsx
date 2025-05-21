import { Suspense } from "react"
import LoadingScreen from "@/components/loading-screen"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingCodeSymbols from "@/components/floating-code-symbols"

export default function Home() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <main className="min-h-screen bg-black text-white">
        <FloatingCodeSymbols />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </Suspense>
  )
}
