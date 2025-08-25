import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimationProvider } from "@/components/animation-provider"
import { RouteTransition } from "@/components/route-transition"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ProgressIndicator } from "@/components/progress-indicator"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Oroscopo AI - Il tuo oroscopo personalizzato",
  description:
    "Scopri il tuo futuro con l'intelligenza artificiale. Oroscopi personalizzati, calcolo ascendente e compatibilità.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className="dark">
      <head>
        <style>{`
html {
  font-family: ${poppins.style.fontFamily};
  --font-sans: ${poppins.variable};
}
        `}</style>
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <AnimationProvider>
            <ProgressIndicator />
            <RouteTransition>{children}</RouteTransition>
            <ScrollToTop />
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
