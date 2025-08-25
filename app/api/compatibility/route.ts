import { type NextRequest, NextResponse } from "next/server"

// Compatibility matrix - simplified for demo
const compatibilityMatrix: Record<string, Record<string, any>> = {
  ariete: {
    ariete: { love: 85, communication: 90, values: 80, rhythm: 95 },
    toro: { love: 65, communication: 60, values: 70, rhythm: 45 },
    gemelli: { love: 88, communication: 95, values: 75, rhythm: 85 },
    cancro: { love: 70, communication: 65, values: 85, rhythm: 60 },
    leone: { love: 92, communication: 88, values: 90, rhythm: 90 },
    vergine: { love: 60, communication: 70, values: 75, rhythm: 55 },
    bilancia: { love: 85, communication: 90, values: 80, rhythm: 75 },
    scorpione: { love: 78, communication: 75, values: 85, rhythm: 80 },
    sagittario: { love: 90, communication: 85, values: 88, rhythm: 92 },
    capricorno: { love: 68, communication: 65, values: 80, rhythm: 60 },
    acquario: { love: 82, communication: 88, values: 75, rhythm: 85 },
    pesci: { love: 75, communication: 70, values: 80, rhythm: 65 },
  },
  // Add more signs - for demo, we'll generate them dynamically
}

const compatibilityTexts: Record<string, Record<string, string>> = {
  love: {
    high: "Una connessione passionale e profonda vi unisce. L'attrazione è magnetica e la chimica è palpabile.",
    medium: "L'amore può sbocciare con il tempo e la comprensione reciproca. Serve pazienza e dedizione.",
    low: "Le differenze caratteriali possono creare sfide nell'intimità. Richiede molto lavoro per funzionare.",
  },
  communication: {
    high: "Vi capite al volo! La comunicazione fluisce naturalmente e raramente ci sono malintesi.",
    medium: "Generalmente vi comprendete, anche se a volte servono chiarimenti per evitare incomprensioni.",
    low: "La comunicazione può essere difficile. Parlate lingue diverse e serve molto sforzo per capirsi.",
  },
  values: {
    high: "Condividete gli stessi principi fondamentali. I vostri valori si allineano perfettamente.",
    medium: "Avete alcuni valori in comune, ma su certi aspetti potreste avere visioni diverse.",
    low: "Le vostre priorità e valori sono molto diversi. Serve rispetto reciproco per convivere.",
  },
  rhythm: {
    high: "Il vostro ritmo di vita è perfettamente sincronizzato. Vi muovete all'unisono.",
    medium: "Generalmente andate d'accordo sui tempi, con qualche piccolo aggiustamento necessario.",
    low: "Avete ritmi di vita molto diversi. Uno è veloce, l'altro lento. Serve compromesso.",
  },
}

function generateCompatibility(sign1: string, sign2: string) {
  // If we have predefined data, use it
  if (compatibilityMatrix[sign1]?.[sign2]) {
    return compatibilityMatrix[sign1][sign2]
  }

  // Otherwise generate based on sign characteristics
  const baseCompatibility = Math.floor(Math.random() * 40) + 50 // 50-90%
  const variation = () => Math.floor(Math.random() * 20) - 10 // -10 to +10

  return {
    love: Math.max(30, Math.min(100, baseCompatibility + variation())),
    communication: Math.max(30, Math.min(100, baseCompatibility + variation())),
    values: Math.max(30, Math.min(100, baseCompatibility + variation())),
    rhythm: Math.max(30, Math.min(100, baseCompatibility + variation())),
  }
}

function getCompatibilityText(category: string, score: number): string {
  const level = score >= 80 ? "high" : score >= 60 ? "medium" : "low"
  return compatibilityTexts[category]?.[level] || "Analisi non disponibile."
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sign1, sign2 } = body

    if (!sign1 || !sign2) {
      return NextResponse.json({ error: "Entrambi i segni sono obbligatori" }, { status: 400 })
    }

    if (sign1 === sign2) {
      return NextResponse.json({ error: "Seleziona due segni diversi" }, { status: 400 })
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const scores = generateCompatibility(sign1, sign2)
    const overall = Math.round((scores.love + scores.communication + scores.values + scores.rhythm) / 4)

    const analysis = {
      love: {
        score: scores.love,
        text: getCompatibilityText("love", scores.love),
      },
      communication: {
        score: scores.communication,
        text: getCompatibilityText("communication", scores.communication),
      },
      values: {
        score: scores.values,
        text: getCompatibilityText("values", scores.values),
      },
      rhythm: {
        score: scores.rhythm,
        text: getCompatibilityText("rhythm", scores.rhythm),
      },
    }

    return NextResponse.json({
      sign1,
      sign2,
      overall,
      analysis,
      summary: generateSummary(sign1, sign2, overall),
    })
  } catch (error) {
    return NextResponse.json({ error: "Errore nel calcolo della compatibilità" }, { status: 500 })
  }
}

function generateSummary(sign1: string, sign2: string, overall: number): string {
  const summaries = {
    high: [
      "Una combinazione stellare! Siete fatti l'uno per l'altro e la vostra unione promette grande felicità.",
      "L'armonia tra i vostri segni è eccezionale. Insieme potete raggiungere grandi traguardi.",
      "Una coppia dal potenziale straordinario. Le stelle sorridono alla vostra relazione.",
    ],
    medium: [
      "Una relazione con buone prospettive che richiede impegno reciproco per fiorire pienamente.",
      "Avete una base solida su cui costruire. Con pazienza e comprensione, può diventare qualcosa di speciale.",
      "Una combinazione interessante che può funzionare bene con il giusto equilibrio.",
    ],
    low: [
      "Una sfida che può trasformarsi in crescita. Le differenze possono essere fonte di arricchimento reciproco.",
      "Richiede molto lavoro, ma l'amore può superare ogni ostacolo se c'è vera dedizione.",
      "Le stelle suggeriscono cautela, ma il cuore ha le sue ragioni che la ragione non conosce.",
    ],
  }

  const level = overall >= 80 ? "high" : overall >= 60 ? "medium" : "low"
  const options = summaries[level]
  return options[Math.floor(Math.random() * options.length)]
}
