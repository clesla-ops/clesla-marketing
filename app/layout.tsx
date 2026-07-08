import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "CLESLA — The Operating System for Professional Audio Commerce",
    template: "%s — CLESLA",
  },
  description:
    "CLESLA is the enterprise operating system powering the global professional audio ecosystem — unifying marketplace, procurement, logistics, installation, and analytics into one platform.",
  keywords: [
    "professional audio",
    "audio commerce",
    "enterprise procurement",
    "audio logistics",
    "installation network",
    "supplier collaboration",
    "audio marketplace",
  ],
  metadataBase: new URL("https://clesla.online"),
  openGraph: {
    title: "CLESLA — The Operating System for Professional Audio Commerce",
    description:
      "The enterprise platform managing the complete lifecycle of professional audio commerce worldwide.",
    url: "https://clesla.online",
    siteName: "CLESLA",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
