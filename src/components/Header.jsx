import { useState } from 'react'
import { Moon, Sun, Menu } from 'react-feather'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AM</span>
          </div>
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Atindra Mohan
          </span>
        </div>
        
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="relative py-2 px-1 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 font-semibold tracking-wider uppercase text-xs after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('skills')}
              className="relative py-2 px-1 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 font-semibold tracking-wider uppercase text-xs after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className="relative py-2 px-1 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 font-semibold tracking-wider uppercase text-xs after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('experience')}
              className="relative py-2 px-1 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 font-semibold tracking-wider uppercase text-xs after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Experience
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative py-2 px-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transition-all duration-300 font-semibold tracking-wider uppercase text-xs rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact
            </button>
          </li>
        </ul>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
          
          <button 
            className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300" 
            aria-label="Open Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-3 px-4 rounded-xl text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 font-semibold tracking-wide uppercase text-sm"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left py-3 px-4 rounded-xl text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 font-semibold tracking-wide uppercase text-sm"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left py-3 px-4 rounded-xl text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 font-semibold tracking-wide uppercase text-sm"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left py-3 px-4 rounded-xl text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 font-semibold tracking-wide uppercase text-sm"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transition-all duration-300 font-semibold tracking-wide uppercase text-sm rounded-xl shadow-lg"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header 