'use client'

import { createContext, useContext, useState, useCallback, ReactNode, useRef, useEffect } from 'react'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastOptions {
  description?: string
  duration?: number
  showProgress?: boolean
  action?: {
    label: string
    onClick: () => void
  }
}

interface ToastItem {
  id: number
  message: string
  type: ToastType
  options: ToastOptions
  removing?: boolean
}

interface ToastContextValue {
  success: (message: string, options?: ToastOptions) => void
  error: (message: string, options?: ToastOptions) => void
  warning: (message: string, options?: ToastOptions) => void
  info: (message: string, options?: ToastOptions) => void
  dismiss: (id: number) => void
}

const ToastContext = createContext<ToastContextValue>({
  success: () => {},
  error: () => {},
  warning: () => {},
  info: () => {},
  dismiss: () => {},
})

function getIcon(type: ToastType) {
  const icons: Record<ToastType, string> = {
    success: `<path stroke-linecap="round" stroke-linejoin="round" d="M5 10l3 3L15 6"/>`,
    error: `<path stroke-linecap="round" stroke-linejoin="round" d="M6 6l8 8M14 6l-8 8"/>`,
    warning: `<path stroke-linecap="round" stroke-linejoin="round" d="M10 4v8m0 4h.01"/>`,
    info: `<path stroke-linecap="round" stroke-linejoin="round" d="M10 8v4m0 4h.01M19 10c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>`,
  }
  return icons[type]
}

function ToastItem({ toast, onDismiss }: { toast: ToastItem; onDismiss: (id: number) => void }) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const duration = toast.options.duration ?? 4000

  useEffect(() => {
    if (duration > 0) {
      timerRef.current = setTimeout(() => onDismiss(toast.id), duration)
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [toast.id, duration, onDismiss])

  return (
    <div className={`gooey-toast ${toast.type} ${toast.removing ? 'removing' : ''} ${toast.options.description || toast.options.action ? 'expanded' : ''}`}>
      <div className="gooey-toast-header">
        <div className="gooey-toast-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"
            dangerouslySetInnerHTML={{ __html: getIcon(toast.type) }} />
        </div>
        <div className="gooey-toast-content">
          <p className="gooey-toast-title">{toast.message}</p>
          {toast.options.description && (
            <p className="gooey-toast-description">{toast.options.description}</p>
          )}
        </div>
        <button className="gooey-toast-close" onClick={() => onDismiss(toast.id)} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 4l8 8M12 4l-8 8"/>
          </svg>
        </button>
      </div>

      {toast.options.action && (
        <div className="gooey-toast-action">
          <button
            className="gooey-toast-action-btn"
            onClick={() => { toast.options.action!.onClick(); onDismiss(toast.id) }}
          >
            {toast.options.action.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h6m0 0L8 5m3 3l-3 3"/>
            </svg>
          </button>
        </div>
      )}

      {toast.options.showProgress && (
        <div className="gooey-toast-progress">
          <div
            className="gooey-toast-progress-bar"
            style={{ ['--duration' as string]: `${duration}ms` }}
          />
        </div>
      )}
    </div>
  )
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const nextId = useRef(1)

  const dismiss = useCallback((id: number) => {
    setToasts(prev => prev.map(t => t.id === id ? { ...t, removing: true } : t))
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 300)
  }, [])

  const addToast = useCallback((message: string, type: ToastType, options: ToastOptions = {}) => {
    const id = nextId.current++
    setToasts(prev => [...prev, { id, message, type, options }])
  }, [])

  const value: ToastContextValue = {
    success: (msg, opts) => addToast(msg, 'success', opts),
    error: (msg, opts) => addToast(msg, 'error', opts),
    warning: (msg, opts) => addToast(msg, 'warning', opts),
    info: (msg, opts) => addToast(msg, 'info', opts),
    dismiss,
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="gooey-toast-container">
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
