'use client';

import React from 'react';

export default function BackToTop() {
  return (
    <button
      type="button"
      className="flink"
      style={{ fontSize: 14, background: 'none', border: 0, cursor: 'pointer', padding: 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Back to top ↑
    </button>
  );
}
