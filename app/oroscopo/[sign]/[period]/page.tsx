import { notFound } from "next/navigation"
import { AuroraBackground } from "@/components/aurora-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HoroscopePage } from "@/components/horoscope-page"

const validSigns = [
  "ariete",
  "toro",
  "gemelli",
  "cancro",
  "leone",
  "vergine",
  "bilancia",
  "scorpione",
  "sagittario",
  "capricorno",
  "acquario",
  "pesci",
]

const validPeriods = ["giornaliero", "settimanale", "mensile", "generale"]

interface PageProps {
  params: Promise<{
    sign: string
    period: string
  }>
}

export default async function HoroscopePageRoute({ params }: PageProps) {
  const { sign, period } = await params

  if (!validSigns.includes(sign) || !validPeriods.includes(period)) {
    notFound()
  }

  return (
    <div className="min-h-screen relative">
      <AuroraBackground />
      <Header />
      <main className="relative z-10">
        <HoroscopePage sign={sign} period={period} />
      </main>
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  const params = []
  for (const sign of validSigns) {
    for (const period of validPeriods) {
      params.push({ sign, period })
    }
  }
  return params
}
