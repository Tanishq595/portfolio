"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      title: "Crypto Web Application",
      description:
        "A full-featured crypto application with payment integration, wallet connection and creation, and minting LST tokens features.",
      image: "/crypto.png?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Wagmi"],
      github: "https://github.com/Tanishq595/BifrostSample1",
      
    },
    // {
    //   title: "Task Management App",
    //   description:
    //     "A collaborative task management application with real-time updates and team collaboration features.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["Next.js", "TypeScript", "Firebase", "Tailwind", "web"],
    //   github: "#",
    //   demo: "#",
    // },
    // {
    //   title: "Fitness Tracker",
    //   description: "A mobile application for tracking workouts, nutrition, and health metrics with data visualization.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["React Native", "GraphQL", "mobile"],
    //   github: "#",
    //   demo: "#",
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "A weather forecasting application with interactive maps and real-time weather data.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["JavaScript", "APIs", "CSS", "web"],
    //   github: "#",
    //   demo: "#",
    // },
    // {
    //   title: "Inventory Management System",
    //   description: "A comprehensive inventory management system for small businesses with barcode scanning.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["React", "Node.js", "PostgreSQL", "web"],
    //   github: "#",
    //   demo: "#",
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description: "An analytics dashboard for social media managers with data visualization and reporting.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["Vue.js", "D3.js", "web"],
    //   github: "#",
    //   demo: "#",
    // },
  ]

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((project) => project.tags.includes(activeTab))

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            My <span className="text-emerald-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development that showcases my skills
            and passion for building innovative solutions.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-gray-900">
              <TabsTrigger
                value="all"
                onClick={() => setActiveTab("all")}
                className={
                  activeTab === "all" ? "data-[state=active]:bg-emerald-500 data-[state=active]:text-black" : ""
                }
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="web"
                onClick={() => setActiveTab("web")}
                className={
                  activeTab === "web" ? "data-[state=active]:bg-emerald-500 data-[state=active]:text-black" : ""
                }
              >
                Web Apps
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                onClick={() => setActiveTab("mobile")}
                className={
                  activeTab === "mobile" ? "data-[state=active]:bg-emerald-500 data-[state=active]:text-black" : ""
                }
              >
                Mobile Apps
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <div className="relative overflow-hidden group">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-full">
                    <div className="flex space-x-4">
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Button size="icon" variant="secondary" asChild className="backdrop-blur-sm bg-white/10">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Button size="icon" variant="secondary" asChild className="backdrop-blur-sm bg-white/10">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col relative z-10 group">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0"
                  />

                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags
                      .filter((tag) => tag !== "web" && tag !== "mobile")
                      .map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * tagIndex }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="outline"
                            className="bg-gray-800 text-emerald-400 border-gray-700 transition-all duration-300 hover:bg-emerald-500/20"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
            <Github className="mr-2 h-4 w-4" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
