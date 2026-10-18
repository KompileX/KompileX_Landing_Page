'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in your name, email and message.');
      return;
    }

    setIsSubmitting(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Thank you! Your message has been sent. We will reply within 24 hours.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="sec pt-10">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Left Information */}
        <div className="flex flex-col gap-7">
          <p className="eyebrow">10 / Contact us</p>
          <h2 className="h2">Tell us what you want to ship.</h2>

          <p
            className="text-lg md:text-[19px] leading-relaxed max-w-[520px]"
            style={{ color: 'var(--kpx-text-muted)' }}
          >
            Bring a project idea, ask for dedicated engineering, or book an architecture consultation.
            We answer like engineers, not like a sales funnel.
          </p>

          <div
            className="flex flex-col border-t mt-2"
            style={{ borderColor: 'var(--kpx-border-light)' }}
          >
            <a
              href="mailto:contact@kompilex.com"
              className="flex justify-between items-center py-4.5 border-b text-lg group transition-colors"
              style={{ borderColor: 'var(--kpx-border-light)' }}
            >
              <span
                className="mono text-xs tracking-wider uppercase font-semibold"
                style={{ color: 'var(--kpx-text-muted)' }}
              >
                Email
              </span>
              <span className="font-semibold group-hover:underline">
                contact@kompilex.com
              </span>
            </a>

            <div
              className="flex justify-between items-center py-4.5 border-b text-lg"
              style={{ borderColor: 'var(--kpx-border-light)' }}
            >
              <span
                className="mono text-xs tracking-wider uppercase font-semibold"
                style={{ color: 'var(--kpx-text-muted)' }}
              >
                WhatsApp
              </span>
              <span className="font-semibold">+880 1726522690</span>
            </div>

            <div
              className="flex justify-between items-center py-4.5 border-b text-lg"
              style={{ borderColor: 'var(--kpx-border-light)' }}
            >
              <span
                className="mono text-xs tracking-wider uppercase font-semibold"
                style={{ color: 'var(--kpx-text-muted)' }}
              >
                Studio
              </span>
              <span className="font-semibold">Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className="flex gap-2.5 pt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line h-11.5 px-5 text-[15px]"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line h-11.5 px-5 text-[15px]"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Right Form Card */}
        <div
          className="rounded-[32px] border p-7 sm:p-11 flex flex-col gap-5 shadow-2xl transition-colors duration-200"
          style={{
            background: 'var(--kpx-surface)',
            borderColor: 'var(--kpx-border)',
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="field">
              <label htmlFor="f-name">Name</label>
              <input
                id="f-name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="field">
                <label htmlFor="f-phone">Contact number</label>
                <input
                  id="f-phone"
                  type="tel"
                  placeholder="+880"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="field">
                <label htmlFor="f-mail">Email</label>
                <input
                  id="f-mail"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="f-msg">Message</label>
              <textarea
                id="f-msg"
                placeholder="What are you building, and by when?"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-ink w-full justify-center mt-1 cursor-pointer"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
