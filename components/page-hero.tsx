import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Eyebrow } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Request a Demo", href: "/contact#demo" },
  secondaryCta,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="container-page relative py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.02]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong"
            >
              {primaryCta.label} <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-md border border-border-strong px-6 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
