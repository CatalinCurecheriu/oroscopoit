"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAnimation } from "./animation-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { reducedMotion, durations } = useAnimation()

  const menuItems = [
    { href: "/", label: "Oroscopo" },
    { href: "/ascendente", label: "Ascendente" },
    { href: "/compatibilita", label: "Compatibilità" },
    { href: "/privacy", label: "Privacy" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reducedMotion ? 0.1 : 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 glass border-b border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced animation */}
          <motion.div whileHover={reducedMotion ? {} : { scale: 1.05 }} whileTap={reducedMotion ? {} : { scale: 0.95 }}>
            <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
              <motion.span
                animate={
                  reducedMotion
                    ? {}
                    : {
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              >
                🔮
              </motion.span>
              <span>Oroscopo IT</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation with enhanced hover effects */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reducedMotion ? 0 : index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <motion.div whileHover={reducedMotion ? {} : { scale: 1.1 }} whileTap={reducedMotion ? {} : { scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0.1 : 0.2 }}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay with blur effect */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: reducedMotion ? 0.1 : durations.fast }}
              className="fixed inset-0 bg-background/80 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel with enhanced animations */}
            <motion.div
              initial={{ x: "100%", opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: "100%", opacity: 0, scale: 0.95 }}
              transition={{
                duration: reducedMotion ? 0.1 : durations.normal,
                ease: "cubic-bezier(.2,.7,.1,1)",
              }}
              className="fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] glass-card z-50 md:hidden"
            >
              <nav className="flex flex-col p-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reducedMotion ? 0 : index * 0.1,
                      duration: reducedMotion ? 0.1 : durations.fast,
                    }}
                    whileHover={reducedMotion ? {} : { x: 5, scale: 1.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-foreground/80 hover:text-foreground transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-primary/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
