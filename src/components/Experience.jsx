import { useEffect, useRef } from 'react'
import { Briefcase, Award, Calendar, MapPin, TrendingUp, Users, Code } from 'react-feather'

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
      icon: Briefcase,
      achievements: [
        'Building scalable backend systems for an Online Proctoring and Role-Based Management System with AI integration',
        'Leading backend development of a comprehensive Recruitment and Placement Management System using the MERN stack',
        'Contributing to the design and optimization of APIs and database structures to support high-traffic, real-time features',
        'Implementing AI-powered proctoring solutions with advanced monitoring capabilities',
        'Developing role-based access control systems for enterprise-level applications',
        'Optimizing database queries and API performance for real-time data processing'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'React', 'AI Integration', 'Real-time APIs'],
      teamSize: '6 members',
      projects: '2 major systems'
    },
    {
      title: 'Full Stack Developer',
      company: 'Iwebgenics Pvt. Ltd.',
      location: 'Kolkata, Sector V',
      period: 'Mar 2024 – Present',
      type: 'Full-time',
      industry: 'IT Company',
      icon: Code,
      achievements: [
        'Independently developed and deployed multiple full-stack applications using the MERN stack',
        'Utilized Redux for efficient state management and scalable front-end architecture',
        'Hands-on experience in deploying MERN applications to AWS EC2',
        'Ensuring performance, availability, and scalability of deployed applications',
        'Implemented responsive UI/UX designs with modern React patterns',
        'Established CI/CD pipelines for automated deployment and testing'
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'AWS EC2'],
      teamSize: '4 members',
      projects: '5+ websites'
    },
    {
      title: 'Jr. Blockchain Backend Developer – Node.js',
      company: 'Code Partner',
      location: 'Remote',
      period: 'Jan 2023 – Jan 2024',
      type: 'Full-time',
      industry: 'Blockchain-Based Company',
      icon: Award,
      achievements: [
        'Developed and maintained blockchain-based applications using Node.js',
        'Integrated smart contracts with DApps for seamless Web3 functionality',
        'Focused on ensuring secure and efficient transaction handling',
        'Implemented robust data storage mechanisms for blockchain applications',
        'Gained foundational experience in blockchain technology and smart contract deployment',
        'Worked with Web3 environments and decentralized application architectures'
      ],
      technologies: ['Node.js', 'Blockchain', 'Smart Contracts', 'Web3', 'DApps', 'Solidity'],
      teamSize: '3 members',
      projects: '4 blockchain apps'
    }
  ]

  const achievements = [
    {
      icon: TrendingUp,
      title: 'AI Integration Expert',
      description: 'Successfully integrated AI-powered features in proctoring systems with real-time monitoring'
    },
    {
      icon: Users,
      title: 'Full-Stack Expertise',
      description: 'Proficient in MERN stack with experience in both frontend and backend development'
    },
    {
      icon: Award,
      title: 'Blockchain Pioneer',
      description: 'Early adopter of Web3 technologies with hands-on smart contract development experience'
    }
  ]

  return (
    <section id="experience" className="container mx-auto px-4 py-20">
      <div ref={experienceRef} className="fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My journey in full-stack and backend development, from blockchain innovation to AI-powered systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600"></div>

          {workExperience.map((job, index) => {
            const IconComponent = job.icon
            return (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <IconComponent className="w-3 h-3 text-white" />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {job.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                          {job.company}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{job.industry}</p>
                      </div>
                      <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                        🟢 {job.type}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{job.teamSize}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Team Size</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{job.projects}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Projects</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-lg text-xs font-semibold border border-cyan-200 dark:border-cyan-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Education & Certifications */}
        <div className="mt-20 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Education & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-green-400 to-emerald-600 rounded-full p-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-lg">B.Tech in Computer Science</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">National Institute of Technology</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">2017 – 2021 | CGPA: 8.5/10</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Specialized in Data Structures, Algorithms, Database Management, and Software Engineering.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-orange-400 to-red-600 rounded-full p-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-lg">AWS Certified Developer</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Amazon Web Services</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">2023 | Associate Level</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Certified in developing and maintaining applications on the AWS platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 