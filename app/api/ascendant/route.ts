import { type NextRequest, NextResponse } from "next/server"

// Mock timezone data for Italian cities
const timezoneData: Record<string, { tzId: string; offsetMinutes: number }> = {
  roma: { tzId: "Europe/Rome", offsetMinutes: 120 },
  milano: { tzId: "Europe/Rome", offsetMinutes: 120 },
  napoli: { tzId: "Europe/Rome", offsetMinutes: 120 },
  torino: { tzId: "Europe/Rome", offsetMinutes: 120 },
  palermo: { tzId: "Europe/Rome", offsetMinutes: 120 },
  genova: { tzId: "Europe/Rome", offsetMinutes: 120 },
  bologna: { tzId: "Europe/Rome", offsetMinutes: 120 },
  firenze: { tzId: "Europe/Rome", offsetMinutes: 120 },
  bari: { tzId: "Europe/Rome", offsetMinutes: 120 },
  catania: { tzId: "Europe/Rome", offsetMinutes: 120 },
}

// Mock ascendant calculations based on time
const ascendantCalculations = [
  {
    ascendant: "ariete",
    description:
      "Con l'Ascendente in Ariete, proietti un'immagine di energia, determinazione e leadership. Gli altri ti vedono come una persona dinamica e coraggiosa, sempre pronta all'azione.",
  },
  {
    ascendant: "toro",
    description:
      "L'Ascendente in Toro ti dona un'aura di stabilità e affidabilità. Appari come una persona pratica, determinata e con un forte senso estetico.",
  },
  {
    ascendant: "gemelli",
    description:
      "Con l'Ascendente in Gemelli, sembri una persona curiosa, comunicativa e versatile. Gli altri ti percepiscono come intelligente e sempre interessato a nuove esperienze.",
  },
  {
    ascendant: "cancro",
    description:
      "L'Ascendente in Cancro ti conferisce un'immagine di sensibilità e protezione. Appari come una persona empatica, intuitiva e profondamente legata alla famiglia.",
  },
  {
    ascendant: "leone",
    description:
      "Con l'Ascendente in Leone, proietti carisma e sicurezza. Gli altri ti vedono come una persona generosa, creativa e naturalmente portata al comando.",
  },
  {
    ascendant: "vergine",
    description:
      "L'Ascendente in Vergine ti dona un'immagine di precisione e affidabilità. Appari come una persona metodica, attenta ai dettagli e sempre pronta ad aiutare.",
  },
  {
    ascendant: "bilancia",
    description:
      "Con l'Ascendente in Bilancia, sembri una persona elegante, diplomatica e equilibrata. Gli altri ti percepiscono come armoniosa e con un forte senso della giustizia.",
  },
  {
    ascendant: "scorpione",
    description:
      "L'Ascendente in Scorpione ti conferisce un'aura di mistero e intensità. Appari come una persona magnetica, profonda e con una forte presenza.",
  },
  {
    ascendant: "sagittario",
    description:
      "Con l'Ascendente in Sagittario, proietti ottimismo e avventura. Gli altri ti vedono come una persona filosofica, espansiva e sempre in cerca di nuovi orizzonti.",
  },
  {
    ascendant: "capricorno",
    description:
      "L'Ascendente in Capricorno ti dona un'immagine di serietà e ambizione. Appari come una persona responsabile, determinata e orientata al successo.",
  },
  {
    ascendant: "acquario",
    description:
      "Con l'Ascendente in Acquario, sembri una persona originale e indipendente. Gli altri ti percepiscono come innovativa, umanitaria e sempre un passo avanti.",
  },
  {
    ascendant: "pesci",
    description:
      "L'Ascendente in Pesci ti conferisce un'aura di sensibilità e spiritualità. Appari come una persona compassionevole, artistica e profondamente intuitiva.",
  },
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { date, time, place } = body

    if (!date || !time || !place) {
      return NextResponse.json({ error: "Tutti i campi sono obbligatori" }, { status: 400 })
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1200))

    // Mock place normalization
    const normalizedPlace = place.toLowerCase().replace(/[^a-z]/g, "")
    const cityKey = Object.keys(timezoneData).find((city) => normalizedPlace.includes(city)) || "roma"

    // Mock ascendant calculation based on time
    const [hours] = time.split(":").map(Number)
    const ascendantIndex = Math.floor((hours * 2) % 12)
    const result = ascendantCalculations[ascendantIndex]

    return NextResponse.json({
      place: `${place.charAt(0).toUpperCase() + place.slice(1)}, Italia`,
      tz: timezoneData[cityKey],
      result,
    })
  } catch (error) {
    return NextResponse.json({ error: "Errore nel calcolo dell'ascendente" }, { status: 500 })
  }
}
