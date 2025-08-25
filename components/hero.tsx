"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAnimation } from "./animation-provider"

export function Hero() {
  const { reducedMotion, durations, spring } = useAnimation()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 20,
      filter: reducedMotion ? "none" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: durations.normal,
        ease: "cubic-bezier(.2,.7,.1,1)",
      },
    },
  }

  return (
    <section className="relative z-10 pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            Scopri il Tuo Futuro con l'IA
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Oroscopi personalizzati, calcolo dell'ascendente e compatibilità amorosa. La saggezza delle stelle incontra
            l'intelligenza artificiale.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={reducedMotion ? {} : { scale: 1.05 }}
              whileTap={reducedMotion ? {} : { scale: 0.95 }}
              transition={spring}
            >
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link href="#segni">Scopri il tuo oroscopo</Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={reducedMotion ? {} : { scale: 1.05 }}
              whileTap={reducedMotion ? {} : { scale: 0.95 }}
              transition={spring}
            >
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                <Link href="/ascendente">Calcola Ascendente</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
