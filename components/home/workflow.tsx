import { Search, FileCheck2, Truck, Wrench, LineChart } from "lucide-react"
import { SectionHeading } from "@/components/ui/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal"

const steps = [
  { icon: Search, step: "01", title: "Source & specify", desc: "Discover verified products across a global catalog and build accurate specifications." },
  { icon: FileCheck2, step: "02", title: "Quote & procure", desc: "Run RFQs, compare bids, and issue purchase orders with built-in approvals." },
  { icon: Truck, step: "03", title: "Warehouse & ship", desc: "Coordinate inventory, warehousing, and cross-border logistics in one flow." },
  { icon: Wrench, step: "04", title: "Install & service", desc: "Dispatch certified installation crews and manage warranties and field service." },
  { icon: LineChart, step: "05", title: "Analyze & optimize", desc: "Measure spend, performance, and outcomes with enterprise analytics." },
]

export function Workflow() {
  return (
    <section className="border-b border-border bg-surface/40 py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Workflow Overview"
            title="From first quote to final install"
            description="CLESLA connects every stage of the audio commerce lifecycle into a single, traceable workflow."
          />
        </Reveal>
        <Stagger className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <StaggerItem key={s.step}>
              <div className="relative h-full rounded-xl border border-border bg-background p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-muted">{s.step}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && (
                  <span className="absolute -right-2 top-11 hidden h-px w-4 bg-border-strong md:block" aria-hidden />
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
