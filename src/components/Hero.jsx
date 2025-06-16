import { useEffect, useRef } from 'react'
import { FileText, Mail, Terminal } from 'react-feather'
import profilePhoto from '../assets/WhatsApp Image 2025-06-12 at 18.28.48.jpeg'
import resumePDF from '../assets/AtindraMohanDasResume.pdf'

const Hero = () => {
  const heroRef = useRef(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resumePDF
    link.download = 'AtindraMohanDasResume.pdf'
    link.click()
  }

  return (
    <section id="about" className="bg-circuit min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-300/15 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center relative z-10">
        <div ref={heroRef} className="w-full md:w-2/3 fade-in">
          <div className="inline-block animate-bounce mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Atindra Mohan
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 font-semibold text-slate-700 dark:text-slate-300">
            🚀 Backend Software Developer
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl mb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            Crafting scalable APIs and backend systems with <span className="text-green-600 font-semibold">Node.js</span> & <span className="text-green-600 font-semibold">MongoDB</span>. 
            Passionate about building robust, high-performance applications that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button 
              onClick={downloadResume}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" /> 
              Download Resume
            </button>
            <button 
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" /> 
              Let's Connect
            </button>
          </div>
          
          <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for work
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              3+ Years Experience
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            {/* Main photo container with enhanced styling */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
              {/* Animated border rings */}
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full border-2 border-blue-400/40 animate-pulse"></div>
              
              {/* Photo */}
              <img 
                src={profilePhoto} 
                alt="Atindra Mohan" 
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-600/20"></div>
            </div>
            
            {/* Enhanced floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-3 shadow-lg animate-bounce">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            
            {/* Tech stack floating badges */}
            <div className="absolute -bottom-2 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse delay-500">
              Node.js
            </div>
            <div className="absolute top-8 -left-8 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse delay-1000">
              MongoDB
            </div>
            <div className="absolute -top-2 left-1/3 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse delay-1500">
              AWS
            </div>
            
            {/* Enhanced floating dots */}
            <span className="absolute w-6 h-6 bg-cyan-300/40 rounded-full left-4 top-12 blur-sm animate-ping"></span>
            <span className="absolute w-4 h-4 bg-blue-100/60 rounded-full right-8 top-8 blur-sm animate-ping delay-700"></span>
            <span className="absolute w-5 h-5 bg-cyan-500/30 rounded-full left-12 bottom-8 blur animate-ping delay-1400"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 