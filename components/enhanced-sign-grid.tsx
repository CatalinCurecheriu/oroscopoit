"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useAnimation } from "./animation-provider"

const zodiacSigns = [
  { name: "Ariete", slug: "ariete", icon: "♈", dates: "21 Mar - 19 Apr", color: "from-red-500 to-orange-500" },
  { name: "Toro", slug: "toro", icon: "♉", dates: "20 Apr - 20 Mag", color: "from-green-500 to-emerald-500" },
  { name: "Gemelli", slug: "gemelli", icon: "♊", dates: "21 Mag - 20 Giu", color: "from-yellow-500 to-amber-500" },
  { name: "Cancro", slug: "cancro", icon: "♋", dates: "21 Giu - 22 Lug", color: "from-blue-500 to-cyan-500" },
  { name: "Leone", slug: "leone", icon: "♌", dates: "23 Lug - 22 Ago", color: "from-orange-500 to-yellow-500" },
  { name: "Vergine", slug: "vergine", icon: "♍", dates: "23 Ago - 22 Set", color: "from-green-600 to-teal-500" },
  { name: "Bilancia", slug: "bilancia", icon: "♎", dates: "23 Set - 22 Ott", color: "from-pink-500 to-rose-500" },
  { name: "Scorpione", slug: "scorpione", icon: "♏", dates: "23 Ott - 21 Nov", color: "from-red-600 to-pink-600" },
  {
    name: "Sagittario",
    slug: "sagittario",
    icon: "♐",
    dates: "22 Nov - 21 Dic",
    color: "from-purple-500 to-indigo-500",
  },
  { name: "Capricorno", slug: "capricorno", icon: "♑", dates: "22 Dic - 19 Gen", color: "from-gray-600 to-slate-600" },
  { name: "Acquario", slug: "acquario", icon: "♒", dates: "20 Gen - 18 Feb", color: "from-blue-600 to-indigo-600" },
  { name: "Pesci", slug: "pesci", icon: "♓", dates: "19 Feb - 20 Mar", color: "from-teal-500 to-blue-500" },
]

export function EnhancedSignGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { reducedMotion, spring } = useAnimation()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.08,
        delayChildren: reducedMotion ? 0 : 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 30,
      scale: reducedMotion ? 1 : 0.9,
      filter: reducedMotion ? "none" : "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="segni" className="space-y-8">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Scegli il Tuo Segno
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-lg"
        >
          Clicca sul tuo segno zodiacale per scoprire cosa ti riservano le stelle
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {zodiacSigns.map((sign, index) => (
          <motion.div key={sign.slug} variants={itemVariants}>
            <motion.div
              whileHover={
                reducedMotion
                  ? {}
                  : {
                      scale: 1.05,
                      rotateX: 5,
                      rotateY: 5,
                      z: 50,
                    }
              }
              whileTap={reducedMotion ? {} : { scale: 0.95 }}
              transition={spring}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              <Link href={`/oroscopo/${sign.slug}/giornaliero`}>
                <Card className="glass-card hover:shadow-xl transition-all duration-500 cursor-pointer group overflow-hidden relative">
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${sign.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />

                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div
                      className="text-4xl mb-3 group-hover:scale-125 transition-all duration-500"
                      whileHover={
                        reducedMotion
                          ? {}
                          : {
                              rotate: [0, -10, 10, -5, 5, 0],
                              transition: { duration: 0.6 },
                            }
                      }
                    >
                      {sign.icon}
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                      {sign.name}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {sign.dates}
                    </p>

                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30"
                      initial={false}
                      whileHover={
                        reducedMotion
                          ? {}
                          : {
                              borderColor: "rgba(var(--primary), 0.3)",
                              transition: { duration: 0.3 },
                            }
                      }
                    />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
