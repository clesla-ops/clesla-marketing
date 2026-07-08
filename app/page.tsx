import { PageShell } from "@/components/page-shell"
import { Hero } from "@/components/home/hero"
import { TrustedNetwork } from "@/components/home/trusted"
import { FeatureSpotlight } from "@/components/feature-spotlight"
import {
  MarketplaceVisual,
  ProcurementVisual,
  SupplierVisual,
  LogisticsVisual,
  InstallationVisual,
  AnalyticsVisual,
} from "@/components/home/spotlight-visuals"
import { Capabilities } from "@/components/home/capabilities"
import { Workflow } from "@/components/home/workflow"
import { Testimonials } from "@/components/home/testimonials"
import { IndustriesSection } from "@/components/home/industries-section"
import { FaqSection } from "@/components/home/faq-section"
import { FinalCta } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <TrustedNetwork />

      <FeatureSpotlight
        eyebrow="Marketplace"
        title="A verified global catalog for professional audio"
        description="Source from a curated marketplace of manufacturers and distributors — with verified inventory, transparent pricing, and enterprise purchasing controls."
        bullets={[
          "240,000+ verified SKUs across every audio category",
          "Real-time stock and lead times from the source",
          "Supplier ratings, compliance, and audit history",
        ]}
        cta={{ label: "Explore the Marketplace", href: "/marketplace" }}
        visual={<MarketplaceVisual />}
      />

      <FeatureSpotlight
        eyebrow="Procurement Platform"
        title="Procurement built for enterprise governance"
        description="Run the entire sourcing cycle — from RFQ to purchase order to settlement — with approvals, budgets, and a complete audit trail."
        bullets={[
          "Structured RFQs with side-by-side bid comparison",
          "Configurable approval flows and spend controls",
          "Consolidated purchase orders across suppliers",
        ]}
        cta={{ label: "See Procurement", href: "/procurement" }}
        visual={<ProcurementVisual />}
        reverse
      />

      <FeatureSpotlight
        eyebrow="Supplier Ecosystem"
        title="Collaborate across your entire vendor network"
        description="Bring manufacturers, distributors, and suppliers into shared workspaces with messaging, documents, and performance scoring."
        bullets={[
          "Shared workspaces for every supplier relationship",
          "Performance scoring and on-time delivery tracking",
          "Centralized documents, contracts, and compliance",
        ]}
        cta={{ label: "Meet the Network", href: "/distributors" }}
        visual={<SupplierVisual />}
      />

      <FeatureSpotlight
        eyebrow="Logistics Platform"
        title="Warehousing and logistics, coordinated end to end"
        description="Manage inventory across distributed warehouses and orchestrate cross-border freight with real-time tracking and exception alerts."
        bullets={[
          "Distributed warehousing with automated allocation",
          "Cross-border freight coordination and customs",
          "Live shipment tracking with proactive alerts",
        ]}
        cta={{ label: "Explore Logistics", href: "/logistics" }}
        visual={<LogisticsVisual />}
        reverse
      />

      <FeatureSpotlight
        eyebrow="Installation Network"
        title="Certified installation crews, dispatched on demand"
        description="Connect procurement directly to on-site execution with scheduling, project workspaces, and field service coordination."
        bullets={[
          "Certified installation partners worldwide",
          "Scheduling and dispatch from a single view",
          "Warranty management and field service workflows",
        ]}
        cta={{ label: "See the Installation Network", href: "/installation-network" }}
        visual={<InstallationVisual />}
      />

      <FeatureSpotlight
        eyebrow="Enterprise Analytics"
        title="Executive visibility across every transaction"
        description="Measure spend, supplier performance, and installation outcomes with analytics designed for enterprise decision-making."
        bullets={[
          "Portfolio-wide spend and savings analytics",
          "Supplier and installation performance benchmarks",
          "Exportable reporting for finance and leadership",
        ]}
        cta={{ label: "Explore Analytics", href: "/solutions#analytics" }}
        visual={<AnalyticsVisual />}
        reverse
      />

      <Capabilities />
      <Workflow />
      <Testimonials />
      <IndustriesSection />
      <FaqSection />
      <FinalCta />
    </PageShell>
  )
}
