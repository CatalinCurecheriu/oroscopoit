"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useAnimation } from "./animation-provider"

export function EnhancedHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const { reducedMotion } = useAnimation()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.2,
        delayChildren: reducedMotion ? 0 : 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 30,
      filter: reducedMotion ? "none" : "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: reducedMotion ? 0 : [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      style={reducedMotion ? {} : { y, opacity }}
      className="relative z-10 pt-24 pb-16 overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 w-full h-full -z-10">
        <iframe
          src="https://my.spline.design/galaxy-bP40YqdRtNCIM5fzWyykVKk3/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="3D Galaxy Background"
        />
      </div>

      <div className="absolute inset-0 bg-black/30 -z-5" />

      {/* Floating elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 text-6xl opacity-20 pointer-events-none z-20"
      >
        ✨
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute top-40 right-20 text-4xl opacity-20 pointer-events-none z-20"
      >
        🌙
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-20 left-1/4 text-5xl opacity-20 pointer-events-none z-20"
      >
        ⭐
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg"
          >
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            >
              I Segreti del Cosmo Ti Aspettano
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md"
          >
            Svela i misteri del tuo destino attraverso oroscopi personalizzati, calcolo dell'ascendente e compatibilità
            amorosa. Le stelle ti guidano verso un futuro luminoso.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}
