import { AuroraBackground } from "@/components/aurora-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AscendantCalculator } from "@/components/ascendant-calculator"
import { MotionSection } from "@/components/motion-section"

export const metadata = {
  title: "Calcola il tuo Ascendente - Oroscopo AI",
  description:
    "Scopri il tuo segno ascendente con il nostro calcolatore preciso. Inserisci data, ora e luogo di nascita.",
}

export default function AscendantePage() {
  return (
    <div className="min-h-screen relative">
      <AuroraBackground />
      <Header />

      <main className="relative z-10">
        <MotionSection className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Calcola il Tuo Ascendente
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              L'ascendente rappresenta la tua personalità esteriore, il modo in cui gli altri ti percepiscono. Scopri il
              tuo segno ascendente inserendo i dati di nascita.
            </p>
          </div>

          <AscendantCalculator />
        </MotionSection>
      </main>

      <Footer />
    </div>
  )
}
