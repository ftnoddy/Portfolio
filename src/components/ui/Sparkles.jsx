import { useEffect, useRef } from 'react'

const Sparkles = ({ 
  id = 'sparkles',
  className = '',
  background = 'transparent',
  particleSize = 4,
  minSize = 2,
  maxSize = 6,
  speed = 0.5,
  particleColor = '#06b6d4',
  particleDensity = 0.5
}) => {
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const container = canvas.parentElement
    if (!container) return

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      // Add padding around the text for sparkles to appear
      const padding = 100
      canvas.width = rect.width + padding * 2
      canvas.height = rect.height + padding * 2
      canvas.style.width = `${rect.width + padding * 2}px`
      canvas.style.height = `${rect.height + padding * 2}px`
      canvas.style.left = `${-padding}px`
      canvas.style.top = `${-padding}px`
    }

    // Create particles
    const createParticles = () => {
      const numParticles = Math.floor((canvas.width * canvas.height) / 8000 * particleDensity)
      particlesRef.current = []
      
      for (let i = 0; i < numParticles; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: minSize + Math.random() * (maxSize - minSize),
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          opacity: Math.random() * 0.6 + 0.4,
        })
      }
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    resizeCanvas()
    createParticles()
    window.addEventListener('resize', handleResize)

    const animate = () => {
      ctx.fillStyle = background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with glow
        ctx.save()
        ctx.shadowBlur = 15
        ctx.shadowColor = particleColor
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      ctx.globalAlpha = 1
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [background, particleSize, minSize, maxSize, speed, particleColor, particleDensity])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={`absolute ${className}`}
      style={{ 
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  )
}

export default Sparkles

