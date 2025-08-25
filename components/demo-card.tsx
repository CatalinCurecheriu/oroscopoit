"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DemoCard() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Esempio di Oroscopo</h2>
        <p className="text-muted-foreground text-lg">Ecco come appare un oroscopo personalizzato dalla nostra IA</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="text-2xl">♌</span>
              <div>
                <h3 className="text-xl">Leone - Oggi</h3>
                <p className="text-sm text-muted-foreground font-normal">18 Agosto 2025</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground/90 leading-relaxed">
              Oggi il Leone brilla di luce propria! L'energia cosmica ti sostiene in ogni tua iniziativa, rendendoti
              magnetico e irresistibile. È il momento perfetto per osare e mostrare al mondo il tuo talento naturale.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">❤️ Amore</h4>
                <p className="text-sm text-foreground/80">
                  Passione alle stelle! Se sei in coppia, sorprendi il partner con un gesto romantico.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">💼 Lavoro & Denaro</h4>
                <p className="text-sm text-foreground/80">
                  Opportunità interessanti si presentano. La tua leadership naturale viene riconosciuta.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">🌟 Benessere</h4>
                <p className="text-sm text-foreground/80">
                  Energia in abbondanza! Perfetto per iniziare una nuova attività fisica.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
              <Badge variant="secondary">Numeri: 7, 18, 23</Badge>
              <Badge variant="secondary">Colore: Oro</Badge>
              <Badge variant="secondary">Umore: Radiante</Badge>
              <Badge variant="secondary">Momento: Pomeriggio</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
