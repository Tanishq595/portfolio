"use client"
import { ArrowUp, Code, Github, Linkedin, Mail, Twitter, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Code className="h-6 w-6 text-emerald-500" />
              <span className="font-bold text-xl">
                <span className="text-emerald-500">&lt;</span>
                Tanishq
                <span className="text-emerald-500">/&gt;</span>
              </span>
            </Link>

            <p className="text-gray-400 mb-6 max-w-md">
              A passionate software developer specializing in creating exceptional digital experiences. Let's work
              together to bring your ideas to life.
            </p>

            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-emerald-500/10 hover:text-emerald-500"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-emerald-500/10 hover:text-emerald-500"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-emerald-500/10 hover:text-emerald-500"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-emerald-500/10 hover:text-emerald-500"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-emerald-500" />
                tanishqagarwal595@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-emerald-500" />
                Hong Kong
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Tanishq Agarwal. All rights reserved.</p>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
