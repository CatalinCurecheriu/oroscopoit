import { AuroraBackground } from "@/components/aurora-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EnhancedHero } from "@/components/enhanced-hero"
import { EnhancedSignGrid } from "@/components/enhanced-sign-grid"
import { DemoCard } from "@/components/demo-card"
import { MotionSection } from "@/components/motion-section"

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
      </main>

      <Footer />
    </div>
  )
}
