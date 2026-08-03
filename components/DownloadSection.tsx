"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

interface ReleaseInfo {
  version: string
  downloadUrl: string
  releasedAt: string
}

type Releases = Record<string, ReleaseInfo>

const platforms = [
  {
    key: "win32",
    label: "Windows",
    note: "Windows 10 or later · 64-bit",
    ext: ".exe",
    popular: true,
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 5.557L10.025 4.64v7.017H3V5.557zM10.025 12.36v7.017L3 18.443V12.36h7.025zM10.85 4.52L21 3v8.657h-10.15V4.52zM21 12.343V21l-10.15-1.52v-7.137H21z" />
      </svg>
    ),
  },
  {
    key: "darwin",
    label: "macOS",
    note: "macOS 11 or later · Universal",
    ext: ".dmg",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
]

export default function DownloadSection() {
  const [releases, setReleases] = useState<Releases>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://app.cortify.ai/api/releases/latest")
      .then((r) => r.json())
      .then((data) => {
        setReleases(data.releases || {})
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <motion.section
      id="download"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0 }}
      className="relative flex flex-col items-center justify-center w-full max-w-screen-xl gap-12 px-4 mx-auto py-28 md:px-8"
    >
      {/* Glow background */}
      {/* <div className="absolute top-0 flex items-center justify-start w-full h-full pointer-events-none">
        <div className="flex items-center justify-center w-3/4">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl rotate-[15deg] sm:rotate-[35deg] will-change-transform" />
        </div>
      </div> */}

      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-3xl font-bold text-transparent sm:text-4xl bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text">
          Download Cortify
        </h2>
        <p className="max-w-xl text-sm text-center text-transparent bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text">
          Install the desktop app and start mastering every conversation with AI.
        </p>
      </div>

      {/* Platform cards */}
      <div className="flex flex-col justify-center w-full max-w-2xl gap-6 sm:flex-row">
        {platforms.map((p, index) => {
          const release = releases[p.key]
          return (
            <motion.div
              key={p.key}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex-1 ${p.popular ? "scale-105" : ""}`}
            >
              {p.popular && (
                <div className="absolute z-10 -translate-x-1/2 -top-4 left-1/2">
                  <span className="px-4 py-1 text-xs font-medium border-2 rounded-full bg-card border-primary whitespace-nowrap">
                    Recommended
                  </span>
                </div>
              )}

              <Card className={`h-full ${p.popular ? "border-2 border-primary shadow-xl" : ""}`}>
                <CardContent className="flex flex-col h-full gap-4 p-6 pt-8">
                  {/* Icon */}
                  <div className="text-muted-foreground">{p.icon}</div>

                  {/* Info */}
                  <div>
                    <h3 className="text-xl font-semibold">{p.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
                  </div>

                  {/* Version */}
                  {!loading && release && (
                    <p className="text-xs text-muted-foreground">
                      Version {release.version} · {release.releasedAt}
                    </p>
                  )}

                  {/* Button */}
                  <div className="pt-2 mt-auto">
                    {loading ? (
                      <div className="h-10 rounded-md bg-muted animate-pulse" />
                    ) : release ? (
                      <Button asChild className="w-full" variant={p.popular ? "default" : "outline"}>
                        <a href={release.downloadUrl}>
                          <Download className="w-4 h-4 mr-2" />
                          Download {p.ext}
                        </a>
                      </Button>
                    ) : (
                      <Button disabled className="w-full" variant="outline">
                        Coming soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <p className="text-xs text-muted-foreground">
        Linux support coming soon
      </p>
    </motion.section>
  )
}
