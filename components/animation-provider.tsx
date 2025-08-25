"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useReducedMotion } from "framer-motion"

interface AnimationContextType {
  reducedMotion: boolean
  durations: {
    fast: number
    normal: number
    slow: number
  }
  easing: string
  spring: {
    type: string
    stiffness: number
    damping: number
  }
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export function AnimationProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion()

  const contextValue: AnimationContextType = {
    reducedMotion: reducedMotion || false,
    durations: {
      fast: reducedMotion ? 0.1 : 0.3,
      normal: reducedMotion ? 0.2 : 0.5,
      slow: reducedMotion ? 0.3 : 0.7,
    },
    easing: "cubic-bezier(.2,.7,.1,1)",
    spring: {
      type: "spring",
      stiffness: 220,
      damping: 24,
    },
  }

  return <AnimationContext.Provider value={contextValue}>{children}</AnimationContext.Provider>
}

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider")
  }
  return context
}
