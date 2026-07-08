import type { LucideIcon } from "lucide-react"
import {
  Store,
  ShoppingCart,
  Truck,
  Wrench,
  Factory,
  Network,
  BarChart3,
  Boxes,
  Warehouse,
  FileText,
  Users,
  Building2,
  GraduationCap,
  Church,
  Landmark,
  HeartPulse,
  Briefcase,
  Hotel,
  Music,
  Trophy,
  Radio,
  Mic,
  Layers,
  ClipboardList,
  Handshake,
  FolderKanban,
  ShieldCheck,
  Receipt,
  BookOpen,
  Newspaper,
  LifeBuoy,
  Code2,
} from "lucide-react"

export type NavLeaf = {
  label: string
  href: string
  description?: string
  icon?: LucideIcon
}

export type NavColumn = {
  title: string
  items: NavLeaf[]
}

export type NavItem = {
  label: string
  href?: string
  columns?: NavColumn[]
  featured?: {
    title: string
    description: string
    href: string
  }
}

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    columns: [
      {
        title: "Commerce",
        items: [
          { label: "Audio Commerce", href: "/solutions#audio-commerce", icon: Store, description: "Unified transaction layer" },
          { label: "Enterprise Marketplace", href: "/marketplace", icon: Layers, description: "Verified global catalog" },
          { label: "Procurement", href: "/procurement", icon: ShoppingCart, description: "Sourcing to settlement" },
          { label: "RFQ Management", href: "/solutions#rfq", icon: ClipboardList, description: "Structured bidding" },
        ],
      },
      {
        title: "Operations",
        items: [
          { label: "Vendor Management", href: "/solutions#vendor", icon: Handshake, description: "Supplier lifecycle" },
          { label: "Inventory Management", href: "/solutions#inventory", icon: Boxes, description: "Real-time stock" },
          { label: "Warehousing", href: "/solutions#warehousing", icon: Warehouse, description: "Distributed nodes" },
          { label: "Project Workspaces", href: "/solutions#workspaces", icon: FolderKanban, description: "Team execution" },
        ],
      },
      {
        title: "Field & Finance",
        items: [
          { label: "Logistics Coordination", href: "/logistics", icon: Truck, description: "Global freight" },
          { label: "Installation Scheduling", href: "/installation-network", icon: Wrench, description: "Certified crews" },
          { label: "Warranty Management", href: "/solutions#warranty", icon: ShieldCheck, description: "Claims & service" },
          { label: "Enterprise Billing", href: "/solutions#billing", icon: Receipt, description: "Consolidated invoicing" },
        ],
      },
    ],
    featured: {
      title: "The full platform",
      description: "See how CLESLA unifies the entire professional audio commerce lifecycle.",
      href: "/solutions",
    },
  },
  {
    label: "Industries",
    href: "/industries",
    columns: [
      {
        title: "Institutions",
        items: [
          { label: "Churches", href: "/industries#churches", icon: Church },
          { label: "Schools", href: "/industries#schools", icon: GraduationCap },
          { label: "Universities", href: "/industries#universities", icon: GraduationCap },
          { label: "Government", href: "/industries#government", icon: Landmark },
          { label: "Healthcare", href: "/industries#healthcare", icon: HeartPulse },
        ],
      },
      {
        title: "Enterprise",
        items: [
          { label: "Corporate", href: "/industries#corporate", icon: Briefcase },
          { label: "Hospitality", href: "/industries#hospitality", icon: Hotel },
          { label: "Sports Venues", href: "/industries#sports", icon: Trophy },
          { label: "Entertainment", href: "/industries#entertainment", icon: Music },
          { label: "Broadcast", href: "/industries#broadcast", icon: Radio },
        ],
      },
      {
        title: "Trade & Studio",
        items: [
          { label: "Recording Studios", href: "/industries#studios", icon: Mic },
          { label: "Rental & Event Production", href: "/industries#rental", icon: Music },
          { label: "Manufacturers", href: "/manufacturers", icon: Factory },
          { label: "Distributors", href: "/distributors", icon: Network },
          { label: "System Integrators", href: "/industries#integrators", icon: Wrench },
        ],
      },
    ],
    featured: {
      title: "Built for your sector",
      description: "Tailored workflows for every corner of the professional audio industry.",
      href: "/industries",
    },
  },
  {
    label: "Platform",
    columns: [
      {
        title: "Buy",
        items: [
          { label: "Marketplace", href: "/marketplace", icon: Store, description: "Source verified gear" },
          { label: "Procurement", href: "/procurement", icon: ShoppingCart, description: "Enterprise purchasing" },
        ],
      },
      {
        title: "Move",
        items: [
          { label: "Logistics", href: "/logistics", icon: Truck, description: "Warehousing & freight" },
          { label: "Installation Network", href: "/installation-network", icon: Wrench, description: "Certified field teams" },
        ],
      },
      {
        title: "Supply",
        items: [
          { label: "Manufacturers", href: "/manufacturers", icon: Factory, description: "Distribution at scale" },
          { label: "Distributors", href: "/distributors", icon: Network, description: "Channel network" },
          { label: "Analytics", href: "/solutions#analytics", icon: BarChart3, description: "Enterprise insight" },
        ],
      },
    ],
    featured: {
      title: "One connected platform",
      description: "From first quote to final install — everything runs on CLESLA.",
      href: "/solutions",
    },
  },
  {
    label: "Resources",
    href: "/resources",
    columns: [
      {
        title: "Learn",
        items: [
          { label: "Resource Library", href: "/resources", icon: BookOpen, description: "Guides & playbooks" },
          { label: "Insights", href: "/resources#insights", icon: Newspaper, description: "Industry reporting" },
          { label: "Documentation", href: "/resources#docs", icon: Code2, description: "Platform reference" },
        ],
      },
      {
        title: "Support",
        items: [
          { label: "Help Center", href: "/resources#help", icon: LifeBuoy, description: "Answers & FAQs" },
          { label: "Customer Stories", href: "/company#customers", icon: Users, description: "Proven outcomes" },
          { label: "Documentation", href: "/resources#docs", icon: FileText, description: "Reference specs" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
]

export const utilityNav: NavLeaf[] = [
  { label: "Contact", href: "/contact" },
  { label: "Sign In", href: "#" },
]

export const footerNav: NavColumn[] = [
  {
    title: "Platform",
    items: [
      { label: "Marketplace", href: "/marketplace" },
      { label: "Procurement", href: "/procurement" },
      { label: "Logistics", href: "/logistics" },
      { label: "Installation Network", href: "/installation-network" },
      { label: "Solutions", href: "/solutions" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Network",
    items: [
      { label: "Manufacturers", href: "/manufacturers" },
      { label: "Distributors", href: "/distributors" },
      { label: "Industries", href: "/industries" },
      { label: "System Integrators", href: "/industries#integrators" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Resource Library", href: "/resources" },
      { label: "Documentation", href: "/resources#docs" },
      { label: "Insights", href: "/resources#insights" },
      { label: "Help Center", href: "/resources#help" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/company" },
      { label: "Customers", href: "/company#customers" },
      { label: "Contact", href: "/contact" },
      { label: "Request a Demo", href: "/contact#demo" },
    ],
  },
]
