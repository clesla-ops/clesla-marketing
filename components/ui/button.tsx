import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground hover:bg-accent-strong shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]",
        secondary:
          "bg-surface-2 text-foreground border border-border-strong hover:bg-elevated hover:border-muted",
        ghost: "text-foreground/80 hover:text-foreground hover:bg-surface-2",
        outline: "border border-border-strong text-foreground hover:bg-surface-2 hover:border-muted",
        link: "text-accent hover:text-accent-strong underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-[0.95rem]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string
  }

export function Button({ className, variant, size, href, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className)
  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {props.children}
      </Link>
    )
  }
  return <button className={classes} {...props} />
}

export { buttonVariants }
