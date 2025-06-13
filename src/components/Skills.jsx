import { useEffect, useRef } from 'react'
import { Server, Box, Database, BarChart2, Link, GitBranch, Cloud, Zap, Code, Shield, Layers, Globe } from 'react-feather'

const Skills = () => {
  const skillsRef = useRef(null)

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: 'Node.js', icon: Server, experience: '3+ yrs', level: 90, color: 'from-green-400 to-green-600' },
    { name: 'Express.js', icon: Box, experience: '3+ yrs', level: 85, color: 'from-gray-400 to-gray-600' },
    { name: 'MongoDB', icon: Database, experience: '3+ yrs', level: 80, color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', icon: BarChart2, experience: '2 yrs', level: 75, color: 'from-blue-400 to-blue-600' },
    { name: 'REST APIs', icon: Link, experience: '3+ yrs', level: 95, color: 'from-cyan-400 to-cyan-600' },
    { name: 'GraphQL', icon: Layers, experience: '1.5 yrs', level: 70, color: 'from-pink-400 to-pink-600' },
    { name: 'Git & GitHub', icon: GitBranch, experience: '4+ yrs', level: 90, color: 'from-orange-400 to-orange-600' },
    { name: 'AWS Cloud', icon: Cloud, experience: '2+ yrs', level: 80, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Docker', icon: Box, experience: '2 yrs', level: 75, color: 'from-blue-500 to-blue-700' },
    { name: 'Redis', icon: Zap, experience: '1.5 yrs', level: 70, color: 'from-red-400 to-red-600' },
    { name: 'TypeScript', icon: Code, experience: '2 yrs', level: 80, color: 'from-blue-600 to-blue-800' },
    { name: 'JWT Auth', icon: Shield, experience: '3+ yrs', level: 85, color: 'from-purple-400 to-purple-600' },
  ]

  const categories = [
    {
      title: '🚀 Backend Technologies',
      skills: skills.slice(0, 4)
    },
    {
      title: '🔧 Tools & DevOps',
      skills: skills.slice(4, 8)
    },
    {
      title: '💻 Additional Skills',
      skills: skills.slice(8, 12)
    }
  ]

  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <div ref={skillsRef} className="fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Constantly learning and improving. Here's my current tech stack and proficiency levels.
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-center">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div 
                    key={index} 
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`bg-gradient-to-r ${skill.color} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{skill.experience}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{skill.level}%</span>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl">
            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">50+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Learning Mode</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 