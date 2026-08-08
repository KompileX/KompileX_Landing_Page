'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'motion/react'
import { toast } from 'sonner'
import { Mail, MapPin, Phone, Send, Github, Twitter, Linkedin } from 'lucide-react'

const CONTACT_EMAIL = 'contact@kompilex.com'
const CONTACT_PHONE = '+880 1726522690'
const LOCATION = 'Dhaka, Bangladesh'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.warning('Please fill in required fields.')
      return
    }

    const subject = encodeURIComponent(`New project inquiry from ${name.trim()}`)
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nPhone: ${phone.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    toast.success('Opening your email client...', {
      description: `Your message is prefilled, just hit send to ${CONTACT_EMAIL}.`,
    })
  }

  return (
    <motion.section
      id="contact"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, type: 'spring', bounce: 0 }}
      className="relative w-full max-w-screen-xl mx-auto px-4 py-14 lg:py-20 md:px-8 flex justify-center"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div className="w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      {/* Main card matching screenshot layout */}
      <div className="relative z-10 w-full max-w-6xl rounded-xl border border-border bg-card/85 p-8 shadow-sm backdrop-blur-md sm:p-10 md:p-12 lg:p-14">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12 lg:gap-16">
          {/* Left Column: Heading, Info & Socials */}
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5 sm:gap-6">
              <h2 className="text-3xl font-bold tracking-wider sm:text-4xl lg:text-5xl leading-[1.15] bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
                Contact Us
              </h2>
              <p className="text-base text-muted-foreground sm:text-lg leading-relaxed">
                Have a project idea, need dedicated engineering talent, or want to consult on system architecture? Reach out directly.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-muted/60 text-foreground transition-colors hover:border-primary">
                  <Mail className="size-4" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">EMAIL</span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-semibold text-foreground hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-muted/60 text-foreground transition-colors hover:border-primary">
                  <MapPin className="size-4" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">LOCATION</span>
                  <span className="text-sm font-semibold text-foreground">{LOCATION}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-muted/60 text-foreground transition-colors hover:border-primary">
                  <Phone className="size-4" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">WHATSAPP / PHONE</span>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} className="text-sm font-semibold text-foreground hover:underline">
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/80">FIND ME ON</span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition hover:border-foreground hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition hover:border-foreground hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="size-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition hover:border-foreground hover:text-foreground"
                  aria-label="Twitter / X"
                >
                  <Twitter className="size-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6.5 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-medium">
                  NAME
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:shadow-[0_0_12px_rgba(168,85,247,0.25)]"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-medium">
                  CONTACT NUMBER
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:shadow-[0_0_12px_rgba(168,85,247,0.25)]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-medium">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:shadow-[0_0_12px_rgba(168,85,247,0.25)]"
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-medium">
                  MESSAGE
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's on your mind?"
                  rows={3}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:shadow-[0_0_12px_rgba(168,85,247,0.25)] resize-none"
                  required
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="mt-1 flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#190d2e] via-[#37166a] to-[#4a208a] px-6 py-3 text-sm font-semibold text-white shadow-[0px_0px_16px_rgba(140,69,255,0.6)] transition-all hover:scale-[1.01] hover:shadow-[0px_0px_22px_rgba(140,69,255,0.85)] active:scale-[0.99]"
              >
                <span>Send Message</span>
                <Send className="size-4" strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
