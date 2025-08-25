"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const zodiacSigns = [
  { name: "Ariete", slug: "ariete", icon: "♈" },
  { name: "Toro", slug: "toro", icon: "♉" },
  { name: "Gemelli", slug: "gemelli", icon: "♊" },
  { name: "Cancro", slug: "cancro", icon: "♋" },
  { name: "Leone", slug: "leone", icon: "♌" },
  { name: "Vergine", slug: "vergine", icon: "♍" },
  { name: "Bilancia", slug: "bilancia", icon: "♎" },
  { name: "Scorpione", slug: "scorpione", icon: "♏" },
  { name: "Sagittario", slug: "sagittario", icon: "♐" },
  { name: "Capricorno", slug: "capricorno", icon: "♑" },
  { name: "Acquario", slug: "acquario", icon: "♒" },
  { name: "Pesci", slug: "pesci", icon: "♓" },
]

interface CompatibilityPanelProps {
  currentSign: string
}

export function CompatibilityPanel({ currentSign }: CompatibilityPanelProps) {
  const [selectedSign, setSelectedSign] = useState<string>("")
  const [compatibility, setCompatibility] = useState<any>(null)

  const currentSignData = zodiacSigns.find((s) => s.slug === currentSign)
  const otherSigns = zodiacSigns.filter((s) => s.slug !== currentSign)

  const calculateCompatibility = () => {
    // Mock compatibility calculation
    const mockCompatibility = {
      overall: Math.floor(Math.random() * 40) + 60, // 60-100%
      love: Math.floor(Math.random() * 40) + 60,
      communication: Math.floor(Math.random() * 40) + 60,
      summary:
        "Una combinazione interessante che promette sviluppi positivi. Le vostre energie si completano in modo armonioso.",
    }
    setCompatibility(mockCompatibility)
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>💕</span>
          Compatibilità Rapida
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{currentSignData?.icon}</span>
            <span className="font-medium">{currentSignData?.name}</span>
          </div>
          <span className="text-muted-foreground">+</span>
          <div className="flex-1">
            <Select value={selectedSign} onValueChange={setSelectedSign}>
              <SelectTrigger>
                <SelectValue placeholder="Scegli un segno" />
              </SelectTrigger>
              <SelectContent>
                {otherSigns.map((sign) => (
                  <SelectItem key={sign.slug} value={sign.slug}>
                    <div className="flex items-center gap-2">
                      <span>{sign.icon}</span>
                      <span>{sign.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={calculateCompatibility} disabled={!selectedSign} className="w-full">
          Calcola Compatibilità
        </Button>

        {compatibility && (
          <div className="space-y-4 pt-4 border-t border-border/50">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{compatibility.overall}%</p>
                <p className="text-xs text-muted-foreground">Compatibilità Generale</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{compatibility.love}%</p>
                <p className="text-xs text-muted-foreground">Amore</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{compatibility.summary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
