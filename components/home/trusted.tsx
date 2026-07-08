import { Reveal } from "@/components/ui/reveal"

const partners = [
  "Meridian AV",
  "Northgate Systems",
  "Apex Integrators",
  "Solstice Audio",
  "Vantage Pro",
  "Harbor Sound",
  "Continental AV",
  "Beacon Broadcast",
]

export function TrustedNetwork() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="container-page py-12">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Powering the global professional audio ecosystem
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {partners.map((name, i) => (
            <Reveal key={name} delay={i * 0.04} className="flex justify-center">
              <span className="text-sm font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
