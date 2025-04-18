import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { QueryProvider } from "@/components/query-provider"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ByteMeld - Bridging Code & Creativity for Impactful Solutions",
  description: "Professional website and mobile app development, AI tools and integrations, automations, and CRM solutions.",
  keywords: "ByteMeld, web development, mobile apps, AI tools, automation, CRM, software agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bytemeld.com",
    title: "ByteMeld - Bridging Code & Creativity for Impactful Solutions",
    description: "Professional website and mobile app development, AI tools and integrations, automations, and CRM solutions.",
    siteName: "ByteMeld",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteMeld - Bridging Code & Creativity for Impactful Solutions",
    description: "Professional website and mobile app development, AI tools and integrations, automations, and CRM solutions.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <QueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </QueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}