'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import Image from 'next/image'

interface ImagePreviewState {
  isOpen: boolean
  src: string
  alt: string
}

interface ImagePreviewContextValue {
  openPreview: (src: string, alt: string) => void
  closePreview: () => void
}

const ImagePreviewContext = createContext<ImagePreviewContextValue>({
  openPreview: () => {},
  closePreview: () => {},
})

export function ImagePreviewProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ImagePreviewState>({ isOpen: false, src: '', alt: '' })
  const [visible, setVisible] = useState(false)

  const openPreview = useCallback((src: string, alt: string) => {
    setState({ isOpen: true, src, alt })
    requestAnimationFrame(() => setVisible(true))
  }, [])

  const closePreview = useCallback(() => {
    setVisible(false)
    setTimeout(() => setState({ isOpen: false, src: '', alt: '' }), 300)
  }, [])

  useEffect(() => {
    if (!state.isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePreview()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [state.isOpen, closePreview])

  return (
    <ImagePreviewContext.Provider value={{ openPreview, closePreview }}>
      {children}
      {state.isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) closePreview() }}
        >
          <button
            onClick={closePreview}
            className="absolute z-10 p-2 transition-all duration-300 top-6 right-6 hover:scale-110 group"
            aria-label="Close preview"
          >
            <svg className="w-8 h-8 text-white transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div className="relative max-w-[95vw] max-h-[95vh] p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={state.src}
              alt={state.alt}
              className="max-w-full max-h-[90vh] shadow-2xl rounded-2xl"
              style={{ border: '2px solid var(--border-primary)' }}
            />
            <p className="mt-4 text-lg font-medium text-center text-white">{state.alt}</p>
          </div>
        </div>
      )}
    </ImagePreviewContext.Provider>
  )
}

export function useImagePreview() {
  return useContext(ImagePreviewContext)
}
