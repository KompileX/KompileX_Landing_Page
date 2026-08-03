'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { motion } from 'motion/react'
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const links = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: 'https://x.com', icon: TwitterLogoIcon },
  { name: 'GitHub', href: 'https://github.com', icon: GitHubLogoIcon },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-background">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0 }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5"
        >
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity w-fit">
              KompileX
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI-powered transcription and argument analysis for every conversation. Think clearer, respond smarter.
            </p>
            <div className="flex gap-2 mt-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  asChild
                  variant="outline"
                  className="h-8 w-8 rounded-full p-0"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-foreground">Product</p>
            <ul className="flex flex-col gap-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-foreground">Company</p>
            <ul className="flex flex-col gap-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-foreground">Legal</p>
            <ul className="flex flex-col gap-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <Separator className="my-10 bg-transparent" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {year} KompileX. All rights reserved.</span>
          <span className="text-xs">Built for thinkers, debaters & lifelong learners.</span>
        </div>
      </div>
    </footer>
  )
}
