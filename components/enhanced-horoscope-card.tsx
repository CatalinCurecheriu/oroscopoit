"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Share2, Heart, Check, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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

interface EnhancedHoroscopeCardProps {
  data: HoroscopeData
}

const periodLabels: Record<string, string> = {
  giornaliero: "Oggi",
  settimanale: "Questa Settimana",
  mensile: "Questo Mese",
  generale: "Caratteristiche Generali",
}

export function EnhancedHoroscopeCard({ data }: EnhancedHoroscopeCardProps) {
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const { reducedMotion, spring } = useAnimation()

  const handleShare = async () => {
    const periodLabel = periodLabels[data.period] || data.period
    const shareData = {
      title: `${data.name} - ${periodLabel}`,
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
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSave = () => {
    setSaved(!saved)
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const sparklesArray = Array.from({ length: 5 }, (_, i) => i)

  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
      <Card className="glass-card relative overflow-hidden">
        {/* Animated background sparkles */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {sparklesArray.map((i) => (
            <motion.div
              key={i}
              className="absolute text-primary/20"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={
                reducedMotion
                  ? {}
                  : {
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.5, 0.2],
                      rotate: [0, 180, 360],
                    }
              }
              transition={{
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
          ))}
        </motion.div>

        <CardHeader>
          <motion.div variants={itemVariants}>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.span
                  className="text-3xl"
                  whileHover={
                    reducedMotion
                      ? {}
                      : {
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 },
                        }
                  }
                >
                  {data.icon}
                </motion.span>
                <div>
                  <h1 className="text-2xl">
                    {data.name} - {periodLabels[data.period] || data.period}
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
                  whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                  whileTap={reducedMotion ? {} : { scale: 0.9 }}
                  transition={spring}
                >
                  <Button variant="outline" size="icon" onClick={handleShare}>
                    {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={reducedMotion ? {} : { scale: 1.1 }}
                  whileTap={reducedMotion ? {} : { scale: 0.9 }}
                  transition={spring}
                >
                  <Button variant={saved ? "default" : "outline"} size="icon" onClick={handleSave}>
                    <motion.div
                      animate={saved && !reducedMotion ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </CardTitle>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-8 relative z-10">
          {/* Intro Text with typewriter effect */}
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-foreground/90 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {data.text}
            </motion.p>
          </motion.div>

          {/* Sections with enhanced animations */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            {data.sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="space-y-3 p-4 rounded-lg glass hover:glass-card transition-all duration-300"
                whileHover={reducedMotion ? {} : { scale: 1.02, y: -2 }}
                transition={spring}
              >
                <h3 className="font-semibold text-primary flex items-center gap-2">
                  <motion.span
                    animate={
                      reducedMotion
                        ? {}
                        : {
                            scale: [1, 1.1, 1],
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  >
                    {index === 0 && "❤️"}
                    {index === 1 && "💼"}
                    {index === 2 && "🌟"}
                  </motion.span>
                  {section.title}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Extras Strip */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <motion.div
                className="text-center p-3 rounded-lg glass hover:glass-card transition-all duration-300"
                whileHover={reducedMotion ? {} : { scale: 1.05 }}
              >
                <p className="text-xs text-muted-foreground mb-2">Numeri Fortunati</p>
                <div className="flex justify-center gap-1">
                  {(data.extras.lucky_numbers || []).map((num, index) => (
                    <CountUp key={`${num}-${index}`} value={num} delay={index * 0.2} />
                  ))}
                </div>
              </motion.div>

              {[
                { label: "Colore", value: data.extras.lucky_color || "N/A" },
                { label: "Umore", value: data.extras.mood || "N/A" },
                { label: "Momento Migliore", value: data.extras.best_time || "N/A" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center p-3 rounded-lg glass hover:glass-card transition-all duration-300"
                  whileHover={reducedMotion ? {} : { scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-medium capitalize">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-3">Parole Chiave</p>
              <div className="flex flex-wrap gap-2">
                {(data.extras.keywords || []).map((keyword, index) => (
                  <motion.div
                    key={`${keyword}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={reducedMotion ? {} : { scale: 1.1, y: -2 }}
                  >
                    <Badge variant="secondary" className="capitalize cursor-default">
                      {keyword}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
