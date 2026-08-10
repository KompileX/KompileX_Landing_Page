'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
  radius: number
  scatterX?: number
  scatterY?: number
  isDisplaced?: boolean
}

interface ParticleTextCanvasProps {
  text: string
  className?: string
}

export default function ParticleTextCanvas({ text, className = '' }: ParticleTextCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const hasAnimatedInRef = useRef(false)
  const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const mouseRef = useRef<{ x: number; y: number; prevX: number; prevY: number; isHovered: boolean; isMoving: boolean }>({
    x: -9999,
    y: -9999,
    prevX: -9999,
    prevY: -9999,
    isHovered: false,
    isMoving: false,
  })

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let width = 0
    let height = 0

    const scatterParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        // Spread particles across the entire width and height of the section
        p.x = Math.random() * width
        p.y = Math.random() * height
        p.vx = (Math.random() - 0.5) * 4
        p.vy = (Math.random() - 0.5) * 4
        p.isDisplaced = false
      }
    }

    const initParticles = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height

      if (width === 0 || height === 0) return

      const margin = 150
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = (width + margin * 2) * dpr
      canvas.height = (height + margin * 2) * dpr
      canvas.style.left = `-${margin}px`
      canvas.style.top = `-${margin}px`
      canvas.style.width = `${width + margin * 2}px`
      canvas.style.height = `${height + margin * 2}px`
      ctx.scale(dpr, dpr)

      // Offscreen canvas with extra padding to avoid clipping top/bottom/sides of text characters
      const padding = 60
      const offscreen = document.createElement('canvas')
      offscreen.width = width + padding * 2
      offscreen.height = height + padding * 2
      const offCtx = offscreen.getContext('2d')
      if (!offCtx) return

      // Dynamically calculate font size so that the text spans exactly the container width or height without clipping
      const baseFontSize = 100
      offCtx.font = `900 ${baseFontSize}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`
      const measuredWidth = offCtx.measureText(text).width
      // Cap height for bold sans-serif is approximately 75% of the font size
      const measuredHeight = baseFontSize * 0.75

      const maxFontSizeByWidth = (width * 0.98 / measuredWidth) * baseFontSize
      const maxFontSizeByHeight = (height * 0.92 / measuredHeight) * baseFontSize
      const targetFontSize = Math.min(maxFontSizeByWidth, maxFontSizeByHeight)

      offCtx.font = `900 ${targetFontSize}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`
      offCtx.textAlign = 'center'
      offCtx.textBaseline = 'middle'
      offCtx.fillStyle = '#ffffff'
      offCtx.fillText(text, offscreen.width / 2, offscreen.height / 2)

      const imgData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height)
      const data = imgData.data

      particles = []
      // Step size determines dot density (lower step = smaller & denser pixels)
      const step = width < 640 ? 3 : 4

      for (let y = 0; y < offscreen.height; y += step) {
        for (let x = 0; x < offscreen.width; x += step) {
          const index = (y * offscreen.width + x) * 4
          const alpha = data[index + 3]

          if (alpha > 128) {
            // Map coordinates back to the original container's coordinate system
            const originX = x - padding
            const originY = y - padding

            // Spread pixels across both horizontal and vertical dimensions of the container area
            const initX = Math.random() * width
            const initY = Math.random() * height
            particles.push({
              x: initX,
              y: initY,
              originX,
              originY,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              radius: step > 3 ? 1.3 : 1.0,
              isDisplaced: false,
            })
          }
        }
      }
      hasAnimatedInRef.current = false
    }

    initParticles()

    const handleResize = () => {
      initParticles()
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    let isIntersectingRef = false

    // Trigger assembly once when wordmark canvas section scrolls into view
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersectingRef = entry.isIntersecting
          if (entry.isIntersecting) {
            if (!hasAnimatedInRef.current) {
              hasAnimatedInRef.current = true
            }
            // Resume rendering when entering viewport
            if (!animationFrameId) {
              render()
            }
          }
        })
      },
      { threshold: 0.1 }
    )
    intersectionObserver.observe(container)

    // Physics animation loop
    const render = () => {
      if (!isIntersectingRef) {
        animationFrameId = 0
        return
      }

      const margin = 150
      ctx.clearRect(0, 0, width + margin * 2, height + margin * 2)

      const mouse = mouseRef.current
      const mouseX = mouse.x
      const mouseY = mouse.y
      const prevX = mouse.prevX
      const prevY = mouse.prevY
      const isHovered = mouse.isHovered
      const triggerRadius = width < 640 ? 25 : 35
      const portionRadius = width < 640 ? 55 : 75
      const particleColor = isLight ? '#0f172a' : '#ffffff'

      const abX = mouseX - prevX
      const abY = mouseY - prevY
      const abLenSq = abX * abX + abY * abY

      ctx.fillStyle = particleColor

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (isHovered && mouseX >= 0) {
          let nearX = mouseX
          let nearY = mouseY

          if (abLenSq > 0) {
            const t = Math.max(0, Math.min(1, ((p.x - prevX) * abX + (p.y - prevY) * abY) / abLenSq))
            nearX = prevX + t * abX
            nearY = prevY + t * abY
          }

          const dx = p.x - nearX
          const dy = p.y - nearY
          const dist = Math.hypot(dx, dy)

          if (dist < triggerRadius) {
            const randomAngle = Math.random() * Math.PI * 2
            const longDist = Math.random() * 70 + 80 // Moderate distance scatter (80px to 150px)
            p.scatterX = p.originX + Math.cos(randomAngle) * longDist
            p.scatterY = p.originY + Math.sin(randomAngle) * longDist
            p.isDisplaced = true
          }
        }

        if (p.isDisplaced) {
          const distToMouse = Math.hypot(p.originX - mouseX, p.originY - mouseY)

          // While mouse is active over this specific PORTION and moving, hold at long distance
          if (isHovered && mouse.isMoving && distToMouse < portionRadius) {
            p.x += (p.scatterX! - p.x) * 0.15
            p.y += (p.scatterY! - p.y) * 0.15
          } else {
            // Hover out of this PORTION: smoothly float back home to text position
            p.x += (p.originX - p.x) * 0.05
            p.y += (p.originY - p.y) * 0.05

            if (Math.hypot(p.x - p.originX, p.y - p.originY) < 1.0) {
              p.isDisplaced = false
            }
          }
        } else if (hasAnimatedInRef.current) {
          p.x += (p.originX - p.x) * 0.05
          p.y += (p.originY - p.y) * 0.05
        } else {
          p.x += p.vx
          p.y += p.vy
        }

        // Velocity damping
        p.vx *= 0.70
        p.vy *= 0.70

        // Render fine pixel circle offset by margin
        ctx.beginPath()
        ctx.arc(p.x + margin, p.y + margin, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current)
      }
    }
  }, [text, isLight])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const newX = e.clientX - rect.left
    const newY = e.clientY - rect.top
    const prev = mouseRef.current

    if (mouseTimeoutRef.current) {
      clearTimeout(mouseTimeoutRef.current)
    }

    mouseRef.current = {
      x: newX,
      y: newY,
      prevX: prev.isHovered ? prev.x : newX,
      prevY: prev.isHovered ? prev.y : newY,
      isHovered: true,
      isMoving: true,
    }

    mouseTimeoutRef.current = setTimeout(() => {
      mouseRef.current.isMoving = false
    }, 150)
  }

  const handleMouseLeave = () => {
    if (mouseTimeoutRef.current) {
      clearTimeout(mouseTimeoutRef.current)
    }
    mouseRef.current = {
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      isHovered: false,
      isMoving: false,
    }
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-[120px] sm:h-[180px] md:h-[240px] lg:h-[200px] 2xl:h-[280px] select-none cursor-pointer ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  )
}
