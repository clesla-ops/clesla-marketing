import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="CLESLA home">
      <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-accent text-accent-foreground">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <rect x="1" y="7" width="2.2" height="4" rx="1.1" fill="currentColor" />
          <rect x="4.6" y="4.5" width="2.2" height="9" rx="1.1" fill="currentColor" />
          <rect x="8.2" y="1.5" width="2.2" height="15" rx="1.1" fill="currentColor" />
          <rect x="11.8" y="5" width="2.2" height="8" rx="1.1" fill="currentColor" />
          <rect x="15.4" y="7.5" width="2.2" height="3" rx="1.1" fill="currentColor" />
        </svg>
      </span>
      {showWordmark && (
        <span className="text-[1.05rem] font-semibold tracking-tight text-foreground">
          CLESLA
        </span>
      )}
    </Link>
  )
}
