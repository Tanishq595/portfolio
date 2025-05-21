// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent } from "@/components/ui/card"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Form submission logic would go here
//     console.log(formData)
//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     })
//     // Show success message
//     alert("Message sent successfully!")
//   }

//   return (
//     <section id="contact" className="py-20 bg-black">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold mb-4">
//             Get In <span className="text-emerald-500">Touch</span>
//           </h2>
//           <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me through any
//             of the channels below.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

//             <div className="space-y-6 mb-8">
//               <motion.div
//                 className="flex items-start"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//                 whileHover={{ x: 5 }}
//               >
//                 <motion.div
//                   className="bg-emerald-500/10 p-3 rounded-lg mr-4"
//                   whileHover={{
//                     scale: 1.1,
//                     backgroundColor: "rgba(16, 185, 129, 0.2)",
//                   }}
//                 >
//                   <Mail className="h-6 w-6 text-emerald-500" />
//                 </motion.div>
//                 <div>
//                   <h4 className="font-bold mb-1">Email</h4>
//                   <p className="text-gray-400">tanishqagarwal595@gmail.com</p>
//                 </div>
//               </motion.div>

//               <div className="flex items-start">
//                 <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
//                   <Phone className="h-6 w-6 text-emerald-500" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold mb-1">Phone</h4>
//                   <p className="text-gray-400">+852 5962 7786</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
//                   <MapPin className="h-6 w-6 text-emerald-500" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold mb-1">Location</h4>
//                   <p className="text-gray-400">Kowloon Tong, Hong Kong</p>
//                 </div>
//               </div>
//             </div>

//             <h3 className="text-2xl font-bold mb-6">Follow Me</h3>

//             <div className="flex space-x-4">
//               <a href="http://github.com/Tanishq595" className="bg-gray-900 p-3 rounded-lg hover:bg-emerald-500/10 transition-colors">
//                 <Github className="h-6 w-6 text-emerald-500" />
//               </a>
//               <a href="https://www.linkedin.com/in/tanishqagarwal595/" className="bg-gray-900 p-3 rounded-lg hover:bg-emerald-500/10 transition-colors">
//                 <Linkedin className="h-6 w-6 text-emerald-500" />
//               </a>
//               <a href="https://x.com/tanishq596" className="bg-gray-900 p-3 rounded-lg hover:bg-emerald-500/10 transition-colors">
//                 <Twitter className="h-6 w-6 text-emerald-500" />
//               </a>
//             </div>

// {/*             <div className="mt-10">
//               <Card className="bg-gray-900 border-gray-800 overflow-hidden">
//                 <CardContent className="p-0">
//                   <div className="aspect-video w-full bg-gray-800 flex items-center justify-center">
//                     <MapPin className="h-10 w-10 text-emerald-500" />
//                     <span className="ml-2 text-lg">Map Placeholder</span>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div> */}


//             <div className="mt-10">
//   <Card className="bg-gray-900 border-gray-800 overflow-hidden">
//     <CardContent className="p-0">
//       <div className="relative aspect-video w-full">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.439205608908!2d114.17014507556202!3d22.337039141562265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404073400f3ef35%3A0xeb61704ffb0ba959!2sCity%20University%20of%20Hong%20Kong%20(CityU)!5e0!3m2!1sen!2sin!4v1747827412027!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           className="absolute inset-0"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />
//         {/* Optional dark overlay */}
//         <div className="absolute inset-0 bg-black/20 pointer-events-none" />
//       </div>
//     </CardContent>
//   </Card>
// </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <Card className="bg-gray-900 border-gray-800 overflow-hidden relative">
//               <motion.div
//                 className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg opacity-30"
//                 animate={{
//                   opacity: [0.2, 0.3, 0.2],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Number.POSITIVE_INFINITY,
//                   repeatType: "reverse",
//                 }}
//               />
//               <CardContent className="p-6 relative z-10">
//                 <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label htmlFor="name" className="text-sm font-medium">
//                         Your Name
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="John Doe"
//                         required
//                         className="bg-gray-800 border-gray-700"
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="email" className="text-sm font-medium">
//                         Your Email
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="john@example.com"
//                         required
//                         className="bg-gray-800 border-gray-700"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="subject" className="text-sm font-medium">
//                       Subject
//                     </label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Project Inquiry"
//                       required
//                       className="bg-gray-800 border-gray-700"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="message" className="text-sm font-medium">
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Hello, I'd like to talk about..."
//                       required
//                       className="min-h-[150px] bg-gray-800 border-gray-700"
//                     />
//                   </div>

//                   <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                     <Button
//                       type="submit"
//                       className="w-full bg-emerald-500 hover:bg-emerald-600 text-black relative overflow-hidden group"
//                     >
//                       <span className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500 ease-out" />
//                       <motion.span
//                         className="absolute inset-0 w-full h-full flex items-center justify-center"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <Send className="mr-2 h-4 w-4" />
//                         Send Message
//                       </motion.span>
//                     </Button>
//                   </motion.div>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import emailjs from "@emailjs/browser" // Import EmailJS

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSending, setIsSending] = useState(false) // Track sending state
  const [error, setError] = useState<string | null>(null) // Track errors

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setError(null)

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        "service_klgbl9i", // Your Service ID
        "template_gayz3ky", // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Rx0PwHjKULPtxMqjf" // Replace with your EmailJS public key
      )

      console.log("Email sent successfully:", response.status, response.text)
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      alert("Message sent successfully!")
    } catch (err) {
      console.error("Failed to send email:", err)
      setError("Failed to send message. Please try again later.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me through any
            of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="bg-emerald-500/10 p-3 rounded-lg mr-4"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                  }}
                >
                  <Mail className="h-6 w-6 text-emerald-500" />
                </motion.div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-400">tanishqagarwal595@gmail.com</p>
                </div>
              </motion.div>

              <div className="flex items-start">
                <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-400">+852 5962 7786</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-400">Kowloon Tong, Hong Kong</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Follow Me</h3>

            <div className="flex space-x-4">
              <a href="http://github.com/Tanishq595" className="bg-gray-900 p-3 rounded-lg hover:bg-emerald-500/10 transition-colors">
                <Github className="h-6 w-6 text-emerald-500" />
              </a>
              <a href="https://www.linkedin.com/in/tanishqagarwal595/" className="bg-gray-900 p-3 rounded-lg hover:bg-emerald-500/10 transition-colors">
                <Linkedin className="h-6 w-6 text-emerald-500" />
              </a>
              <a href="https://x.com/tanishq596" className="bg-gray-900 p-3 rounded-lg hover:bg-emerald-500/10 transition-colors">
                <Twitter className="h-6 w-6 text-emerald-500" />
              </a>
            </div>

            <div className="mt-10">
              <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.439205608908!2d114.17014507556202!3d22.337039141562265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404073400f3ef35%3A0xeb61704ffb0ba959!2sCity%20University%20of%20Hong%20Kong%20(CityU)!5e0!3m2!1sen!2sin!4v1747827412027!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      className="absolute inset-0"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-900 border-gray-800 overflow-hidden relative">
              <motion.div
                className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg opacity-30"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <CardContent className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                {error && (
                  <div className="text-red-500 text-sm mb-4">{error}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-gray-800 border-gray-700"
                        disabled={isSending}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-gray-800 border-gray-700"
                        disabled={isSending}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="bg-gray-800 border-gray-700"
                      disabled={isSending}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      required
                      className="min-h-[150px] bg-gray-800 border-gray-700"
                      disabled={isSending}
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-black relative overflow-hidden group"
                      disabled={isSending}
                    >
                      <span className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500 ease-out" />
                      <motion.span
                        className="absolute inset-0 w-full h-full flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {isSending ? "Sending..." : "Send Message"}
                      </motion.span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
