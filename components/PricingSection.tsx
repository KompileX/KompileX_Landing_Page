"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "motion/react"
import { CheckIcon } from "@radix-ui/react-icons"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "5 hours of transcription/month",
      "Basic argument analysis",
      "Listen & Analyze mode",
      "Standard fact-checking",
      "Export to TXT",
      "Community support",
    ],
    cta: "Get Started Free",
    ctaHref: "#waitlist",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For serious communicators",
    features: [
      "Unlimited transcription",
      "Advanced AI debate coaching",
      "All 6 modes unlocked",
      "Real-time fact verification",
      "Knowledge base (unlimited clips)",
      "Export to PDF, DOCX, JSON",
      "Priority processing",
      "Email support",
    ],
    cta: "Start Pro Trial",
    ctaHref: "#waitlist",
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/month",
    description: "For teams & organizations",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Shared knowledge bases",
      "Team analytics dashboard",
      "Custom AI fine-tuning",
      "SSO & advanced security",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    ctaHref: "#waitlist",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full max-w-7xl mx-auto px-4 py-24 md:px-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 flex flex-col gap-3"
      >
        <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Choose Your Plan
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground text-center">
          Start free, upgrade when you need more power. No hidden fees.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative ${plan.popular ? "scale-105" : ""}`}
          >
            <Card
              className={`relative h-full ${
                plan.popular ? "border-2 border-primary shadow-xl" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-card border-2 border-primary px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardContent className="p-6 pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <CheckIcon className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <a href={plan.ctaHref}>{plan.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
