import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface-2 px-3 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent",
        className,
      )}
    >
      <span className="h-px w-6 bg-accent/60" aria-hidden />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed text-muted-foreground md:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="container-page">{children}</div>
    </section>
  )
}

export function SurfaceCard({
  children,
  className,
  interactive,
}: {
  children: ReactNode
  className?: string
  interactive?: boolean
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-6",
        interactive && "transition-colors duration-200 hover:border-border-strong hover:bg-surface-2",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Stat({ value, label, className }: { value: string; label: string; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}
