import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

export function CtaBand({
  title = "Ready to operationalize professional audio commerce?",
  description = "Join the organizations running procurement, logistics, and installations on a single enterprise platform.",
  primaryLabel = "Request a Demo",
  primaryHref = "/contact#demo",
  secondaryLabel = "Talk to Sales",
  secondaryHref = "/contact",
}: {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="container-page py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface px-6 py-14 md:px-16 md:py-20">
          <div className="grid-texture pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_30%_0%,black,transparent_75%)]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-[110px]" />
          <div className="relative max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong"
              >
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border-strong px-6 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
