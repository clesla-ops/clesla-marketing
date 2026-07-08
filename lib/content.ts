import type { LucideIcon } from "lucide-react"
import {
  Church,
  GraduationCap,
  Landmark,
  HeartPulse,
  Briefcase,
  Hotel,
  Music,
  Trophy,
  Radio,
  Mic,
  Factory,
  Network,
  Wrench,
  Calendar,
  Disc3,
} from "lucide-react"

export type Industry = {
  slug: string
  name: string
  icon: LucideIcon
  tagline: string
}

export const industries: Industry[] = [
  { slug: "churches", name: "Churches", icon: Church, tagline: "Worship-grade sound, installed and supported." },
  { slug: "schools", name: "Schools", icon: GraduationCap, tagline: "Reliable AV for classrooms and assemblies." },
  { slug: "universities", name: "Universities", icon: GraduationCap, tagline: "Campus-wide audio infrastructure at scale." },
  { slug: "government", name: "Government", icon: Landmark, tagline: "Compliant procurement and secure deployments." },
  { slug: "healthcare", name: "Healthcare", icon: HeartPulse, tagline: "Clear communication across facilities." },
  { slug: "corporate", name: "Corporate", icon: Briefcase, tagline: "Boardroom to campus conferencing." },
  { slug: "hospitality", name: "Hospitality", icon: Hotel, tagline: "Immersive audio for guest experiences." },
  { slug: "entertainment", name: "Entertainment", icon: Music, tagline: "Production-ready systems for live venues." },
  { slug: "sports", name: "Sports Venues", icon: Trophy, tagline: "Stadium-scale PA and distribution." },
  { slug: "broadcast", name: "Broadcast", icon: Radio, tagline: "Studio and transmission audio chains." },
  { slug: "studios", name: "Recording Studios", icon: Mic, tagline: "Precision monitoring and signal flow." },
  { slug: "rental", name: "Rental Companies", icon: Calendar, tagline: "Fleet inventory and turnaround logistics." },
  { slug: "event-production", name: "Event Production", icon: Music, tagline: "Rapid sourcing and on-site coordination." },
  { slug: "djs", name: "DJs", icon: Disc3, tagline: "Pro gear sourcing and fast fulfillment." },
  { slug: "manufacturers", name: "Manufacturers", icon: Factory, tagline: "Distribution and channel management." },
  { slug: "distributors", name: "Distributors", icon: Network, tagline: "Multi-region network operations." },
  { slug: "integrators", name: "System Integrators", icon: Wrench, tagline: "End-to-end project execution." },
]

export type Faq = { q: string; a: string }

export const homeFaqs: Faq[] = [
  {
    q: "What exactly is CLESLA?",
    a: "CLESLA is an enterprise operating system for professional audio commerce. It unifies marketplace, procurement, supplier collaboration, inventory, warehousing, logistics, installation, and analytics into a single platform — replacing the disconnected tools most organizations stitch together today.",
  },
  {
    q: "Is CLESLA just an online store for audio equipment?",
    a: "No. While CLESLA includes a verified marketplace, it is infrastructure for the entire commerce lifecycle — from RFQs and purchase orders to warehousing, cross-border logistics, field installation, and enterprise reporting.",
  },
  {
    q: "Who uses CLESLA?",
    a: "Manufacturers, distributors, system integrators, rental companies, and enterprise procurement teams across churches, schools, universities, government, healthcare, corporate, hospitality, sports, broadcast, and entertainment.",
  },
  {
    q: "Can CLESLA scale with our organization?",
    a: "Yes. CLESLA is built for multi-region, multi-currency operations with governance, approvals, and analytics designed for organizations coordinating thousands of transactions across global teams.",
  },
  {
    q: "How does CLESLA handle installation and field services?",
    a: "The platform includes a certified installation network with scheduling, project workspaces, warranty management, and field service coordination — so procurement and delivery connect directly to on-site execution.",
  },
  {
    q: "How do we get started?",
    a: "Request a demo and our team will map CLESLA to your operation. Most organizations begin with the modules most critical to them and expand across the platform over time.",
  },
]
