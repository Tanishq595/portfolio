import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import InitialLoader from "@/components/initial-loader"
import TechIconsBackground from "@/components/tech-icons-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tanishq Agarwal | Software Developer",
  description: "Portfolio website of Tanishq Agarwal, Software Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <InitialLoader />
          <TechIconsBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
