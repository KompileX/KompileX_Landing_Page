'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Code2, Server, Cloud, LifeBuoy } from 'lucide-react'

const STAR_IMAGE = '/stars.png'

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'GraphQL', 'AWS', 'Docker', 'Vercel',
]

const featureCards = [
  { side: 'left' as const, topClass: 'top-[30%]', xFrom: -40, delay: 0.25, Icon: Code2,   title: 'Web & Mobile Apps',  desc: 'Full-stack products built from scratch or extended.' },
  { side: 'left' as const, topClass: 'top-[62%]', xFrom: -40, delay: 0.38, Icon: Server,  title: 'APIs & Backends',    desc: 'Reliable services that scale with your users.' },
  { side: 'right' as const, topClass: 'top-[30%]', xFrom: 40, delay: 0.30, Icon: Cloud,   title: 'Cloud Infrastructure', desc: 'CI/CD, hosting, and monitoring done right.' },
  { side: 'right' as const, topClass: 'top-[62%]', xFrom: 40, delay: 0.43, Icon: LifeBuoy, title: 'Ongoing Support',   desc: 'We stick around after launch, not just before it.' },
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
              <span className={`text-sm font-semibold ${isLight ? 'text-violet-700' : 'text-white/70'}`}>Software Development Studio</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className={`text-center font-semibold tracking-tighter text-5xl md:text-7xl lg:text-8xl lg:leading-none ${isLight ? 'text-foreground' : 'text-white'}`}>
            We Ship Software<br />That Works
          </h1>

          {/* Subtitle */}
          <p className={`mx-auto mt-5 max-w-xl text-center text-lg md:text-xl ${isLight ? 'text-muted-foreground' : 'text-white/70'}`}>
            KompileX is a four-person team designing, building, and shipping full-stack products for startups and teams who need to move fast.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="relative cursor-pointer rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-4 py-2.5 text-sm font-medium text-white shadow-[0px_0px_12px_#8c45ff]"
            >
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]" />
              </div>
              <span className="relative">Start a Project</span>
            </a>

            <a
              href="#work"
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition ${isLight ? 'border-border bg-white/70 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-foreground/20' : 'border-white/10 text-white/70 hover:border-white/30 hover:text-white'}`}
            >
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              See Our Work
            </a>
          </div>
        </div>
      </motion.section>

      {/* ── Tech ticker ── */}
      <div className="w-full py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-5">
            <div className="flex-1 md:flex-none">
              <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">Technologies we work with</p>
            </div>
            <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
              <motion.div
                initial={{ x: '-50%' }}
                animate={{ x: 0 }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                className="-translate-x-1/2 flex flex-none gap-4 pr-4"
              >
                {[...technologies, ...technologies].map((name, i) => (
                  <div key={i} className="flex h-8 items-center whitespace-nowrap rounded-full border border-border px-4">
                    <span className="text-sm font-medium text-muted-foreground">{name}</span>
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
