"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, MessageCircle, Target, Clock, Loader2, Save, RotateCcw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { StaggerChildren } from "./stagger-children"
import { useAnimation } from "./animation-provider"

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

interface CompatibilityResult {
  sign1: string
  sign2: string
  overall: number
  analysis: {
    love: { score: number; text: string }
    communication: { score: number; text: string }
    values: { score: number; text: string }
    rhythm: { score: number; text: string }
  }
  summary: string
}

const categoryIcons = {
  love: Heart,
  communication: MessageCircle,
  values: Target,
  rhythm: Clock,
}

const categoryLabels = {
  love: "Amore",
  communication: "Comunicazione",
  values: "Valori",
  rhythm: "Ritmo",
}

export function CompatibilityChecker() {
  const [sign1, setSign1] = useState<string>("")
  const [sign2, setSign2] = useState<string>("")
  const [result, setResult] = useState<CompatibilityResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)

  const { reducedMotion, spring } = useAnimation()

  const handleCalculate = async () => {
    if (!sign1 || !sign2) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/compatibility", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sign1, sign2 }),
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

  const handleReset = () => {
    setSign1("")
    setSign2("")
    setResult(null)
    setError(null)
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(!saved)
    // Mock save functionality
  }

  const getSignData = (slug: string) => zodiacSigns.find((s) => s.slug === slug)

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500"
    if (score >= 60) return "text-yellow-500"
    return "text-red-500"
  }

  const getScoreBackground = (score: number) => {
    if (score >= 80) return "bg-green-500/20"
    if (score >= 60) return "bg-yellow-500/20"
    return "bg-red-500/20"
  }

  return (
    <div className="space-y-8">
      {/* Selection Card */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>💕</span>
            Seleziona i Segni
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 items-end">
            {/* First Sign */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Primo Segno</label>
              <Select value={sign1} onValueChange={setSign1}>
                <SelectTrigger className="glass">
                  <SelectValue placeholder="Scegli un segno" />
                </SelectTrigger>
                <SelectContent>
                  {zodiacSigns.map((sign) => (
                    <SelectItem key={sign.slug} value={sign.slug} disabled={sign.slug === sign2}>
                      <div className="flex items-center gap-2">
                        <span>{sign.icon}</span>
                        <span>{sign.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* VS */}
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">VS</div>
            </div>

            {/* Second Sign */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Secondo Segno</label>
              <Select value={sign2} onValueChange={setSign2}>
                <SelectTrigger className="glass">
                  <SelectValue placeholder="Scegli un segno" />
                </SelectTrigger>
                <SelectContent>
                  {zodiacSigns.map((sign) => (
                    <SelectItem key={sign.slug} value={sign.slug} disabled={sign.slug === sign1}>
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

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm"
            >
              {error}
            </motion.div>
          )}

          <div className="flex gap-4 mt-6">
            <motion.div
              whileHover={reducedMotion ? {} : { scale: 1.02 }}
              whileTap={reducedMotion ? {} : { scale: 0.98 }}
              transition={spring}
              className="flex-1"
            >
              <Button onClick={handleCalculate} disabled={!sign1 || !sign2 || loading} className="w-full" size="lg">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Calcolando...
                  </>
                ) : (
                  "Calcola Compatibilità"
                )}
              </Button>
            </motion.div>

            {(sign1 || sign2 || result) && (
              <motion.div
                whileHover={reducedMotion ? {} : { scale: 1.05 }}
                whileTap={reducedMotion ? {} : { scale: 0.95 }}
                transition={spring}
              >
                <Button variant="outline" size="lg" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Overall Score */}
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{getSignData(result.sign1)?.icon}</span>
                    <span className="font-semibold">{getSignData(result.sign1)?.name}</span>
                  </div>
                  <div className="text-4xl">💖</div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{getSignData(result.sign2)?.icon}</span>
                    <span className="font-semibold">{getSignData(result.sign2)?.name}</span>
                  </div>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <div className={`text-6xl font-bold ${getScoreColor(result.overall)}`}>{result.overall}%</div>
                  <Badge variant="secondary" className="text-lg px-4 py-2 mt-2">
                    Compatibilità Generale
                  </Badge>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-foreground/90 leading-relaxed max-w-2xl mx-auto"
                >
                  {result.summary}
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                  <Button variant={saved ? "default" : "outline"} onClick={handleSave} className="bg-transparent">
                    <Save className={`mr-2 h-4 w-4 ${saved ? "fill-current" : ""}`} />
                    {saved ? "Confronto Salvato" : "Salva Confronto"}
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Analysis */}
          <StaggerChildren className="grid md:grid-cols-2 gap-6">
            {Object.entries(result.analysis).map(([category, data]) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
              return (
                <Card key={category} className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconComponent className="h-5 w-5" />
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Punteggio</span>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${getScoreBackground(
                            data.score,
                          )} ${getScoreColor(data.score)}`}
                        >
                          {data.score}%
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">{data.text}</p>
                  </CardContent>
                </Card>
              )
            })}
          </StaggerChildren>
        </motion.div>
      )}

      {/* Info Card */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>🔍</span>
            Come Funziona l'Analisi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            La nostra analisi di compatibilità esamina quattro aspetti fondamentali della relazione tra due segni
            zodiacali, basandosi sulle caratteristiche astrologiche tradizionali e moderne interpretazioni.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Amore
              </h4>
              <p className="text-sm text-muted-foreground">
                Attrazione fisica, chimica emotiva e potenziale romantico tra i due segni.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Comunicazione
              </h4>
              <p className="text-sm text-muted-foreground">
                Facilità di comprensione reciproca e capacità di dialogo costruttivo.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <Target className="h-4 w-4" />
                Valori
              </h4>
              <p className="text-sm text-muted-foreground">
                Allineamento su principi di vita, obiettivi e priorità fondamentali.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Ritmo
              </h4>
              <p className="text-sm text-muted-foreground">
                Sincronizzazione nei tempi di vita, energia e approccio alle attività quotidiane.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
