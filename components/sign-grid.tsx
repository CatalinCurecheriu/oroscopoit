"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { StaggerChildren } from "./stagger-children"
import { useAnimation } from "./animation-provider"

const zodiacSigns = [
  {
    name: "Ariete",
    slug: "ariete",
    icon: "♈",
    dates: "21 Mar - 19 Apr",
    image: "/zodiac/ariete.png",
  },
  {
    name: "Toro",
    slug: "toro",
    icon: "♉",
    dates: "20 Apr - 20 Mag",
    image: "/zodiac/toro.png",
  },
  {
    name: "Gemelli",
    slug: "gemelli",
    icon: "♊",
    dates: "21 Mag - 20 Giu",
    image: "/zodiac/gemelli.png",
  },
  {
    name: "Cancro",
    slug: "cancro",
    icon: "♋",
    dates: "21 Giu - 22 Lug",
    image: "/zodiac/cancro.png",
  },
  {
    name: "Leone",
    slug: "leone",
    icon: "♌",
    dates: "23 Lug - 22 Ago",
    image: "/zodiac/leone.png",
  },
  {
    name: "Vergine",
    slug: "vergine",
    icon: "♍",
    dates: "23 Ago - 22 Set",
    image: "/zodiac/vergine.png",
  },
  {
    name: "Bilancia",
    slug: "bilancia",
    icon: "♎",
    dates: "23 Set - 22 Ott",
    image: "/zodiac/bilancia.png",
  },
  {
    name: "Scorpione",
    slug: "scorpione",
    icon: "♏",
    dates: "23 Ott - 21 Nov",
    image: "/zodiac/scorpione.png",
  },
  {
    name: "Sagittario",
    slug: "sagittario",
    icon: "♐",
    dates: "22 Nov - 21 Dic",
    image: "/zodiac/sagittario.png",
  },
  {
    name: "Capricorno",
    slug: "capricorno",
    icon: "♑",
    dates: "22 Dic - 19 Gen",
    image: "/zodiac/capricorno.png",
  },
  {
    name: "Acquario",
    slug: "acquario",
    icon: "♒",
    dates: "20 Gen - 18 Feb",
    image: "/zodiac/acquario.png",
  },
  {
    name: "Pesci",
    slug: "pesci",
    icon: "♓",
    dates: "19 Feb - 20 Mar",
    image: "/zodiac/pesci.png",
  },
]

export function SignGrid() {
  const { reducedMotion, spring } = useAnimation()

  return (
    <section id="segni" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Scegli il Tuo Segno</h2>
        <p className="text-muted-foreground text-lg">
          Clicca sul tuo segno zodiacale per scoprire cosa ti riservano le stelle
        </p>
      </div>

      <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {zodiacSigns.map((sign) => (
          <motion.div
            key={sign.slug}
            whileHover={
              reducedMotion
                ? {}
                : {
                    scale: 1.05,
                    rotateX: 2,
                    rotateY: 2,
                  }
            }
            whileTap={reducedMotion ? {} : { scale: 0.95 }}
            transition={spring}
          >
            <Link href={`/oroscopo/${sign.slug}/giornaliero`}>
              <Card className="glass-card hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 flex justify-center">
                    <div className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={sign.image || "/placeholder.svg"}
                        alt={`${sign.name} constellation`}
                        width={80}
                        height={80}
                        className="w-full h-full rounded-full object-cover filter drop-shadow-lg"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          e.currentTarget.style.display = "none"
                          e.currentTarget.nextElementSibling.style.display = "flex"
                        }}
                      />
                      {/* Fallback icon display */}
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                        style={{ display: "none" }}
                      >
                        {sign.icon}
                      </div>
                      {/* Mystical glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{sign.name}</h3>
                  <p className="text-sm text-muted-foreground">{sign.dates}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </StaggerChildren>
    </section>
  )
}
