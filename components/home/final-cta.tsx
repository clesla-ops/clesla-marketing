import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

export function FinalCta() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-16 text-center md:px-16 md:py-20">
            <div className="grid-texture pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Build your audio commerce on infrastructure that scales.
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                See how CLESLA unifies your marketplace, procurement, logistics, and installation operations into one
                enterprise platform.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact#demo"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong"
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-border-strong px-6 text-sm font-medium transition-colors hover:bg-surface-2"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
