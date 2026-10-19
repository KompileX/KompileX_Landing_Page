'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { Sparkles, X, ArrowUp, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
  isError?: boolean
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

const uid = () => Math.random().toString(36).slice(2, 10)

export default function AIChatWidget() {
  const pathname = usePathname()

  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [isTyping, setIsTyping] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const typingTimeout = useRef<number | null>(null)


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

  async function sendPrompt(text: string) {
    const clean = text.trim()
    if (!clean || isTyping) return

    const userMessage: Message = { id: uid(), role: 'user', content: clean }
    setMessages((m) => [...m, userMessage])
    setDraft('')
    setIsTyping(true)

    // Prepare message history for API format
    const history = [...messages, userMessage].map((msg) => ({
      role: msg.role,
      content: msg.content,
    }))

    try {
      // 1. Try local server-side API Handler
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: history,
          clientDateTime: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Server returned error status ${response.status}`)
      }

      const data = await response.json()
      const botReply = data.choices?.[0]?.message?.content

      if (!botReply) {
        throw new Error('Received empty response from server.')
      }

      setMessages((m) => [...m, { id: uid(), role: 'assistant', content: botReply }])
    } catch (serverError: any) {
      console.error('Server endpoint /api/chat failed:', serverError)

      setMessages((m) => [
        ...m,
        {
          id: uid(),
          role: 'assistant',
          content: `⚠️ **Connection Error:** Unable to connect to the AI assistant server. Please ensure \`GROQ_API_KEY\` is configured in your environment variables.`,
          isError: true,
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  // Simple custom Markdown rendering for basic formatting (bold and lists)
  const renderMessageContent = (content: string) => {
    return content.split('\n').map((line, lineIdx) => {
      let trimmed = line.trim()
      
      // Bullet point detection
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const text = trimmed.substring(2)
        return (
          <li key={lineIdx} className="ml-4 list-disc text-sm leading-relaxed mb-1 text-foreground/90">
            {parseBoldText(text)}
          </li>
        )
      }

      // Heading detection
      if (trimmed.startsWith('### ')) {
        return (
          <h4 key={lineIdx} className="text-sm font-semibold text-foreground mt-3 mb-1">
            {parseBoldText(trimmed.substring(4))}
          </h4>
        )
      }
      if (trimmed.startsWith('## ')) {
        return (
          <h3 key={lineIdx} className="text-base font-bold text-foreground mt-4 mb-2">
            {parseBoldText(trimmed.substring(3))}
          </h3>
        )
      }

      // Normal paragraph
      return (
        <p key={lineIdx} className="text-sm leading-relaxed mb-2 text-foreground/90 min-h-[1em]">
          {parseBoldText(line)}
        </p>
      )
    })
  }

  // Helper to convert **text** to <strong>text</strong> in React
  const parseBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  if (pathname.startsWith('/admin')) return null

  const glowShadow = 'shadow-[0_24px_60px_-24px_rgba(12,20,16,0.45)]'

  return (
    <MotionConfig reducedMotion="user">

      <AnimatePresence initial={false}>
        {open ? (
          /* ── Expanded chat panel (bottom-right) ── */
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.18, ease: "easeIn" } }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            style={{ transformOrigin: "100% 100%", height: "min(calc(100dvh - 6rem), 600px)" }}
            className={cn(
              'fixed bottom-4 right-4 z-[60] flex w-[min(calc(100vw-2rem),400px)] flex-col overflow-hidden rounded-[28px] border border-border bg-card',
              glowShadow
            )}
            role="dialog"
            aria-label="KompileX AI chat"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
              <div className="relative shrink-0">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-[var(--kpx-accent-lime)]">
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
                onClick={() => {
                  setMessages([WELCOME_MESSAGE])
                  setIsTyping(false)
                }}
                title="Clear history"
                aria-label="Clear history"
                className="ml-auto rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <Trash2 className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
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
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary text-[var(--kpx-accent-lime)]">
                      <Sparkles className="size-3" />
                    </span>
                  )}
                  <div
                    className={cn(
                      'min-w-0 max-w-[85%] break-words rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
                      m.role === 'user'
                        ? 'rounded-br-sm bg-primary text-primary-foreground whitespace-pre-wrap'
                        : m.isError
                          ? 'rounded-bl-sm border border-red-500/20 bg-red-500/10 text-red-200'
                          : 'rounded-bl-sm border border-border bg-muted text-foreground'
                    )}
                  >
                    {m.role === 'assistant' ? (
                      <div className="prose prose-xs select-text">
                        {renderMessageContent(m.content)}
                      </div>
                    ) : (
                      m.content
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex items-end gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary text-[var(--kpx-accent-lime)]">
                    <Sparkles className="size-3" />
                  </span>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-border bg-muted px-4 py-3">
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
                    className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Composer */}
            <div className="border-t border-border p-3">
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-background px-3 py-1.5">
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
                  className="max-h-32 min-h-5 flex-1 resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <button
                  type="button"
                  onClick={() => sendPrompt(draft)}
                  disabled={!draft.trim() || isTyping}
                  aria-label="Send message"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-[var(--kpx-accent-lime)] transition hover:brightness-125 disabled:opacity-40 disabled:shadow-none"
                >
                  <ArrowUp className="size-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ── Collapsed launcher (bottom-right) ── */
          <motion.button
            key="chat-launcher"
            type="button"
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.12 } }}
            transition={{ duration: 0.25, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            onClick={() => setOpen(true)}
            aria-label="Open KompileX AI chat"
            className={cn(
              'fixed bottom-5 right-5 z-[60] flex h-14 items-center gap-2.5 rounded-full border border-border bg-primary pl-4 pr-5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03]',
              glowShadow
            )}
          >
            <Sparkles className="size-[18px] text-[var(--kpx-accent-lime)]" />
            <span>Ask KompileX AI</span>
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--kpx-accent-lime)] opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[var(--kpx-accent-lime)]" />
            </span>
          </motion.button>
        
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}
