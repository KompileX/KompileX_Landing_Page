'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { toast } from 'sonner'

export default function WaitlistSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) {
      toast.warning('Please fill in all fields.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`${process.env.VITE_API_BASE_URL}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      })
      if (res.ok) {
        toast.success("You're on the waitlist!", {
          description: "We'll be in touch soon. Check your email for confirmation.",
        })
        setName('')
        setEmail('')
      } else {
        const data = await res.json().catch(() => ({}))
        const msg = (data as { message?: string }).message || 'Something went wrong. Please try again.'
        toast.error('Submission failed', { description: msg })
      }
    } catch {
      toast.error('Network error', { description: 'Please check your connection and try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      id="waitlist"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, type: 'spring', bounce: 0 }}
      className="relative w-full max-w-screen-xl mx-auto px-4 py-28 md:px-8 flex flex-col items-center gap-10"
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
          Limited Early Access
        </div>
        <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Join the Waitlist
        </h2>
        <p className="max-w-xl text-sm text-center bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Be among the first to experience Cortify. Limited spots available.
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
        <Button type="submit" disabled={loading} className="w-full" size="lg">
          {loading ? 'Joining...' : 'Join the Waitlist'}
        </Button>
      </form>

      <p className="text-sm text-muted-foreground">No spam ever. Unsubscribe anytime.</p>
    </motion.section>
  )
}
