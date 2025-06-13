import { useEffect, useRef } from 'react'
import { Briefcase, Award, Calendar, MapPin, TrendingUp, Users, Code, Zap, Star, Monitor } from 'react-feather'

const Experience = () => {
  const experienceRef = useRef(null)

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const workExperience = [
    {
      title: 'Software Engineer – Backend',
      company: 'ELCARREIRA TECHNOLOGIES',
      location: 'Remote',
      period: 'Jul 2024 – Present',
      type: 'Full-time',
      industry: 'IT Services & Consulting',
      icon: Monitor,
      color: 'from-purple-500 to-pink-500',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      achievements: [
        'Building AI-powered proctoring systems with real-time monitoring',
        'Leading MERN stack development for recruitment platforms',
        'Optimizing APIs for high-traffic applications'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'React', 'AI Integration'],
      teamSize: '6',
      projects: '2'
    },
    {
      title: 'Full Stack Developer',
      company: 'Iwebgenics Pvt. Ltd.',
      location: 'Kolkata, Sector V',
      period: 'Mar 2024 – Present',
      type: 'Full-time',
      industry: 'IT Company',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      achievements: [
        'Developed multiple MERN applications with Redux',
        'Deployed applications to AWS EC2 with CI/CD',
        'Implemented responsive UI/UX designs'
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'AWS EC2'],
      teamSize: '4',
      projects: '5+'
    },
    {
      title: 'Jr. Blockchain Backend Developer',
      company: 'Code Partner',
      location: 'Remote',
      period: 'Jan 2023 – Jan 2024',
      type: 'Full-time',
      industry: 'Blockchain Company',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      bgPattern: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      achievements: [
        'Developed blockchain applications with Node.js',
        'Integrated smart contracts with DApps',
        'Worked with Web3 environments and decentralized apps'
      ],
      technologies: ['Node.js', 'Blockchain', 'Smart Contracts', 'Web3', 'Solidity'],
      teamSize: '3',
      projects: '4'
    }
  ]

  const achievements = [
    {
      icon: TrendingUp,
      title: 'AI Integration',
      description: 'Real-time monitoring systems',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Users,
      title: 'Full-Stack',
      description: 'MERN expertise',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Award,
      title: 'Blockchain',
      description: 'Web3 pioneer',
      color: 'from-green-400 to-teal-500'
    }
  ]

  return (
    <section id="experience" className="container mx-auto px-4 py-16">
      <div ref={experienceRef} className="fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From blockchain innovation to AI-powered systems - my evolution in tech
          </p>
        </div>

        {/* Compact Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {workExperience.map((job, index) => {
            const IconComponent = job.icon
            return (
              <div 
                key={index} 
                className={`${job.bgPattern} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-white/20 dark:border-slate-700/50 group relative overflow-hidden`}
              >
                {/* Animated background elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>
                
                {/* Header */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-r ${job.color} rounded-xl p-3 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      🟢 {job.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {job.title}
                  </h3>
                  <h4 className={`text-base font-semibold bg-gradient-to-r ${job.color} bg-clip-text text-transparent mb-3`}>
                    {job.company}
                  </h4>

                  {/* Quick Info */}
                  <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-1 bg-white/50 dark:bg-slate-800/50 px-2 py-1 rounded-lg">
                      <Calendar className="w-3 h-3" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/50 dark:bg-slate-800/50 px-2 py-1 rounded-lg">
                      <MapPin className="w-3 h-3" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                      <div className={`text-xl font-bold bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>{job.teamSize}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Team</div>
                    </div>
                    <div className="text-center p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                      <div className={`text-xl font-bold bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>{job.projects}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Projects</div>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <ul className="space-y-2 mb-4">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {job.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`bg-gradient-to-r ${job.color} text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-md hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                    {job.technologies.length > 3 && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 px-2 py-1">
                        +{job.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Compact Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 group">
                  <div className={`bg-gradient-to-r ${achievement.color} rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Compact Education */}
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-center">Education & Learning</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-600 rounded-full p-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">B.Tech ECE</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Netaji Subhash Engineering College</div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">CGPA: 8.17/10</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Electronics & Communication Engineering with focus on digital systems and signal processing.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-400 to-red-600 rounded-full p-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Full Stack Bootcamp</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Udemy - Dr. Angela Yu</div>
                    <div className="text-sm font-semibold text-orange-600 dark:text-orange-400">Complete Course</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Comprehensive web development: HTML, CSS, JavaScript, Node.js, React, MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 