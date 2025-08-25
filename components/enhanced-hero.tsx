"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAnimation } from "./animation-provider"

export function EnhancedHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const { reducedMotion, spring } = useAnimation()

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
      className="relative z-10 pt-24 pb-16 overflow-hidden"
    >
      {/* Floating elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 text-6xl opacity-20 pointer-events-none"
      >
        ✨
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute top-40 right-20 text-4xl opacity-20 pointer-events-none"
      >
        🌙
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-20 left-1/4 text-5xl opacity-20 pointer-events-none"
      >
        ⭐
      </motion.div>

      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
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
              Scopri il Tuo Futuro con l'IA
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Oroscopi personalizzati, calcolo dell'ascendente e compatibilità amorosa. La saggezza delle stelle incontra
            l'intelligenza artificiale.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={reducedMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={reducedMotion ? {} : { scale: 0.95 }}
              transition={spring}
            >
              <Button asChild size="lg" className="text-lg px-8 py-3 relative overflow-hidden group">
                <Link href="#segni">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                    initial={false}
                  />
                  <span className="relative z-10">Scopri il tuo oroscopo</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={reducedMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={reducedMotion ? {} : { scale: 0.95 }}
              transition={spring}
            >
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent group">
                <Link href="/ascendente">
                  <motion.span
                    className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    initial={false}
                  />
                  <span className="relative z-10">Calcola Ascendente</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
