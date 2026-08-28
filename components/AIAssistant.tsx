'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sparkles, Send, X, Trash2, Minimize2, Maximize2, Bot, User, RefreshCw, AlertCircle } from 'lucide-react'



interface Message {
  role: 'user' | 'assistant'
  content: string
  isError?: boolean
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "👋 Hi! I'm the **KompileX AI Assistant**. Ask me anything about our studio, our services, our engineering specialists, or how we build products!",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom when messages or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading, isMinimized])

  // Close chat when clicking outside the chat box (only if open and not minimized)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target as Node) &&
        isOpen &&
        !isMinimized
      ) {
        // Keep input focused or just let it close
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, isMinimized])

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend ?? input).trim()
    if (!text) return

    // Add user message
    const userMsg: Message = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsLoading(true)
    setIsOpen(true)
    setIsMinimized(false)

    // Build chat history for Groq API format
    const chatHistory = [...messages, userMsg].map((msg) => ({
      role: msg.role,
      content: msg.content,
    }))

    try {
      // 1. Try local server-side API Handler
      const apiUrl = process.env.NEXT_PUBLIC_CHAT_API_URL || '/app/api/chat' // Fallback check or direct /api/chat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: chatHistory,
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

      setMessages((prev) => [...prev, { role: 'assistant', content: botReply }])
    } catch (serverError: any) {
      console.error('Server endpoint /api/chat failed:', serverError)

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `⚠️ **Connection Error:** Unable to connect to the AI assistant server. Please ensure \`GROQ_API_KEY\` is configured in your environment variables.`,
          isError: true,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  const resetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "👋 Hi! I'm the **KompileX AI Assistant**. Ask me anything about our studio, our services, our engineering specialists, or how we build products!",
      },
    ])
    setIsLoading(false)
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

  return (
    <div
      ref={chatContainerRef}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] flex flex-col items-center w-[calc(100%-2rem)] sm:w-[420px] md:w-[480px] font-sans"
    >
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="w-full bg-[#131316]/90 dark:bg-[#131316]/90 light:bg-white/95 border border-white/10 dark:border-white/10 light:border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col mb-3 max-h-[380px] sm:max-h-[420px] backdrop-blur-xl"
          >
            {/* Top border glowing gradient */}
            <div className="h-1 w-full bg-gradient-to-r from-[#8c6bff] via-[#6366f1] to-[#35b6c9]" />

            {/* Chat Header */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-white/5 dark:border-white/5 light:border-black/5 bg-[#1c1c21]/50 dark:bg-[#1c1c21]/50 light:bg-slate-50/70">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-foreground uppercase">KompileX AI</h3>
                  <span className="text-[10px] text-muted-foreground">Ask anything about us</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5">
                <button
                  onClick={resetChat}
                  title="Clear history"
                  className="p-1 rounded hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsMinimized(true)}
                  title="Minimize"
                  className="p-1 rounded hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setInput('')
                  }}
                  title="Close"
                  className="p-1 rounded hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4 max-h-[300px]">
              {messages.map((msg, index) => {
                const isAssistant = msg.role === 'assistant'
                return (
                  <div
                    key={index}
                    className={`flex gap-2.5 max-w-[85%] ${
                      isAssistant ? 'self-start' : 'self-end flex-row-reverse'
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border text-xs select-none ${
                        isAssistant
                          ? 'bg-gradient-to-br from-[#8c6bff] to-[#6366f1] border-white/10 text-white'
                          : 'bg-muted border-border text-foreground'
                      }`}
                    >
                      {isAssistant ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>

                    {/* Bubble */}
                    <div
                      className={`px-3 py-2 rounded-2xl ${
                        isAssistant
                          ? msg.isError
                            ? 'bg-red-500/10 border border-red-500/20 text-red-200'
                            : 'bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-black/5'
                          : 'bg-[#6366f1] text-white border border-transparent'
                      }`}
                    >
                      {isAssistant ? (
                        <div className="prose prose-invert prose-xs">
                          {renderMessageContent(msg.content)}
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* Thinking state / Typing Indicator */}
              {isLoading && (
                <div className="flex gap-2.5 max-w-[85%] self-start">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-white/10 bg-gradient-to-br from-[#8c6bff] to-[#6366f1] text-white">
                    <Bot className="w-4 h-4 animate-pulse" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-black/5 flex items-center justify-center gap-1.5 h-9">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Input Pill Bar */}
      <motion.div
        layout
        className={`w-full bg-[#131316]/80 dark:bg-[#131316]/80 light:bg-white/90 border transition-all duration-300 rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.3)] backdrop-blur-md ${
          isFocused
            ? 'border-[#6366f1] shadow-[0_0_20px_rgba(99,102,241,0.2)] ring-1 ring-[#6366f1]/50'
            : 'border-white/10 dark:border-white/10 light:border-black/15 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/25'
        }`}
      >
        <div className="flex items-center gap-2 shrink-0">
          <Sparkles className="w-4 h-4 text-[#8c6bff] animate-pulse" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          onFocus={() => {
            setIsFocused(true)
            if (messages.length > 1) {
              setIsOpen(true)
              setIsMinimized(false)
            }
          }}
          onBlur={() => setIsFocused(false)}
          placeholder={isOpen && isMinimized ? 'Chat minimized. Type to resume...' : 'Ask KompileX AI about our services, team...'}
          className="w-full bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground text-foreground select-text py-0.5"
        />

        <div className="flex items-center gap-1.5 shrink-0">
          {isOpen && isMinimized && (
            <button
              onClick={() => setIsMinimized(false)}
              className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-md bg-white/5 dark:bg-white/5 light:bg-black/5 text-muted-foreground hover:text-foreground transition-all duration-150"
            >
              Expand
            </button>
          )}
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className={`p-1.5 rounded-full transition-all duration-200 flex items-center justify-center ${
              input.trim() && !isLoading
                ? 'bg-gradient-to-r from-[#8c6bff] to-[#6366f1] text-white hover:scale-105 active:scale-95'
                : 'text-muted-foreground/50 cursor-not-allowed'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}
