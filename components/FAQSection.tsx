"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "motion/react"

const faqs = [
  {
    question: "What platforms does Cortify support?",
    answer:
      "Cortify works with all major video conferencing and streaming platforms including Zoom, Google Meet, Microsoft Teams, Discord, YouTube Live, and more. Our browser extension captures audio from any web-based platform automatically.",
  },
  {
    question: "Does Cortify work offline?",
    answer:
      "Currently, Cortify requires an internet connection for real-time AI processing and fact-checking. We are working on an offline mode for basic transcription that will be available in a future update.",
  },
  {
    question: "How accurate is the transcription and analysis?",
    answer:
      "Our transcription achieves 95%+ accuracy for clear audio in English, with support for multiple accents. Argument analysis and fact-checking leverage state-of-the-art AI models with continuous improvement through user feedback.",
  },
  {
    question: "Can I use Cortify for Zoom or Teams meetings?",
    answer:
      "Yes! Cortify integrates seamlessly with Zoom and Microsoft Teams. You can use our browser extension to capture meeting audio, or connect via our desktop app. All participants are notified when recording is active.",
  },
  {
    question: "How is my data protected?",
    answer:
      "Your privacy is paramount. All audio is processed with end-to-end encryption. We maintain a strict zero-log policy for conversation content. You can delete your data at any time from your account settings. We are fully GDPR compliant.",
  },
]

export default function FAQSection() {
  return (
    <motion.section
      id="faq"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-screen-xl mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      {/* Blue glow background - left side */}
      <div className="w-full h-full absolute top-0 flex justify-end items-center pointer-events-none">
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl -rotate-[15deg] sm:-rotate-[35deg] will-change-transform" />
        </div>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-3xl font-bold sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-center text-sm bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Everything you need to know about Cortify.
        </p>
      </div>
      <div className="flex w-full max-w-2xl">
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="text-muted-foreground"
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  )
}
