import {
  Search,
  Star,
  Package,
  FileText,
  CheckCircle2,
  Clock,
  Truck,
  MapPin,
  Wrench,
  Calendar,
  TrendingUp,
  Users,
} from "lucide-react"

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">{children}</div>
}

export function MarketplaceVisual() {
  const products = [
    { name: "Line Array Speaker System", sku: "LA-4800X", price: "$12,400", stock: "In stock" },
    { name: "Digital Mixing Console 48ch", sku: "DMC-48", price: "$8,950", stock: "In stock" },
    { name: "Wireless Microphone Suite", sku: "WMS-16", price: "$3,200", stock: "Low stock" },
  ]
  return (
    <div>
      <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2.5">
        <Search className="h-4 w-4 text-muted" />
        <span className="text-sm text-muted-foreground">Search 240,000+ verified SKUs</span>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {products.map((p) => (
          <Row key={p.sku}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface-2 text-accent">
                <Package className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium">{p.name}</p>
                <p className="font-mono text-[11px] text-muted">{p.sku}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">{p.price}</p>
              <p className="text-[11px] text-muted-foreground">{p.stock}</p>
            </div>
          </Row>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Star className="h-3.5 w-3.5 fill-accent text-accent" /> 4.9 verified supplier rating
      </div>
    </div>
  )
}

export function ProcurementVisual() {
  const steps = [
    { label: "RFQ issued to 6 suppliers", done: true },
    { label: "3 bids received", done: true },
    { label: "Purchase order approved", done: true },
    { label: "Awaiting fulfillment", done: false },
  ]
  return (
    <div>
      <div className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">PO-2048 · University Auditorium</span>
        </div>
        <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[11px] text-accent">
          Approved
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {steps.map((s) => (
          <div key={s.label} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-2.5">
            {s.done ? (
              <CheckCircle2 className="h-4 w-4 text-accent" />
            ) : (
              <Clock className="h-4 w-4 text-muted" />
            )}
            <span className={s.done ? "text-sm text-foreground" : "text-sm text-muted-foreground"}>{s.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-border bg-background p-3">
          <p className="text-[11px] text-muted">Total value</p>
          <p className="text-lg font-semibold">$247,800</p>
        </div>
        <div className="rounded-lg border border-border bg-background p-3">
          <p className="text-[11px] text-muted">Savings captured</p>
          <p className="text-lg font-semibold text-accent">14.2%</p>
        </div>
      </div>
    </div>
  )
}

export function SupplierVisual() {
  const suppliers = [
    { name: "Meridian AV", region: "North America", score: 98 },
    { name: "Solstice Audio", region: "Europe", score: 95 },
    { name: "Harbor Sound", region: "APAC", score: 92 },
  ]
  return (
    <div className="flex flex-col gap-2">
      {suppliers.map((s) => (
        <Row key={s.name}>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface-2 text-sm font-semibold text-accent">
              {s.name.charAt(0)}
            </span>
            <div>
              <p className="text-sm font-medium">{s.name}</p>
              <p className="text-[11px] text-muted">{s.region}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden h-1.5 w-24 overflow-hidden rounded-full bg-surface-2 sm:block">
              <div className="h-full rounded-full bg-accent" style={{ width: `${s.score}%` }} />
            </div>
            <span className="text-sm font-semibold">{s.score}</span>
          </div>
        </Row>
      ))}
      <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Users className="h-3.5 w-3.5 text-accent" /> 1,200+ collaborating suppliers
      </div>
    </div>
  )
}

export function LogisticsVisual() {
  return (
    <div>
      <div className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Shipment SH-9931</span>
        </div>
        <span className="text-xs text-muted-foreground">ETA 2 days</span>
      </div>
      <div className="mt-4 flex items-center gap-2">
        {["Warehouse", "In transit", "Customs", "Delivery"].map((stage, i) => (
          <div key={stage} className="flex flex-1 flex-col items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${i <= 1 ? "bg-accent" : "bg-border-strong"}`} />
            <span className={`text-center text-[10px] ${i <= 1 ? "text-foreground" : "text-muted"}`}>{stage}</span>
          </div>
        ))}
      </div>
      <div className="relative mt-4 h-1 rounded-full bg-surface-2">
        <div className="absolute left-0 top-0 h-full w-1/3 rounded-full bg-accent" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { icon: MapPin, label: "Rotterdam, NL" },
          { icon: Package, label: "4 pallets" },
          { icon: Clock, label: "On schedule" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg border border-border bg-background p-3">
            <m.icon className="h-4 w-4 text-accent" />
            <p className="mt-1.5 text-[11px] text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function InstallationVisual() {
  const jobs = [
    { label: "Corporate HQ — Conf. AV", crew: "Team A", time: "09:00" },
    { label: "Stadium — PA upgrade", crew: "Team C", time: "13:30" },
    { label: "Church — FOH install", crew: "Team B", time: "16:00" },
  ]
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium">
          <Calendar className="h-4 w-4 text-accent" /> Today&apos;s schedule
        </span>
        <span className="text-xs text-muted-foreground">3 certified crews</span>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {jobs.map((j) => (
          <Row key={j.label}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface-2 text-accent">
                <Wrench className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium">{j.label}</p>
                <p className="text-[11px] text-muted">{j.crew}</p>
              </div>
            </div>
            <span className="font-mono text-xs text-muted-foreground">{j.time}</span>
          </Row>
        ))}
      </div>
    </div>
  )
}

export function AnalyticsVisual() {
  const metrics = [
    { label: "Spend under management", value: "$1.8B" },
    { label: "Avg. cost reduction", value: "16.4%" },
    { label: "Supplier on-time rate", value: "97.1%" },
    { label: "Install success rate", value: "99.2%" },
  ]
  return (
    <div>
      <div className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
        <span className="flex items-center gap-2 text-sm font-medium">
          <TrendingUp className="h-4 w-4 text-accent" /> Portfolio performance
        </span>
        <span className="text-xs text-accent">Live</span>
      </div>
      <div className="mt-3 flex h-28 items-end gap-1">
        {[30, 45, 38, 52, 48, 61, 55, 70, 64, 78, 72, 85].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-accent/20 to-accent" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-lg border border-border bg-background p-3">
            <p className="text-lg font-semibold">{m.value}</p>
            <p className="text-[11px] text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
