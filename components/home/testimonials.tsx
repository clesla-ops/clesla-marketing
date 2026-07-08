import { SectionHeading, Stat } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"

const stories = [
  {
    quote:
      "CLESLA replaced six disconnected tools. We now run procurement, logistics, and installs for 40 venues from a single operations view.",
    name: "Daniela Rojas",
    role: "VP of Operations, Continental AV",
    metric: "31% faster project delivery",
  },
  {
    quote:
      "The RFQ and supplier collaboration tools alone paid for the platform. Our sourcing cycle went from weeks to days.",
    name: "Marcus Feld",
    role: "Director of Procurement, Northgate Systems",
    metric: "$2.4M annual savings",
  },
  {
    quote:
      "Managing a distributor network across three continents finally feels manageable. Inventory and analytics are unmatched.",
    name: "Priya Nair",
    role: "COO, Harbor Sound",
    metric: "40+ countries coordinated",
  },
]

export function Testimonials() {
  return (
    <section id="customers" className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Customer Success"
            title="Trusted by the organizations that move the industry"
            description="From integrators to enterprise procurement teams, CLESLA delivers measurable operational impact."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-7">
                <blockquote className="text-pretty text-base leading-relaxed text-foreground/90">
                  &ldquo;{s.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="text-sm font-semibold">{s.name}</p>
                  <p className="text-sm text-muted-foreground">{s.role}</p>
                  <p className="mt-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    {s.metric}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 grid grid-cols-2 gap-6 rounded-xl border border-border bg-surface/50 p-8 md:grid-cols-4">
            <Stat value="2,400+" label="Organizations" />
            <Stat value="$1.8B+" label="Commerce processed" />
            <Stat value="240K+" label="Verified SKUs" />
            <Stat value="99.2%" label="Install success rate" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
