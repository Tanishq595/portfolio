"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Layout, Server, Smartphone, Cpu, Cloud, GitBranch, Terminal } from "lucide-react"

export default function Skills() {
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 60 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 },
    { name: "SQL", level: 50 },
    { name: "Git", level: 85 },
    { name: "Linux", level: 65 },
  ]

  const categories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-10 w-10 text-emerald-500" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS/JS"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-10 w-10 text-emerald-500" />,
      skills: ["Node.js", "Python","REST APIs"],
    },
    {
      title: "Database",
      icon: <Database className="h-10 w-10 text-emerald-500" />,
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-10 w-10 text-emerald-500" />,
      skills: ["React Native","Mobile UI/UX"],
    },
    {
      title: "DevOps",
      icon: <Cloud className="h-10 w-10 text-emerald-500" />,
      skills: [ "AWS", "Vercel"],
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="h-10 w-10 text-emerald-500" />,
      skills: ["Git", "GitHub", "VS Code", "Figma"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            My <span className="text-emerald-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's a snapshot of my technical
            expertise and what I bring to the table.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Code2 className="mr-2 text-emerald-500" />
                Technical Proficiency
              </h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-emerald-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.1 * index,
                          ease: "easeOut",
                        }}
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2.5 rounded-full relative shine"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg blur opacity-30"></div>
            <div className="relative bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Cpu className="mr-2 text-emerald-500" />
                Programming Languages
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {["JavaScript", "TypeScript", "Python", "Java", "C++", "PHP", "Go", "Ruby", "Swift"].map(
                  (lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.05 * index }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)",
                        y: -5,
                      }}
                      className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
                    >
                      <div className="font-mono text-sm text-emerald-500">{lang}</div>
                    </motion.div>
                  ),
                )}
              </div>

              <h3 className="text-xl font-bold my-6 flex items-center">
                <GitBranch className="mr-2 text-emerald-500" />
                Version Control
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {["Git", "GitHub", "GitLab", "Bitbucket", "SVN", "CI/CD"].map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <div className="font-mono text-sm text-emerald-500">{tool}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-lg font-bold ml-3">{category.title}</h3>
                  </div>

                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
