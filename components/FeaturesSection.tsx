'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, Check, ZoomIn } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useImagePreview } from './ImagePreviewModal'

interface FeatureItem {
  emoji?: string
  title: string
  subtitle?: string
}

interface Feature {
  number: string
  icon: string
  title: string
  description: string
  image: string
  imageAlt: string
  items: FeatureItem[]
  itemStyle: 'check' | 'emoji'
}

const features: Feature[] = [
  {
    number: '01',
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
    title: 'Capture & Understand Every Word',
    description: 'Transform conversations into actionable insights with AI-powered real-time transcription and speaker identification.',
    image: '/images/screenshots/listen&analyzelive.png',
    imageAlt: 'Listen & Analyze Live',
    items: [
      { title: 'Real-time transcription with 95%+ accuracy' },
      { title: 'System audio capture for meetings & videos' },
      { title: 'Speaker identification & live fact-checking' },
    ],
    itemStyle: 'check',
  },
  {
    number: '02',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Master Skills with AI Simulation',
    description: 'Practice with adaptive AI scenarios designed to sharpen your communication and strategy skills.',
    image: '/images/screenshots/debateWithAi.png',
    imageAlt: 'AI Training Modes',
    items: [
      { emoji: '🎯', title: 'Interrogation & Sales Modes', subtitle: 'Master questioning and negotiation' },
      { emoji: '📖', title: 'Story & Custom Scenarios', subtitle: 'Interactive learning experiences' },
      { emoji: '🤖', title: 'Adaptive AI Opponents', subtitle: 'Challenge that grows with you' },
    ],
    itemStyle: 'emoji',
  },
  {
    number: '03',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    title: 'Detect Manipulation & Persuasion Tactics',
    description: 'Real-time analysis identifies persuasion techniques, logical fallacies, and manipulation patterns in any conversation.',
    image: '/images/screenshots/listen&analyze2.png',
    imageAlt: 'Decode Mode',
    items: [
      { emoji: '🕵️', title: 'Persuasion Techniques', subtitle: 'Social proof, scarcity, authority detection' },
      { emoji: '🚨', title: 'Logical Fallacies', subtitle: 'Identifies flawed reasoning patterns' },
      { emoji: '💬', title: 'Emotional Manipulation', subtitle: 'Pattern recognition and instant alerts' },
    ],
    itemStyle: 'emoji',
  },
  {
    number: '04',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Real-Time Collaborative Analysis',
    description: 'Connect with partners for live debates and discussions with real-time AI analysis for both participants.',
    image: '/images/screenshots/p2pRoomCreation.png',
    imageAlt: 'P2P Debate Mode',
    items: [
      { title: 'WebRTC P2P audio streaming' },
      { title: 'Synchronized transcription & chat' },
      { title: 'Live analysis and scoring for both users' },
    ],
    itemStyle: 'check',
  },
  {
    number: '05',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    title: 'Your Personal Knowledge Base',
    description: 'Every session saved automatically with complete transcripts, timestamps, and AI analysis.',
    image: '/images/screenshots/categoryWiseHistory.png',
    imageAlt: 'Analysis Hub - Category History',
    items: [
      { title: 'Complete transcripts with timestamps' },
      { title: 'Category-based organization & tagging' },
      { title: 'Powerful search across all conversations' },
    ],
    itemStyle: 'check',
  },
  {
    number: '06',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'Real-Time Fact Verification',
    description: "Verify claims as they're spoken with instant fact-checking and source citations.",
    image: '/images/screenshots/fact.png',
    imageAlt: 'Smart Live Facts',
    items: [
      { emoji: '✅', title: 'Verified Claims', subtitle: 'With citations and sources' },
      { emoji: '❌', title: 'False Statements', subtitle: 'Instant misinformation flagging' },
      { emoji: '⚠️', title: 'Unverified Claims', subtitle: 'Caution on questionable statements' },
    ],
    itemStyle: 'emoji',
  },
]

const AUTOPLAY_INTERVAL = 5000

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '55%' : '-55%',
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] as const },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '55%' : '-55%',
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] as const },
  }),
}

export default function FeaturesSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const { openPreview } = useImagePreview()

  const go = useCallback((index: number, dir: number) => {
    setDirection(dir)
    setCurrent(index)
    setProgress(0)
  }, [])

  const prev = useCallback(() => {
    const idx = (current - 1 + features.length) % features.length
    go(idx, -1)
  }, [current, go])

  const next = useCallback(() => {
    const idx = (current + 1) % features.length
    go(idx, 1)
  }, [current, go])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % features.length)
      setProgress(0)
    }, AUTOPLAY_INTERVAL)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused, current])

  // Progress bar
  useEffect(() => {
    if (paused) return
    setProgress(0)
    const step = 100 / (AUTOPLAY_INTERVAL / 50)
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100))
    }, 50)
    return () => {
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [paused, current])

  const feature = features[current]

  return (
    <section id="features" className="relative py-20 lg:py-32 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' as const, bounce: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-foreground">
            Powerful Features for Every Need
            {/* <span className="text-gradient-animate">Every Need</span> */}
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground">
            From real-time transcription to AI training modes, Cortify provides everything you need to master communication.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev button — left side */}
          <button
            onClick={prev}
            aria-label="Previous feature"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Next button — right side */}
          <button
            onClick={next}
            aria-label="Next feature"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Slide area */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <Card className="border-border bg-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-12 min-h-[480px]">

                      {/* Content side */}
                      <div className="lg:col-span-5 flex flex-col justify-center gap-5 p-8 lg:p-10">
                        {/* Counter + Badge */}
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-black text-muted-foreground/15 leading-none select-none">
                            {feature.number}
                          </span>
                          <Badge variant="outline" className="gap-1.5 text-xs font-semibold uppercase tracking-wide">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                            </svg>
                            Feature {feature.number}
                          </Badge>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold leading-snug sm:text-2xl text-foreground">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {feature.description}
                        </p>

                        {/* Items */}
                        <ul className="space-y-3 mt-1">
                          {feature.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              {feature.itemStyle === 'check' ? (
                                <>
                                  <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-muted border border-border">
                                    <Check className="w-3 h-3 text-foreground" />
                                  </span>
                                  <span className="text-sm text-muted-foreground">{item.title}</span>
                                </>
                              ) : (
                                <>
                                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-muted border border-border text-base">
                                    {item.emoji}
                                  </span>
                                  <div>
                                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                                    {item.subtitle && (
                                      <div className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</div>
                                    )}
                                  </div>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Image side */}
                      <div className="lg:col-span-7 relative bg-muted/30 border-t lg:border-t-0 lg:border-l border-border overflow-hidden group">
                        <button
                          onClick={() => openPreview(feature.image, feature.imageAlt)}
                          className="absolute inset-0 w-full h-full cursor-zoom-in"
                          aria-label={`Preview ${feature.imageAlt}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={feature.image}
                            alt={feature.imageAlt}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                            style={{ minHeight: '280px' }}
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                          {/* Zoom hint */}
                          <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/80 border border-border backdrop-blur-sm text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                            <ZoomIn className="w-3.5 h-3.5" />
                            Click to preview
                          </div>
                        </button>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          {/* <div className="mt-1 h-0.5 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary/60 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div> */}

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > current ? 1 : -1)}
                aria-label={`Go to feature ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-6 h-2 bg-foreground'
                    : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
