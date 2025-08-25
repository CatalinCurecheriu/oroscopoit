import { AuroraBackground } from "@/components/aurora-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CompatibilityChecker } from "@/components/compatibility-checker"
import { MotionSection } from "@/components/motion-section"

export const metadata = {
  title: "Compatibilità Zodiacale - Oroscopo AI",
  description:
    "Scopri la compatibilità tra due segni zodiacali. Analisi dettagliata di amore, comunicazione, valori e ritmo di vita.",
}

export default function CompatibilitaPage() {
  return (
    <div className="min-h-screen relative">
      <AuroraBackground />
      <Header />

      <main className="relative z-10">
        <MotionSection className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Compatibilità Zodiacale
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Scopri quanto siete compatibili analizzando l'armonia tra i vostri segni zodiacali. Un'analisi completa
              che esplora amore, comunicazione, valori condivisi e ritmo di vita.
            </p>
          </div>

          <CompatibilityChecker />
        </MotionSection>
      </main>

      <Footer />
    </div>
  )
}
