"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useAnimation } from "./animation-provider"

interface RouteTransitionProps {
  children: React.ReactNode
}

export function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const { reducedMotion, durations } = useAnimation()

  useEffect(() => {
    setDisplayChildren(children)
  }, [children])

  // Check if View Transitions API is supported
  const supportsViewTransitions = typeof document !== "undefined" && "startViewTransition" in document

  if (supportsViewTransitions && !reducedMotion) {
    // Use View Transitions API when available
    return <div key={pathname}>{displayChildren}</div>
  }

  // Fallback to Framer Motion
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
        transition={{
          duration: reducedMotion ? 0.1 : durations.fast,
          ease: "easeInOut",
        }}
      >
        {displayChildren}
      </motion.div>
    </AnimatePresence>
  )
}
