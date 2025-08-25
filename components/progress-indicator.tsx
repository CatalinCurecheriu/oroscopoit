"use client"
import { motion, useScroll, useSpring } from "framer-motion"

export function ProgressIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
      style={{
        transformOrigin: "0%",
      }}
    >
      <motion.div className="h-full bg-gradient-to-r from-primary via-accent to-primary" style={{ scaleX }} />
    </motion.div>
  )
}
