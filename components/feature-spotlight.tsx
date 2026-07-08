import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Eyebrow } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import { cn } from "@/lib/utils"

export function FeatureSpotlight({
  eyebrow,
  title,
  description,
  bullets,
  cta,
  visual,
  reverse,
  id,
}: {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  cta?: { label: string; href: string }
  visual: ReactNode
  reverse?: boolean
  id?: string
}) {
  return (
    <section id={id} className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className={cn(reverse && "lg:order-2")}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
            <ul className="mt-7 flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                    <Check className="h-3 w-3 text-accent" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
            {cta && (
              <Link
                href={cta.href}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
              >
                {cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </Reveal>

          <Reveal delay={0.1} className={cn(reverse && "lg:order-1")}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-accent/[0.04] blur-2xl" aria-hidden />
              <div className="relative rounded-2xl border border-border bg-surface p-5 md:p-6">{visual}</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
