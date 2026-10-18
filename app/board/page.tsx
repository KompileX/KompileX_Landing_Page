'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ExactHome from '@/components/redesign/ExactHome';
import ExactServices from '@/components/redesign/ExactServices';
import ExactTechnologies from '@/components/redesign/ExactTechnologies';
import ExactAboutUs from '@/components/redesign/ExactAboutUs';
import ExactCaseStudy from '@/components/redesign/ExactCaseStudy';
import ExactDesignLanguage from '@/components/redesign/ExactDesignLanguage';
import ExactColorOptions from '@/components/redesign/ExactColorOptions';

const BOARDS = [
  { id: 'home', name: '01 / Home', w: 1440, h: 8000, path: '/', comp: ExactHome },
  { id: 'services', name: '02 / Services', w: 1440, h: 7200, path: '/services', comp: ExactServices },
  { id: 'technologies', name: '03 / Technologies', w: 1440, h: 4900, path: '/technologies', comp: ExactTechnologies },
  { id: 'about', name: '04 / About Us', w: 1440, h: 3500, path: '/about-us', comp: ExactAboutUs },
  { id: 'casestudy', name: '05 / Case Study', w: 1440, h: 2700, path: '/case-studies/commerceos', comp: ExactCaseStudy },
  { id: 'designlanguage', name: '06 / Design Language', w: 1440, h: 2400, path: '/design-language', comp: ExactDesignLanguage },
  { id: 'coloroptions', name: '07 / Color Options', w: 1440, h: 1180, path: '/color-options', comp: ExactColorOptions },
];

export default function BoardPage() {
  const [activeBoard, setActiveBoard] = useState<string>('all');
  const [scale, setScale] = useState<number>(0.65);

  const displayedBoards = activeBoard === 'all' 
    ? BOARDS 
    : BOARDS.filter(b => b.id === activeBoard);

  return (
    <div className="min-h-screen bg-[#EAE8E1] text-[#1F1E1D] font-sans">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-[#F5F4EF]/95 backdrop-blur-md border-b border-[#D8DDD2] px-6 py-3 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-bold text-lg tracking-tight flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#0C1410] text-[#C8F53C] grid place-items-center text-xs font-mono">KX</span>
            <span>KompileX <span className="text-[#0A6B4A]">Redesign Boards</span></span>
          </Link>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E1E8D8] text-[#0C1410] font-mono">
            7 Reverse-Engineered Boards
          </span>
        </div>

        {/* Board Switcher */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveBoard('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
              activeBoard === 'all' ? 'bg-[#0C1410] text-[#F4F6F1]' : 'bg-white text-[#0C1410] hover:bg-[#E1E8D8]'
            }`}
          >
            All Boards
          </button>
          {BOARDS.map(b => (
            <button
              key={b.id}
              onClick={() => setActiveBoard(b.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                activeBoard === b.id ? 'bg-[#0C1410] text-[#F4F6F1]' : 'bg-white text-[#0C1410] hover:bg-[#E1E8D8]'
              }`}
            >
              {b.name.replace(/^\d+\s*\/\s*/, '')}
            </button>
          ))}
        </div>

        {/* Zoom & Admin Links */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white rounded-lg border border-[#D8DDD2] p-1 text-xs">
            <button onClick={() => setScale(0.4)} className={`px-2 py-1 rounded ${scale === 0.4 ? 'bg-[#0C1410] text-white' : ''}`}>40%</button>
            <button onClick={() => setScale(0.65)} className={`px-2 py-1 rounded ${scale === 0.65 ? 'bg-[#0C1410] text-white' : ''}`}>65%</button>
            <button onClick={() => setScale(1.0)} className={`px-2 py-1 rounded ${scale === 1.0 ? 'bg-[#0C1410] text-white' : ''}`}>100%</button>
          </div>
          <Link
            href="/admin"
            className="px-3 py-1.5 rounded-lg bg-[#C8F53C] hover:bg-white text-[#0C1410] text-xs font-bold border border-[#0C1410] transition"
          >
            Open Admin Theme Panel 🎨
          </Link>
        </div>
      </header>

      {/* Board Canvas */}
      <main className="p-8 flex flex-col items-center gap-16 overflow-auto">
        {displayedBoards.map(board => {
          const Comp = board.comp;
          return (
            <div key={board.id} className="flex flex-col items-start gap-3 w-full max-w-[1480px]">
              <div className="flex items-center justify-between w-full px-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-sm font-semibold tracking-wider uppercase text-[#4A5650] font-mono">
                    {board.name}
                  </h2>
                  <span className="text-xs text-[#7B8B82] font-mono">
                    {board.w} × {board.h}px
                  </span>
                </div>
                <Link
                  href={board.path}
                  target="_blank"
                  className="text-xs font-semibold text-[#0A6B4A] hover:underline flex items-center gap-1"
                >
                  Open Full Page ↗
                </Link>
              </div>

              {/* Scaled Frame */}
              <div
                className="w-full bg-white rounded-2xl border border-[#CBD2C3] shadow-2xl overflow-hidden"
                style={{
                  maxHeight: activeBoard === 'all' ? '1200px' : 'none',
                  overflowY: 'auto',
                }}
              >
                <div
                  style={{
                    width: `${board.w}px`,
                    transformOrigin: 'top left',
                    transform: scale !== 1.0 ? `scale(${scale})` : undefined,
                    marginBottom: scale !== 1.0 ? `-${(1 - scale) * 100}%` : undefined,
                  }}
                >
                  <Comp />
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
