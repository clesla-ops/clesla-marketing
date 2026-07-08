"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Play, Store, Truck, Wrench, BarChart3, ShoppingCart } from "lucide-react"
import { Eyebrow } from "@/components/ui/primitives"

const pipeline = [
  { icon: Store, label: "Source", value: "Marketplace" },
  { icon: ShoppingCart, label: "Procure", value: "RFQ / PO" },
  { icon: Truck, label: "Move", value: "Logistics" },
  { icon: Wrench, label: "Install", value: "Field Network" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-page relative pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>Professional Audio Commerce Infrastructure</Eyebrow>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.02]"
            >
              The operating system for professional audio commerce.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              CLESLA unifies marketplace, procurement, logistics, installation, and analytics into a single platform —
              powering the entire lifecycle of professional audio for organizations worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.19, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact#demo"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong"
              >
                Request a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border-strong px-6 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                <Play className="h-3.5 w-3.5" /> Explore the platform
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
            >
              <span>Trusted by 2,400+ organizations</span>
              <span className="hidden h-4 w-px bg-border-strong sm:block" />
              <span>$1.8B+ commerce processed</span>
              <span className="hidden h-4 w-px bg-border-strong sm:block" />
              <span>40+ countries</span>
            </motion.div>
          </div>

          {/* Product preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl border border-border bg-surface/80 p-2 shadow-2xl backdrop-blur">
              <div className="rounded-xl border border-border bg-background">
                {/* window bar */}
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                  </div>
                  <div className="ml-3 flex-1 rounded-md border border-border bg-surface-2 px-3 py-1 text-center font-mono text-[11px] text-muted">
                    app.clesla.online / operations
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Active pipeline</p>
                      <p className="mt-0.5 text-2xl font-semibold tracking-tight">$4.28M</p>
                    </div>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                      +18.4% MoM
                    </span>
                  </div>

                  {/* bar chart */}
                  <div className="mt-5 flex h-24 items-end gap-1.5">
                    {[42, 58, 47, 66, 54, 72, 63, 81, 76, 88, 79, 94].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.7, delay: 0.5 + i * 0.04, ease: "easeOut" }}
                        className="flex-1 rounded-sm bg-gradient-to-t from-accent/30 to-accent"
                      />
                    ))}
                  </div>

                  {/* pipeline stages */}
                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {pipeline.map((stage) => (
                      <div key={stage.label} className="rounded-lg border border-border bg-surface p-3">
                        <stage.icon className="h-4 w-4 text-accent" />
                        <p className="mt-2 text-[11px] text-muted">{stage.label}</p>
                        <p className="text-xs font-medium">{stage.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-surface-2 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-accent" />
                      <span className="text-xs text-muted-foreground">On-time installation rate</span>
                    </div>
                    <span className="text-sm font-semibold">99.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
