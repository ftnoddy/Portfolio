import { useState, useEffect, useRef } from 'react'
import { Linkedin, GitHub, Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'react-feather'

const Contact = () => {
  const contactRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(''), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'atindramohandas353@gmail.com',
      link: 'mailto:atindramohandas353@gmail.com',
      description: 'Send me an email anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7477592029',
      link: 'tel:+917477592029',
      description: 'Call me for urgent matters'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kolkata, India',
      link: '#',
      description: 'Available for remote work'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/atindra-mohan-das-6128ab1b4/',
      color: 'from-blue-500 to-blue-700',
      followers: '500+'
    },
    {
      icon: GitHub,
      name: 'GitHub',
      url: 'https://github.com/ftnoddy',
      color: 'from-gray-700 to-gray-900',
      followers: '200+'
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      url: '#',
      color: 'from-indigo-500 to-purple-600',
      followers: 'atindra#1234'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div ref={contactRef} className="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              Let's Work <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life with cutting-edge technology.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full p-3">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Send Message</h3>
                    <p className="text-slate-600 dark:text-slate-400">I'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Project Collaboration"
                      className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project requirements..."
                      className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-3 rounded-xl">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-xl">
                      ❌ Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-800 dark:text-slate-200">{info.title}</h4>
                          <p className="text-cyan-600 dark:text-cyan-400 font-medium break-words overflow-hidden">{info.value}</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{info.description}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold mb-6">Connect with Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <div className={`bg-gradient-to-r ${social.color} rounded-full p-3 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 dark:text-slate-200">{social.name}</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{social.followers}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-300">Available for Work</h3>
                </div>
                <p className="text-green-700 dark:text-green-400 text-sm mb-4">
                  I'm currently open to new opportunities and exciting projects. Let's build something amazing together!
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <Calendar className="w-4 h-4" />
                  <span>Response time: Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 