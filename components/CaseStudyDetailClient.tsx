'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Layers,
  Calendar,
  Code2,
  ExternalLink,
} from 'lucide-react'
import { getCaseStudyById } from '@/lib/case-studies-data'
import { Badge } from '@/components/ui/badge'

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

export default function CaseStudyDetailClient({ id }: { id: string }) {
  const study = getCaseStudyById(id)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground px-4">
        <h1 className="text-3xl font-bold">Case Study Not Found</h1>
        <p className="text-sm text-muted-foreground">The requested case study does not exist or has been removed.</p>
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-primary transition"
        >
          <ArrowLeft className="size-4" />
          Back to Case Studies
        </Link>
      </div>
    )
  }

  const slides = study.images && study.images.length > 0 ? study.images : [study.images[0]]

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (idx: number) => {
    setDirection(idx > currentSlide ? 1 : -1)
    setCurrentSlide(idx)
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground pb-20">
      {/* Top Bar Navigation - Direct link to #case-studies */}
      <div className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="flex size-7 items-center justify-center rounded-full border border-border bg-muted/50 group-hover:border-primary group-hover:text-primary transition-colors">
              <ArrowLeft className="size-3.5" />
            </span>
            Back to Case Studies
          </Link>

          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-[11px] uppercase font-mono font-medium tracking-wider">
              {study.category === 'web' ? 'WEB APP' : 'MOBILE APP'}
            </Badge>
            <span className="text-xs font-mono text-muted-foreground/80">{study.timeline}</span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-8">
        {/* Header Title & Tagline */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="inline-block px-2.5 py-0.5 rounded border border-primary/30 bg-primary/10 text-[10px] font-mono uppercase tracking-widest text-primary font-semibold">
              {study.category === 'web' ? 'WEB APP' : 'MOBILE APP'}
            </span>
            <span className="text-xs font-mono text-muted-foreground">{study.timeline}</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground/90 max-w-3xl leading-relaxed font-normal">
            {study.tagline}
          </p>
        </div>

        {/* Carousel Section with Horizontal Swipe Animation */}
        <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-card shadow-2xl group">
          {/* Main Image Viewport */}
          <div className="relative h-[320px] sm:h-[480px] lg:h-[600px] w-full bg-muted/30 overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={slides[currentSlide]}
                  alt={`${study.title} slide ${currentSlide + 1}`}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlays */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* Top Right Counter Pill */}
            <div className="absolute top-4 right-4 z-10">
              <span className="rounded-full border border-white/20 bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-mono text-white/90 shadow-md">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>

            {/* Left/Right Arrow Navigation Buttons */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white transition hover:bg-black/90 hover:scale-105 active:scale-95"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white transition hover:bg-black/90 hover:scale-105 active:scale-95"
                  aria-label="Next slide"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}

            {/* Bottom Dot Pagination */}
            {slides.length > 1 && (
              <div className="absolute bottom-4 inset-x-0 z-20 flex justify-center items-center gap-1.5 pointer-events-auto">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? 'w-6 bg-primary'
                        : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Information Layout: 2 Columns */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 mt-12">
          {/* Left Column: Project Overview & Key Features */}
          <div className="flex flex-col gap-8">
            {/* Overview Card */}
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 backdrop-blur-md flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full bg-primary" />
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Project Overview
                </h2>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {study.overview}
              </p>

              {/* Key Features List */}
              <div className="border-t border-border/60 pt-6 flex flex-col gap-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground">
                  KEY FEATURES
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {study.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar info cards */}
          <div className="flex flex-col gap-6">
            {/* Project Info Box */}
            <div className="rounded-3xl border border-border bg-card p-6 backdrop-blur-md flex flex-col gap-5">
              <h3 className="text-base font-bold tracking-tight text-foreground">
                Project Info
              </h3>

              <div className="flex flex-col gap-4">
                {/* Client */}
                <div className="flex items-start gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg border border-border bg-muted/50 text-primary shrink-0">
                    <Briefcase className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">CLIENT</span>
                    <span className="text-xs font-semibold text-foreground">{study.client}</span>
                  </div>
                </div>

                {/* Category */}
                <div className="flex items-start gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg border border-border bg-muted/50 text-primary shrink-0">
                    <Layers className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">CATEGORY</span>
                    <span className="text-xs font-semibold text-foreground">{study.categoryLabel}</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-start gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg border border-border bg-muted/50 text-primary shrink-0">
                    <Calendar className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">TIMELINE</span>
                    <span className="text-xs font-semibold text-foreground">{study.timeline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Used Box */}
            <div className="rounded-3xl border border-border bg-card p-6 backdrop-blur-md flex flex-col gap-4">
              <h3 className="text-base font-bold tracking-tight text-foreground">
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links Box matching screenshot buttons */}
            <div className="rounded-3xl border border-border bg-card p-6 backdrop-blur-md flex flex-col gap-4">
              <h3 className="text-base font-bold tracking-tight text-foreground">
                Project Links
              </h3>

              <div className="flex flex-col gap-3">
                {study.sourceUrl && (
                  <a
                    href={study.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-border/80 bg-muted/40 px-4 py-3 text-xs font-semibold text-foreground transition hover:bg-muted hover:border-foreground"
                  >
                    <Code2 className="size-4" />
                    <span>View Source Code</span>
                  </a>
                )}

                {study.demoUrl && (
                  <a
                    href={study.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ExternalLink className="size-4" />
                    <span>Launch Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
