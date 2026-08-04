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
    question: "How do you scope a new project?",
    answer:
      "We start with a discovery call to understand your goals, users, and constraints. From there we put together a written scope with milestones and a timeline before any code gets written, so everyone agrees on what \"done\" looks like.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "It depends on scope, but most engagements run from a few weeks for a focused build to a few months for a full product. We work in short iterations and share progress continuously rather than disappearing until launch day.",
  },
  {
    question: "Do you work with early-stage startups or only established companies?",
    answer:
      "Both. We regularly help startups go from idea to MVP, and we also work with established teams who need extra engineering capacity or a specific system built and integrated into what they already have.",
  },
  {
    question: "Do you sign NDAs and handle IP properly?",
    answer:
      "Yes. We're happy to sign an NDA before any detailed discussion, and all code and IP produced for a client project belongs to that client once the engagement is paid in full.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes — we don't disappear after deployment. We offer ongoing support and maintenance retainers, and since our team built the system, we already know it well when something needs fixing or extending.",
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
      className="relative w-full max-w-screen-xl mx-auto px-4 py-14 lg:py-20 gap-5 md:px-8 flex flex-col justify-center items-center"
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
          Everything you need to know about working with KompileX.
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
