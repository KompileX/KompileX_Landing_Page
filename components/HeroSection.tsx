'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Mic, FileText, BarChart2, GraduationCap } from 'lucide-react'

const STAR_IMAGE = '/stars.png'

const platforms = [
  {
    name: 'YouTube',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    paths: <path fill="currentColor" className="text-red-500" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />,
  },
  {
    name: 'Zoom',
    viewBox: '0 0 24 24',
    fill: 'none',
    paths: <><rect x="2" y="2" width="20" height="20" rx="5" fill="#2D8CFF" /><path d="M7.4 8.3h6.4a2.1 2.1 0 0 1 2.1 2.1v3.2a2.1 2.1 0 0 1-2.1 2.1H7.4a2.1 2.1 0 0 1-2.1-2.1v-3.2a2.1 2.1 0 0 1 2.1-2.1z" fill="#fff" /><path d="M15.7 10.1l3-1.6v7l-3-1.6v-3.8z" fill="#fff" /></>,
  },
  {
    name: 'Google Meet',
    viewBox: '0 0 24 24',
    fill: 'none',
    paths: <><rect x="4" y="7" width="10" height="10" rx="2" fill="#34A853" /><rect x="6.2" y="9.2" width="5.6" height="5.6" rx="1.2" fill="#fff" /><path d="M14 9.2l5-3v11.6l-5-3v-5.6z" fill="#4285F4" /><rect x="2.2" y="8.4" width="2.8" height="7.2" rx="1" fill="#EA4335" /><rect x="6" y="17" width="6.8" height="2.6" rx="1.3" fill="#FBBC04" /></>,
  },
  {
    name: 'Teams',
    viewBox: '0 0 24 24',
    fill: 'none',
    paths: <><rect x="2" y="5" width="12" height="14" rx="3" fill="#6264A7" /><rect x="10" y="7" width="12" height="12" rx="3" fill="#464EB8" /><circle cx="17" cy="9" r="3" fill="#7B83EB" /><circle cx="18" cy="15" r="3" fill="#8B8CF8" /><path d="M5.5 9h5v2H9v6H7v-6H5.5z" fill="#fff" /></>,
  },
  {
    name: 'Discord',
    viewBox: '0 0 16 16',
    fill: 'currentColor',
    paths: <path fill="currentColor" className="text-indigo-400" d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />,
  },
]

const featureCards = [
  { side: 'left' as const, topClass: 'top-[30%]', xFrom: -40, delay: 0.25, Icon: Mic,            title: 'Real-time Transcription', desc: 'Capture every word with >99% accuracy.' },
  { side: 'left' as const, topClass: 'top-[62%]', xFrom: -40, delay: 0.38, Icon: FileText,       title: 'Meeting Summary',         desc: 'Get concise, actionable recaps instantly.' },
  { side: 'right' as const, topClass: 'top-[30%]', xFrom: 40, delay: 0.30, Icon: BarChart2,      title: 'Insightful Analysis',     desc: 'Analyze sentiment, pace, and key topics.' },
  { side: 'right' as const, topClass: 'top-[62%]', xFrom: 40, delay: 0.43, Icon: GraduationCap,  title: 'Training & Feedback',     desc: 'Receive personalized tips to improve delivery.' },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <>
      {/* ── Hero ── */}
      <motion.section
        ref={sectionRef}
        {...(!isLight && {
          animate: { backgroundPositionX: 2400 },
          transition: { duration: 120, repeat: Number.POSITIVE_INFINITY, ease: 'linear' },
        })}
        className="[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] relative flex h-[492px] items-center overflow-hidden md:h-[800px]"
        style={!isLight ? { backgroundImage: `url(${STAR_IMAGE})`, backgroundPositionY } : { backgroundPositionY }}
      >
        {/* Backgrounds */}
        {!isLight ? (
          <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]" />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-violet-50/60 via-white to-white" />
            <div className="absolute inset-0 bg-[radial-gradient(65%_65%_at_center_40%,rgba(139,92,246,0.10)_0%,rgba(167,139,250,0.05)_55%,transparent_80%)]" />
          </>
        )}

        {/* Planet */}
        {!isLight ? (
          <div
            className="absolute top-1/2 left-1/2 size-64 md:size-96 rounded-full border border-white/20 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"
            style={{ translate: '-50% -50%' }}
          />
        ) : (
          <div
            className="absolute top-1/2 left-1/2 size-44 md:size-72 rounded-full border border-violet-200/50 bg-[radial-gradient(50%_50%_at_30%_25%,white,rgb(221,214,254)_45%,rgb(196,181,253)_72%,rgb(167,139,250))] shadow-[0_0_80px_rgba(139,92,246,0.12),0_0_40px_rgba(139,92,246,0.08)]"
            style={{ translate: '-50% -50%' }}
          />
        )}

        {/* Ring 1 */}
        <motion.div
          animate={{ rotate: '1turn' }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ x: '-50%', y: '-50%' }}
          className={`absolute top-1/2 left-1/2 size-[344px] md:size-[580px] rounded-full border ${isLight ? 'border-violet-300/25' : 'border-white opacity-20'}`}
        >
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-0 size-2 rounded-full ${isLight ? 'bg-violet-400/60' : 'bg-white'}`} />
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 size-2 rounded-full ${isLight ? 'bg-violet-400/60' : 'bg-white'}`} />
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-full inline-flex size-5 items-center justify-center rounded-full border ${isLight ? 'border-violet-300/40' : 'border-white'}`}>
            <div className={`size-2 rounded-full ${isLight ? 'bg-violet-400/70' : 'bg-white'}`} />
          </div>
        </motion.div>

        {/* Ring 2 — dashed */}
        <motion.div
          animate={{ rotate: '-1turn' }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ x: '-50%', y: '-50%' }}
          className={`absolute top-1/2 left-1/2 size-[444px] md:size-[780px] rounded-full border-dashed ${isLight ? 'border border-violet-200/35' : 'border border-white/20'}`}
        />

        {/* Ring 3 */}
        <motion.div
          animate={{ rotate: '1turn' }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          style={{ x: '-50%', y: '-50%' }}
          className={`absolute top-1/2 left-1/2 size-[544px] md:size-[980px] rounded-full border ${isLight ? 'border-violet-200/20' : 'border-white opacity-20'}`}
        >
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-0 size-2 rounded-full ${isLight ? 'bg-violet-300/50' : 'bg-white'}`} />
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-full size-2 rounded-full ${isLight ? 'bg-violet-300/50' : 'bg-white'}`} />
        </motion.div>

        {/* Floating feature cards — desktop only */}
        {featureCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: card.xFrom }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: card.delay, type: 'spring' as const, bounce: 0 }}
            className={`absolute hidden lg:block w-48 xl:w-56 ${card.side === 'left' ? 'left-[18%] xl:left-[20%]' : 'right-[18%] xl:right-[20%]'} ${card.topClass} -translate-y-1/2`}
            style={{ zIndex: 7 }}
          >
            <div className={`rounded-2xl border p-4 backdrop-blur-md ${isLight ? 'bg-white/95 border-border/60 shadow-[0_4px_20px_rgba(139,92,246,0.08),0_1px_4px_rgba(0,0,0,0.05)]' : 'bg-white/5 border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.35)]'}`}>
              <div className={`mb-3 flex items-center justify-center w-8 h-8 rounded-xl ${isLight ? 'bg-violet-50 border border-violet-100/80' : 'bg-white/10 border border-white/10'}`}>
                <card.Icon className={`w-4 h-4 ${isLight ? 'text-violet-500' : 'text-white/70'}`} />
              </div>
              <p className={`text-xs font-bold leading-snug mb-1.5 ${isLight ? 'text-foreground' : 'text-white'}`}>{card.title}</p>
              <p className={`text-[11px] leading-relaxed ${isLight ? 'text-muted-foreground' : 'text-white/45'}`}>{card.desc}</p>
            </div>
          </motion.div>
        ))}

        {/* Center content */}
        <div className="container mx-auto relative z-10 -mt-16 text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${isLight ? 'border-violet-200 bg-violet-50/80 backdrop-blur-sm' : 'border-white/10 bg-white/5'}`}>
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-[#8c45ff] opacity-75 animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-[#8c45ff]" />
              </span>
              <span className={`text-sm font-semibold ${isLight ? 'text-violet-700' : 'text-white/70'}`}>AI Communication Platform</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className={`text-center font-semibold tracking-tighter text-5xl md:text-7xl lg:text-8xl lg:leading-none ${isLight ? 'text-foreground' : 'text-white'}`}>
            Master Every<br />Conversation
          </h1>

          {/* Subtitle */}
          <p className={`mx-auto mt-5 max-w-xl text-center text-lg md:text-xl ${isLight ? 'text-muted-foreground' : 'text-white/70'}`}>
            Real-time AI transcription and analysis for meetings, debates, and training sessions.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="relative cursor-pointer rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-4 py-2.5 text-sm font-medium text-white shadow-[0px_0px_12px_#8c45ff]"
            >
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]" />
              </div>
              <span className="relative">Get Started Free</span>
            </a>

            <a
              href="#demo"
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition ${isLight ? 'border-border bg-white/70 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-foreground/20' : 'border-white/10 text-white/70 hover:border-white/30 hover:text-white'}`}
            >
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </a>
          </div>
        </div>
      </motion.section>

      {/* ── Platform ticker ── */}
      <div className="w-full py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-5">
            <div className="flex-1 md:flex-none">
              <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">Works with your favorite platforms</p>
            </div>
            <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
              <motion.div
                initial={{ x: '-50%' }}
                animate={{ x: 0 }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                className="-translate-x-1/2 flex flex-none gap-14 pr-14"
              >
                {[...platforms, ...platforms].map((p, i) => (
                  <div key={i} className="flex items-center gap-2.5 h-8 whitespace-nowrap">
                    <svg className="h-full w-auto shrink-0 opacity-70" viewBox={p.viewBox} fill={p.fill} xmlns="http://www.w3.org/2000/svg">
                      {p.paths}
                    </svg>
                    <span className="text-sm font-medium text-muted-foreground">{p.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
