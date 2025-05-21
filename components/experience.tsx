"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, Building, MapPin, Award, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const workExperience = [
    {
      title: "Web Programming & Application Development Intern",
      company: "Hong Kong Institute for Advanced Study",
      location: "Hong Kong",
      period: "July 2024 - Present",
      description:
        "Assist with website creation, web revamping UAT project, implemented UAT in Content Management System (CMS) and setting up the red hat linux servers with Apache, MySQL and MongoDB configuration.",
      skills: ["Linux", "HTML/CSS", "PHP","MySQL", "Javascript"],
    },
    {
      title: "Frontend Web Developer",
      company: "Seth Biotech Ltd.",
      location: "Hong Kong",
      period: "June 2024 - August 2024",
      description:
        "Developed and maintained multiple web applications for clients across various industries. Implemented CI/CD pipelines and improved development workflows.",
      skills: ["Wordpress", "HTML/CSS", "Javascript", "Machine Learning"],
    },
    {
      title: "Research Assistant",
      company: "City University of Hong Kong",
      location: "Hong Kong",
      period: "March 2024 - June 2024",
      description:
        "Built responsive websites and web applications for clients. Collaborated with designers to implement pixel-perfect UI designs.",
      skills: ["Data Scraping"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "City University of Hong Kong",
      location: "Hong Kong",
      period: "2023 - 2027",
      description: "Specialized in Software Engineering with focus on web technologies and distributed systems.",
    },
    {
      degree: "High School",
      institution: "City Montessori School",
      location: "Lucknow, India",
      period: "2023",
      description: "Graduated with honors. Participated in multiple hackathons and coding competitions.",
    },
  ]

  const certifications = [
    "AWS Certified Developer Associate",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "React Native Specialist",
    "Certified Scrum Master",
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Experience & <span className="text-emerald-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise in software
            development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-emerald-500 mr-3" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-emerald-500/30 pl-8 ml-3 space-y-10">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative"
                >
                  <motion.div
                    className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-gray-900 border-2 border-emerald-500 flex items-center justify-center"
                    whileInView={{
                      scale: [1, 1.5, 1],
                      borderColor: ["#10b981", "#14b8a6", "#10b981"],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.2 * index,
                      repeat: 0,
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-emerald-500"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap justify-between items-start mb-2">
                          <h4 className="text-xl font-bold">{job.title}</h4>
                          <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20 pulse">
                            <Calendar className="mr-1 h-3 w-3" /> {job.period}
                          </Badge>
                        </div>

                        <div className="flex items-center text-gray-400 mb-4">
                          <Building className="h-4 w-4 mr-1" />
                          <span className="mr-4">{job.company}</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>

                        <p className="text-gray-400 mb-4">{job.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              <Badge
                                variant="outline"
                                className="bg-gray-800 text-emerald-400 border-gray-700 hover:border-emerald-500/50 transition-colors duration-300"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-emerald-500 mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative border-l-2 border-emerald-500/30 pl-8 ml-3 space-y-10 mb-16">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative"
                >
                  <div className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-gray-900 border-2 border-emerald-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>

                  <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20">
                          <Calendar className="mr-1 h-3 w-3" /> {edu.period}
                        </Badge>
                      </div>

                      <div className="flex items-center text-gray-400 mb-4">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span className="mr-4">{edu.institution}</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{edu.location}</span>
                      </div>

                      <p className="text-gray-400">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center mb-8">
              <Award className="h-6 w-6 text-emerald-500 mr-3" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        <span>{cert}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
