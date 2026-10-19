'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been received. A senior engineer will reply within 24 hours.");
    setFormData({ name: '', email: '', company: '', message: '' });
  };
  return (
<section id="contact" className="sec" style={{ background: 'var(--kpx-bg-page, #F4F6F1)' }}>
  <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '56px', alignItems: 'start' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <p className="eyebrow">10 / Contact</p>
      <h2 className="h2">Tell us about what you want to build.</h2>
      <p style={{ fontSize: '18px', lineHeight: 1.55, color: 'var(--kpx-text-muted, #4A5650)', maxWidth: '420px' }}>
        Senior engineers read and reply to every message. We respond within 24 hours with questions or a preliminary scope.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
        <a href="mailto:contact@kompilex.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '18px', fontWeight: 600 }}>
          <span style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--kpx-surface, #fff)', border: '1px solid var(--kpx-border-strong, #CBD2C3)', display: 'grid', placeItems: 'center' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6"></path></svg>
          </span>
          contact@kompilex.com
        </a>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '16.5px', color: 'var(--kpx-text-muted, #4A5650)' }}>
          <span style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--kpx-surface, #fff)', border: '1px solid var(--kpx-border-strong, #CBD2C3)', display: 'grid', placeItems: 'center' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8zM12 10a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          </span>
          Remote-first · Working with clients worldwide
        </div>
      </div>
    </div>

    <form onSubmit={handleFormSubmit} style={{ background: 'var(--kpx-surface, #fff)', border: '1px solid var(--kpx-border-strong, #CBD2C3)', borderRadius: '32px', padding: '48px 44px', boxShadow: '0 40px 60px -48px rgba(12,20,16,.35)', display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jane Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="company">Company or project name</label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Corp (optional)"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="message">What are you looking to build?</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about the product, timeline and any specific stack preferences..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-ink" style={{ height: '56px', fontSize: '17px', marginTop: '6px' }}>
        Send inquiry to engineering
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
      </button>
      <p style={{ fontSize: '13px', color: 'var(--kpx-text-muted, #4A5650)', textAlign: 'center', margin: 0 }}>
        🔒 Strictly confidential. No sales calls, no spam.
      </p>
    </form>
  </div>
</section>
  );
}
