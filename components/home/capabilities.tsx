import {
  Boxes,
  Warehouse,
  ClipboardList,
  ShieldCheck,
  FolderKanban,
  Receipt,
  Handshake,
  Globe,
} from "lucide-react"
import { SectionHeading } from "@/components/ui/primitives"
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal"

const capabilities = [
  { icon: ClipboardList, title: "RFQ Management", desc: "Issue structured requests, compare bids, and award with a full audit trail." },
  { icon: Handshake, title: "Supplier Collaboration", desc: "Shared workspaces, messaging, and documents across your entire vendor network." },
  { icon: Boxes, title: "Inventory Management", desc: "Real-time visibility into stock across every warehouse and distribution node." },
  { icon: Warehouse, title: "Warehousing", desc: "Distributed fulfillment centers with automated allocation and replenishment." },
  { icon: FolderKanban, title: "Project Workspaces", desc: "Coordinate multi-stakeholder installations from kickoff to sign-off." },
  { icon: ShieldCheck, title: "Warranty Management", desc: "Track coverage, file claims, and dispatch service without leaving the platform." },
  { icon: Receipt, title: "Enterprise Billing", desc: "Consolidated invoicing, approvals, and spend controls for finance teams." },
  { icon: Globe, title: "Global Operations", desc: "Multi-currency, multi-region compliance built for cross-border commerce." },
]

export function Capabilities() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Platform Capabilities"
            title="One platform for the entire commerce lifecycle"
            description="Every function your audio operation depends on — unified, governed, and built to scale across the enterprise."
          />
        </Reveal>
        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <StaggerItem key={c.title}>
              <div className="group h-full rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-2">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-accent transition-colors group-hover:border-accent/30">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
