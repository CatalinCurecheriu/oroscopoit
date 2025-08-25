"use client"

import { motion } from "framer-motion"
import { useAnimation } from "./animation-provider"

interface HoroscopeTabsProps {
  currentSign: string
  currentPeriod: string
  onTabChange: (period: string) => void
}

const periods = [
  { key: "giornaliero", label: "Giorno" },
  { key: "settimanale", label: "Settimana" },
  { key: "mensile", label: "Mese" },
  { key: "generale", label: "Generale" },
]

export function HoroscopeTabs({ currentPeriod, onTabChange }: HoroscopeTabsProps) {
  const { reducedMotion } = useAnimation()

  return (
    <div className="flex flex-wrap gap-2 p-1 glass rounded-lg">
      {periods.map((period) => (
        <button
          key={period.key}
          onClick={() => onTabChange(period.key)}
          className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            currentPeriod === period.key ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {currentPeriod === period.key && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-md"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
          <span className="relative z-10">{period.label}</span>
        </button>
      ))}
    </div>
  )
}
