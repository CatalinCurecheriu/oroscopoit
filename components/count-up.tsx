"use client"

import { motion, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"
import { useAnimation } from "./animation-provider"

interface CountUpProps {
  value: number
  delay?: number
}

export function CountUp({ value, delay = 0 }: CountUpProps) {
  const { reducedMotion, spring: springConfig } = useAnimation()

  const safeValue = typeof value === "number" && !isNaN(value) ? value : 0
  const safeDelay = typeof delay === "number" && !isNaN(delay) ? delay : 0

  const count = useSpring(0, springConfig)
  const rounded = useTransform(count, (latest) => {
    return typeof latest === "number" && !isNaN(latest) ? Math.round(latest) : 0
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      count.set(safeValue)
    }, safeDelay * 1000)

    return () => clearTimeout(timer)
  }, [count, safeValue, safeDelay])

  if (reducedMotion) {
    return <span className="text-sm font-bold text-primary">{safeValue}</span>
  }

  return <motion.span className="text-sm font-bold text-primary">{rounded}</motion.span>
}
