import { AuroraBackground } from "@/components/aurora-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EnhancedHero } from "@/components/enhanced-hero"
import { EnhancedSignGrid } from "@/components/enhanced-sign-grid"
import { DemoCard } from "@/components/demo-card"
import { MotionSection } from "@/components/motion-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <AuroraBackground />
      <Header />

      <main className="relative z-10">
        <EnhancedHero />

        <MotionSection className="container mx-auto px-4 py-16" delay={0.2}>
          <EnhancedSignGrid />
        </MotionSection>

        <MotionSection className="container mx-auto px-4 py-16" delay={0.4}>
          <DemoCard />
        </MotionSection>

        <MotionSection className="container mx-auto px-4 py-16" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Link href="/ascendente" className="w-full sm:w-auto">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Calcola il Tuo Ascendente
              </Button>
            </Link>
            <Link href="/compatibilita" className="w-full sm:w-auto">
              <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Compatibilità
              </Button>
            </Link>
          </div>
        </MotionSection>
      </main>

      <Footer />
    </div>
  )
}
