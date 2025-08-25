"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useAnimation } from "./animation-provider"

interface AscendantResult {
  place: string
  tz: {
    tzId: string
    offsetMinutes: number
  }
  result: {
    ascendant: string
    description: string
  }
}

const zodiacIcons: Record<string, string> = {
  ariete: "♈",
  toro: "♉",
  gemelli: "♊",
  cancro: "♋",
  leone: "♌",
  vergine: "♍",
  bilancia: "♎",
  scorpione: "♏",
  sagittario: "♐",
  capricorno: "♑",
  acquario: "♒",
  pesci: "♓",
}

const zodiacNames: Record<string, string> = {
  ariete: "Ariete",
  toro: "Toro",
  gemelli: "Gemelli",
  cancro: "Cancro",
  leone: "Leone",
  vergine: "Vergine",
  bilancia: "Bilancia",
  scorpione: "Scorpione",
  sagittario: "Sagittario",
  capricorno: "Capricorno",
  acquario: "Acquario",
  pesci: "Pesci",
}

export function AscendantCalculator() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    place: "",
  })
  const [result, setResult] = useState<AscendantResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { reducedMotion, spring } = useAnimation()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/ascendant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Errore nel calcolo")
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore sconosciuto")
    } finally {
      setLoading(false)
    }
  }

  const isFormValid = formData.date && formData.time && formData.place.trim()

  return (
    <div className="space-y-8">
      {/* Form Card */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>🔮</span>
            Dati di Nascita
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Date Input */}
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Data di Nascita
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="glass"
                  required
                />
              </div>

              {/* Time Input */}
              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Ora di Nascita
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="glass"
                  required
                />
              </div>

              {/* Place Input */}
              <div className="space-y-2">
                <Label htmlFor="place" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Luogo di Nascita
                </Label>
                <Input
                  id="place"
                  type="text"
                  placeholder="es. Roma, Milano, Napoli..."
                  value={formData.place}
                  onChange={(e) => handleInputChange("place", e.target.value)}
                  className="glass"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm"
              >
                {error}
              </motion.div>
            )}

            <motion.div
              whileHover={reducedMotion ? {} : { scale: 1.02 }}
              whileTap={reducedMotion ? {} : { scale: 0.98 }}
              transition={spring}
            >
              <Button type="submit" disabled={!isFormValid || loading} className="w-full" size="lg">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Calcolando...
                  </>
                ) : (
                  "Calcola Ascendente"
                )}
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>

      {/* Result Card */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>✨</span>
                Il Tuo Ascendente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Location and Timezone Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{result.place}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    Fuso Orario: {result.tz.tzId} (UTC{result.tz.offsetMinutes >= 0 ? "+" : ""}
                    {result.tz.offsetMinutes / 60})
                  </span>
                </div>
              </div>

              {/* Ascendant Result */}
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="text-6xl"
                >
                  {zodiacIcons[result.result.ascendant]}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Ascendente in {zodiacNames[result.result.ascendant]}
                  </Badge>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-foreground/90 leading-relaxed max-w-2xl mx-auto"
                >
                  {result.result.description}
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border/50"
              >
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => {
                    const url = `/oroscopo/${result.result.ascendant}/giornaliero`
                    window.open(url, "_blank")
                  }}
                >
                  Vedi Oroscopo {zodiacNames[result.result.ascendant]}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => {
                    setResult(null)
                    setFormData({ date: "", time: "", place: "" })
                  }}
                >
                  Calcola di Nuovo
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Info Card */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>💡</span>
            Cos'è l'Ascendente?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            L'ascendente è il segno zodiacale che stava sorgendo all'orizzonte orientale nel momento esatto della tua
            nascita. Rappresenta la tua "maschera sociale", il modo in cui ti presenti al mondo e come gli altri ti
            percepiscono al primo incontro.
          </p>
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="font-semibold mb-2">🎭 Personalità Esteriore</h4>
              <p className="text-sm text-muted-foreground">
                Come appari agli altri e il primo impatto che fai nelle relazioni sociali.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🌅 Approccio alla Vita</h4>
              <p className="text-sm text-muted-foreground">
                Il tuo stile naturale nell'affrontare nuove situazioni e sfide.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
