"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useAnimation } from "./animation-provider"

interface MotionSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionSection({ children, className = "", delay = 0 }: MotionSectionProps) {
  const { reducedMotion, durations, easing } = useAnimation()

  const variants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 12,
      filter: reducedMotion ? "none" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: durations.normal,
        ease: easing,
        delay,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
