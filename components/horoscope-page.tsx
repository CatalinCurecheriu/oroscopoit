"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { HoroscopeTabs } from "./horoscope-tabs"
import { EnhancedHoroscopeCard } from "./enhanced-horoscope-card"
import { CompatibilityPanel } from "./compatibility-panel"
import { SkyWidget } from "./sky-widget"
import { MotionSection } from "./motion-section"
import { HoroscopeSkeleton } from "./horoscope-skeleton"

interface HoroscopeData {
  source: string
  sign: string
  period: string
  date: string
  name: string
  icon: string
  text: string
  sections: Array<{
    title: string
    content: string
  }>
  extras: {
    lucky_numbers: number[]
    lucky_color: string
    mood: string
    best_time: string
    keywords: string[]
  }
}

interface HoroscopePageProps {
  sign: string
  period: string
}

export function HoroscopePage({ sign, period }: HoroscopePageProps) {
  const [data, setData] = useState<HoroscopeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchHoroscope = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/horoscope?sign=${sign}&period=${period}`)
        if (!response.ok) {
          throw new Error("Errore nel caricamento dell'oroscopo")
        }
        const horoscopeData = await response.json()
        setData(horoscopeData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Errore sconosciuto")
      } finally {
        setLoading(false)
      }
    }

    fetchHoroscope()
  }, [sign, period])

  const handleTabChange = (newPeriod: string) => {
    // Scroll to top when changing tabs
    window.scrollTo({ top: 0, behavior: "smooth" })
    router.push(`/oroscopo/${sign}/${newPeriod}`)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <HoroscopeSkeleton />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-4">Oops! Qualcosa è andato storto</h2>
          <p className="text-muted-foreground mb-6">{error || "Impossibile caricare l'oroscopo"}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Riprova
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <MotionSection>
        <HoroscopeTabs currentSign={sign} currentPeriod={period} onTabChange={handleTabChange} />
      </MotionSection>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <MotionSection delay={0.1}>
            <EnhancedHoroscopeCard data={data} />
          </MotionSection>

          <MotionSection delay={0.2}>
            <CompatibilityPanel currentSign={sign} />
          </MotionSection>
        </div>

        <div className="space-y-8">
          <MotionSection delay={0.3}>
            <SkyWidget />
          </MotionSection>
        </div>
      </div>
    </div>
  )
}
