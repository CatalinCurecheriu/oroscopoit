"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 1000], [0, -100])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none dark:block hidden">
      {/* Primary Aurora */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/2 left-1/2 w-[800px] h-[600px] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="w-full h-full rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.3) 30%, rgba(59, 130, 246, 0.2) 60%, transparent 100%)",
            animation: "aurora 20s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* Secondary Aurora */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 right-1/4 w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="w-full h-full rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.2) 40%, rgba(59, 130, 246, 0.1) 70%, transparent 100%)",
            animation: "aurora-secondary 25s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* Tertiary Aurora */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[300px] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="w-full h-full rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34, 197, 94, 0.2) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 100%)",
            animation: "aurora 30s ease-in-out infinite reverse",
          }}
        />
      </motion.div>
    </div>
  )
}
