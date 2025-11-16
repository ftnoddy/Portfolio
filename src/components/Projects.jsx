import { useEffect, useRef } from 'react'
import { GitHub, ExternalLink, Star, GitBranch, Eye } from 'react-feather'
import ilyfImage from '../assets/ilyf.png'
import damImage from '../assets/dam_ilyf.jpg'

const Projects = () => {
  const projectsRef = useRef(null)

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'International Lingayat Youth Forum (ILYF)',
      description: 'Full-stack website for International Lingayat Youth Forum - a complete web platform built from scratch with custom frontend and backend. Features responsive design, user management, and dynamic content management.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Responsive Design'],
      githubLink: '#',
      liveLink: 'https://ilyf.co.in',
      stars: 0,
      forks: 0,
      status: 'Completed',
      category: 'Full-Stack Web App',
      image: ilyfImage,
    },
    {
      title: 'Digital Asset Management (DAM) System',
      description: 'Cloud-based Digital Asset Management system for organizing, storing, and managing digital files with granular access controls. Features AWS S3 multi-bucket architecture, custom ACL system with role-based permissions (READ_ONLY, READ_WRITE, DELETE, FULL_ACCESS), real-time file preview, folder hierarchy management, and comprehensive audit logging.',
      technologies: ['AWS S3', 'Node.js/TypeScript', 'React', 'MongoDB', 'AWS Secrets Manager', 'ACL System'],
      githubLink: '#',
      liveLink: 'https://dam.ilyf.co.in',
      stars: 0,
      forks: 0,
      status: 'Completed',
      category: 'Cloud Storage System',
      image: damImage,
    },
    {
      title: 'E-Commerce API Platform',
      description: 'Robust REST API backend for an e-commerce platform with advanced features like product filtering, order management, payment integration, and real-time inventory tracking.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'AWS S3', 'Stripe'],
      githubLink: '#',
      liveLink: '#',
      stars: 124,
      forks: 45,
      status: 'Completed',
      category: 'Backend API',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'WebSocket-powered backend for a live chat app with authentication, message encryption, user presence tracking, and file sharing capabilities.',
      technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Redis', 'JWT', 'Cloudinary'],
      githubLink: '#',
      liveLink: '#',
      stars: 89,
      forks: 32,
      status: 'Active',
      category: 'WebSocket',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=200&fit=crop',
    },
    {
      title: 'Serverless Image Processor',
      description: 'AWS Lambda-based backend for on-the-fly image resizing, optimization, and CDN delivery with automatic format conversion and quality adjustment.',
      technologies: ['AWS Lambda', 'Node.js', 'S3', 'CloudFront', 'Sharp'],
      githubLink: '#',
      liveLink: '#',
      stars: 76,
      forks: 23,
      status: 'Completed',
      category: 'Serverless',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    },
    {
      title: 'Social Media Analytics API',
      description: 'Comprehensive analytics API for social media platforms with sentiment analysis, engagement tracking, and automated report generation.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'TensorFlow', 'Docker'],
      githubLink: '#',
      liveLink: '#',
      stars: 156,
      forks: 67,
      status: 'In Progress',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
    },
    {
      title: 'Task Management System',
      description: 'Full-featured project management API with team collaboration, time tracking, file attachments, and advanced reporting capabilities.',
      technologies: ['Node.js', 'GraphQL', 'MongoDB', 'Redis', 'AWS', 'Docker'],
      githubLink: '#',
      liveLink: '#',
      stars: 92,
      forks: 38,
      status: 'Completed',
      category: 'GraphQL API',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
    },
    {
      title: 'IoT Data Collection Hub',
      description: 'Scalable backend system for collecting, processing, and analyzing data from IoT devices with real-time dashboards and alerts.',
      technologies: ['Node.js', 'InfluxDB', 'MQTT', 'Grafana', 'Kubernetes'],
      githubLink: '#',
      liveLink: '#',
      stars: 67,
      forks: 19,
      status: 'Active',
      category: 'IoT Backend',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Active': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'In Progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <div ref={projectsRef} className="fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in backend development and system architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-2 py-1 rounded-md text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm mb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                
                {/* GitHub Stats */}
                {(project.stars > 0 || project.forks > 0) && (
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                    {project.stars > 0 && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                    )}
                    {project.forks > 0 && (
                      <div className="flex items-center gap-1">
                        <GitBranch className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-lg text-xs font-semibold border border-cyan-200 dark:border-cyan-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubLink !== '#' && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex-1 inline-flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold py-2 px-4 rounded-lg border border-slate-300 dark:border-slate-600 hover:border-cyan-400 transition-all duration-300"
                    >
                      <GitHub className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" /> 
                      Code
                    </a>
                  )}
                  {project.liveLink !== '#' && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" /> 
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/ftnoddy" 
            target="_blank" 
            rel="noopener"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Eye className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects 