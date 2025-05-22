"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-emerald-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <div className="w-full h-80 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg overflow-hidden relative">
{/*                 <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-xl">
                  <Code className="w-16 h-16 mr-2" />
                  Tanishq Agarwal
                </div> */}
                <img
    src="/Tanishq2.jpg" 
    alt="Tanishq Agarwal Profile"
    className="w-full h-full object-cover"
  />

                {/* Add animated code particles */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-xs font-mono text-black"
                      initial={{
                        x: Math.random() * 100,
                        y: -20,
                        opacity: Math.random() * 0.5 + 0.5,
                      }}
                      animate={{
                        y: 400,
                        rotate: Math.random() * 360,
                      }}
                      transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        ease: "linear",
                        delay: Math.random() * 5,
                      }}
                    >
                      {Math.random() > 0.5 ? "{}" : "</>"}
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                className="absolute -bottom-5 -right-5 w-40 h-40 bg-black border-4 border-emerald-500 rounded-lg overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-500">2+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-emerald-500">&lt;</span> Software Developer{" "}
              <span className="text-emerald-500">/&gt;</span>
            </h3>

            <p className="text-gray-400 mb-6">
              Hello! I'm Tanishq, a passionate software developer with expertise in building exceptional digital
              experiences. I enjoy creating elegant solutions to complex problems.
            </p>

            <p className="text-gray-400 mb-6">
              My journey in programming began during my college years, and I've been hooked ever since. I specialize in
              full-stack development, with a focus on modern JavaScript frameworks and cloud technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group">
                <CardContent className="p-4 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="font-mono text-sm relative z-10">
                    <span className="text-emerald-500">const</span> <span className="text-purple-400">name</span>{" "}
                    <span className="text-white">=</span> <span className="text-yellow-300">'Tanishq Agarwal'</span>;
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group">
                <CardContent className="p-4 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="font-mono text-sm relative z-10">
                    <span className="text-emerald-500">const</span> <span className="text-purple-400">location</span>{" "}
                    <span className="text-white">=</span> <span className="text-yellow-300">'Hong Kong'</span>;
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group">
                <CardContent className="p-4 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="font-mono text-sm relative z-10">
                    <span className="text-emerald-500">const</span> <span className="text-purple-400">email</span>{" "}
                    <span className="text-white">=</span> <span className="text-yellow-300">'tanishqagarwal595@gmail.com'</span>
                    ;
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group">
                <CardContent className="p-4 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="font-mono text-sm relative z-10">
                    <span className="text-emerald-500">const</span> <span className="text-purple-400">status</span>{" "}
                    <span className="text-white">=</span> <span className="text-yellow-300">'Available for hire'</span>;
                  </div>
                </CardContent>
              </Card>
            </div>

{/*             <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">Download Resume</Button> */}

<Button 
  className="bg-emerald-500 hover:bg-emerald-600 text-black"
  onClick={() => {
    const link = document.createElement('a');
    link.href = 'https://raw.githubusercontent.com/Tanishq595/portfolio/main/resumes/Resume_Tanishq_Agarwal.pdf';
    link.download = 'Tanishq_Agarwal_Resume.pdf';
    link.click();
  }}
>
  Download Resume
</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
