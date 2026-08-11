'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { Sparkles, X, ArrowUp } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hey there! I'm KompileX AI. Ask me about our services, how we work, timelines, or anything else about the studio — I'll point you in the right direction.",
}

const SUGGESTIONS = [
  'What services do you offer?',
  'How does the process work?',
  'What does it cost to build an app?',
  'Can you show me your work?',
]

const MOCK_REPLIES = [
  "Got it — noted. The AI layer isn't wired up yet, so this is a placeholder reply. Once it's connected I'll answer from KompileX's own docs and team notes.",
  "Thanks for asking! I'm running in demo mode right now. When the real AI is plugged in behind this chat, I'll answer with accurate details on services, process, and pricing.",
  "Good question. This is a demo reply while we connect the AI. In the meantime you can reach a human at hello@kompilex.dev.",
]

const uid = () => Math.random().toString(36).slice(2, 10)

export default function AIChatWidget() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [isTyping, setIsTyping] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const replyIndex = useRef(0)
  const typingTimeout = useRef<number | null>(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (open) textareaRef.current?.focus()
  }, [open])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [draft])

  useEffect(() => () => {
    if (typingTimeout.current) window.clearTimeout(typingTimeout.current)
  }, [])

  function sendPrompt(text: string) {
    const clean = text.trim()
    if (!clean || isTyping) return

    setMessages((m) => [...m, { id: uid(), role: 'user', content: clean }])
    setDraft('')
    setIsTyping(true)

    typingTimeout.current = window.setTimeout(() => {
      const reply = MOCK_REPLIES[replyIndex.current % MOCK_REPLIES.length]
      replyIndex.current += 1
      setMessages((m) => [...m, { id: uid(), role: 'assistant', content: reply }])
      setIsTyping(false)
    }, 900)
  }

  const glowShadow = isLight
    ? 'shadow-[0_18px_50px_-16px_rgba(140,69,255,0.35)]'
    : 'shadow-[0_18px_50px_-16px_rgba(140,69,255,0.5)]'

  return (
    <MotionConfig reducedMotion="user">
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {open ? (
          /* ── Expanded chat panel (bottom-right) ── */
          <motion.div
            key="chat-panel"
            layoutId="ai-chat"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', bounce: 0.12, duration: 0.55 }}
            className={cn(
              'fixed bottom-4 right-4 z-[60] flex w-[min(calc(100vw-2rem),400px)] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-2xl',
              glowShadow
            )}
            style={{ height: 'min(calc(100dvh - 6rem), 600px)' }}
            role="dialog"
            aria-label="KompileX AI chat"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
              <div className="relative shrink-0">
                <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white shadow-[0px_0px_14px_rgba(140,69,255,0.5)]">
                  <Sparkles className="size-4" />
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
                </span>
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="text-sm font-semibold text-foreground">KompileX AI</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Online · Ask anything
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="ml-auto rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                  className={cn('flex items-end gap-2', m.role === 'user' ? 'justify-end' : 'justify-start')}
                >
                  {m.role === 'assistant' && (
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white shadow-[0px_0px_10px_rgba(140,69,255,0.4)]">
                      <Sparkles className="size-3" />
                    </span>
                  )}
                  <div
                    className={cn(
                      'max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
                      m.role === 'user'
                        ? 'rounded-br-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white shadow-[0px_0px_12px_rgba(140,69,255,0.35)]'
                        : 'rounded-bl-sm border border-border bg-muted/60 text-foreground'
                    )}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex items-end gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white shadow-[0px_0px_10px_rgba(140,69,255,0.4)]">
                    <Sparkles className="size-3" />
                  </span>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-border bg-muted/60 px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="size-1.5 animate-bounce rounded-full bg-muted-foreground"
                        style={{ animationDelay: `${i * 120}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Suggested prompts */}
            {messages.length === 1 && !isTyping && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => sendPrompt(s)}
                    className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Composer */}
            <div className="border-t border-border p-3">
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-background px-3 py-2.5 transition focus-within:border-primary/60 focus-within:shadow-[0_0_0_3px_rgba(140,69,255,0.15)]">
                <textarea
                  ref={textareaRef}
                  rows={1}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      sendPrompt(draft)
                    }
                  }}
                  placeholder="Ask anything about KompileX…"
                  aria-label="Type your message"
                  className="max-h-32 min-h-6 flex-1 resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <button
                  type="button"
                  onClick={() => sendPrompt(draft)}
                  disabled={!draft.trim() || isTyping}
                  aria-label="Send message"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white shadow-[0px_0px_10px_rgba(140,69,255,0.5)] transition hover:brightness-125 disabled:opacity-40 disabled:shadow-none"
                >
                  <ArrowUp className="size-4" />
                </button>
              </div>
              <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                AI chat · integration coming soon
              </p>
            </div>
          </motion.div>
        ) : (
          /* ── Collapsed floating input (bottom-center) ── */
          <motion.div
            key="chat-pill-wrapper"
            className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-5"
          >
            <motion.div
              layoutId="ai-chat"
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', bounce: 0.12, duration: 0.55 }}
              className={cn(
                'pointer-events-auto flex h-14 w-full max-w-[560px] items-center gap-3 rounded-full border border-border bg-background/85 px-3 backdrop-blur-xl transition-colors hover:border-primary/50',
                glowShadow
              )}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white shadow-[0px_0px_12px_rgba(140,69,255,0.6)]">
                <Sparkles className="size-4" />
              </span>
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onFocus={() => setOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    setOpen(true)
                  }
                }}
                placeholder="Ask us anything…"
                aria-label="Ask KompileX AI anything"
                enterKeyHint="send"
                className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-border bg-muted/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:flex">
                KompileX AI
              </span>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open chat"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white shadow-[0px_0px_10px_rgba(140,69,255,0.6)] transition hover:brightness-125"
              >
                <ArrowUp className="size-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}
