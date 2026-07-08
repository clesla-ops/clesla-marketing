"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Menu, X, Search, ArrowRight } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { primaryNav, type NavItem } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || openMenu
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <div key={item.label} onMouseEnter={() => setOpenMenu(item.columns ? item.label : null)}>
                {item.columns ? (
                  <button
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      openMenu === item.label ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                    aria-expanded={openMenu === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 transition-transform", openMenu === item.label && "rotate-180")}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign In
          </Link>
          <Button href="/contact#demo" size="sm">
            Request Demo
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {openMenu && (
          <MegaMenu item={primaryNav.find((i) => i.label === openMenu)!} />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>{mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}</AnimatePresence>
    </header>
  )
}

function MegaMenu({ item }: { item: NavItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute inset-x-0 top-16 hidden border-b border-border bg-background/95 backdrop-blur-xl lg:block"
    >
      <div className="container-page grid grid-cols-12 gap-8 py-8">
        <div className="col-span-9 grid grid-cols-3 gap-8">
          {item.columns?.map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">{col.title}</p>
              <ul className="flex flex-col gap-1">
                {col.items.map((leaf) => (
                  <li key={leaf.label}>
                    <Link
                      href={leaf.href}
                      className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-surface-2"
                    >
                      {leaf.icon && (
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-accent">
                          <leaf.icon className="h-4 w-4" />
                        </span>
                      )}
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{leaf.label}</span>
                        {leaf.description && (
                          <span className="text-xs text-muted-foreground">{leaf.description}</span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {item.featured && (
          <div className="col-span-3">
            <Link
              href={item.featured.href}
              className="group flex h-full flex-col justify-between rounded-xl border border-border bg-surface-2 p-6 transition-colors hover:border-border-strong"
            >
              <div className="grid-texture mb-6 h-24 rounded-lg border border-border" aria-hidden />
              <div>
                <p className="text-base font-semibold text-foreground">{item.featured.title}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.featured.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden"
    >
      <div className="container-page flex flex-col gap-1 py-6">
        {primaryNav.map((item) => (
          <div key={item.label} className="border-b border-border py-1">
            {item.columns ? (
              <>
                <button
                  className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-foreground"
                  onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                >
                  {item.label}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", expanded === item.label && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {expanded === item.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-4 pb-4">
                        {item.columns.map((col) => (
                          <div key={col.title}>
                            <p className="mb-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">{col.title}</p>
                            {col.items.map((leaf) => (
                              <Link
                                key={leaf.label}
                                href={leaf.href}
                                onClick={onClose}
                                className="block py-2 text-sm text-muted-foreground"
                              >
                                {leaf.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link href={item.href ?? "#"} onClick={onClose} className="block py-3 text-base font-medium text-foreground">
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <div className="mt-6 flex flex-col gap-3">
          <Button href="/contact#demo" size="lg" onClick={onClose}>
            Request Demo
          </Button>
          <Button href="#" variant="outline" size="lg" onClick={onClose}>
            Sign In
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
