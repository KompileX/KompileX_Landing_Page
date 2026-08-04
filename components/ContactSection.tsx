'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { toast } from 'sonner'

const CONTACT_EMAIL = 'hello@kompilex.dev'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !details.trim()) {
      toast.warning('Please fill in all fields.')
      return
    }

    const subject = encodeURIComponent(`New project inquiry from ${name.trim()}`)
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nProject details:\n${details.trim()}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    toast.success('Opening your email client...', {
      description: `Your message is prefilled — just hit send to ${CONTACT_EMAIL}.`,
    })
  }

  return (
    <motion.section
      id="contact"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, type: 'spring', bounce: 0 }}
      className="relative w-full max-w-screen-xl mx-auto px-4 py-14 lg:py-20 md:px-8 flex flex-col items-center gap-10"
    >
      {/* Blue glow background */}
      <div className="w-full h-full absolute top-0 flex justify-end items-center pointer-events-none">
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl rotate-[15deg] sm:rotate-[35deg] will-change-transform" />
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Let&apos;s build something
        </div>
        <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Start a Project
        </h2>
        <p className="max-w-xl text-sm text-center bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Tell us what you&apos;re building. We reply to every inquiry within a day or two.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-md bg-input border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-ring transition-colors"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full px-4 py-3 rounded-md bg-input border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-ring transition-colors"
          required
        />
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="A little about your project..."
          rows={4}
          className="w-full px-4 py-3 rounded-md bg-input border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
          required
        />
        <Button type="submit" className="w-full" size="lg">
          Send Message
        </Button>
      </form>

      <p className="text-sm text-muted-foreground">
        Or email us directly at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground underline underline-offset-2">
          {CONTACT_EMAIL}
        </a>
      </p>
    </motion.section>
  )
}
