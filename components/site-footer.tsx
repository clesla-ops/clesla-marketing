import Link from "next/link"
import { ArrowRight, Globe } from "lucide-react"
import { Logo } from "@/components/logo"
import { footerNav } from "@/lib/navigation"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page">
        {/* CTA band */}
        <div className="grid grid-cols-1 gap-8 border-b border-border py-14 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Run your audio commerce on one platform.
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Join the manufacturers, distributors, integrators, and enterprises building on CLESLA.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href="/contact#demo"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong"
            >
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border-strong px-6 text-sm font-medium transition-colors hover:bg-surface-2"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The operating system for professional audio commerce — connecting the global ecosystem from quote to
              install.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4 text-accent" />
              Operating in 40+ countries
            </div>
          </div>
          {footerNav.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-sm font-medium text-foreground">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((leaf) => (
                  <li key={leaf.label}>
                    <Link
                      href={leaf.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {leaf.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border py-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} CLESLA. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Security
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
