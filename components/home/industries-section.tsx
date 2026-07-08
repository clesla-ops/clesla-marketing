import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal"
import { industries } from "@/lib/content"

export function IndustriesSection() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Industries Served"
              title="Purpose-built for every corner of pro audio"
              description="Tailored workflows and compliance for the sectors that depend on professional sound."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              View all industries <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" gap={0.04}>
          {industries.slice(0, 12).map((ind) => (
            <StaggerItem key={ind.slug}>
              <Link
                href={`/industries#${ind.slug}`}
                className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong hover:bg-surface-2"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-accent">
                  <ind.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{ind.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{ind.tagline}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
