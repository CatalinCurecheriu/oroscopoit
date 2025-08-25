"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Share2, Heart, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StaggerChildren } from "./stagger-children"
import { CountUp } from "./count-up"
import { useAnimation } from "./animation-provider"

interface HoroscopeData {
  name: string
  icon: string
  period: string
  date: string
  text: string
  sections: Array<{
    title: string
    content: string
  }>
  extras: {
    lucky_numbers: number[]
    lucky_color: string
    mood: string
    best_time: string
    keywords: string[]
  }
}

interface HoroscopeCardProps {
  data: HoroscopeData
}

const periodLabels = {
  giornaliero: "Oggi",
  settimanale: "Questa Settimana",
  mensile: "Questo Mese",
  generale: "Caratteristiche Generali",
}

export function HoroscopeCard({ data }: HoroscopeCardProps) {
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)
  const { reducedMotion, spring } = useAnimation()

  const handleShare = async () => {
    const shareData = {
      title: `${data.name} - ${periodLabels[data.period as keyof typeof periodLabels]}`,
      text: data.text.substring(0, 100) + "...",
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.log("Condivisione annullata")
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSave = () => {
    setSaved(!saved)
    // Mock save functionality
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{data.icon}</span>
            <div>
              <h1 className="text-2xl">
                {data.name} - {periodLabels[data.period as keyof typeof periodLabels]}
              </h1>
              <p className="text-sm text-muted-foreground font-normal">
                {new Date(data.date).toLocaleDateString("it-IT", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <motion.div
              whileHover={reducedMotion ? {} : { scale: 1.05 }}
              whileTap={reducedMotion ? {} : { scale: 0.95 }}
            >
              <Button variant="outline" size="icon" onClick={handleShare}>
                {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
              </Button>
            </motion.div>
            <motion.div
              whileHover={reducedMotion ? {} : { scale: 1.05 }}
              whileTap={reducedMotion ? {} : { scale: 0.95 }}
            >
              <Button variant={saved ? "default" : "outline"} size="icon" onClick={handleSave}>
                <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
              </Button>
            </motion.div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-foreground/90 leading-relaxed text-lg"
        >
          {data.text}
        </motion.p>

        {/* Sections */}
        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {data.sections.map((section, index) => (
            <div key={section.title} className="space-y-3">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                {index === 0 && "❤️"}
                {index === 1 && "💼"}
                {index === 2 && "🌟"}
                {section.title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </StaggerChildren>

        {/* Extras Strip */}
        <div className="pt-6 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Numeri Fortunati</p>
              <div className="flex justify-center gap-1">
                {data.extras.lucky_numbers.map((num, index) => (
                  <CountUp key={num} value={num} delay={index * 0.1} />
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Colore</p>
              <p className="text-sm font-medium capitalize">{data.extras.lucky_color}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Umore</p>
              <p className="text-sm font-medium capitalize">{data.extras.mood}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Momento Migliore</p>
              <p className="text-sm font-medium capitalize">{data.extras.best_time}</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-2">Parole Chiave</p>
            <StaggerChildren className="flex flex-wrap gap-2">
              {data.extras.keywords.map((keyword) => (
                <motion.div key={keyword} whileHover={reducedMotion ? {} : { scale: 1.05 }} transition={spring}>
                  <Badge variant="secondary" className="capitalize">
                    {keyword}
                  </Badge>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
