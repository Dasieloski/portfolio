"use client";

'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Projects from '@/components/project'
import Skills from '@/components/skills'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import { ScrollProvider } from '@/context/ScrollContext'

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ScrollProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Skills />
              <Projects />
              <About />
              <Contact />
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </ScrollProvider>
    </ThemeProvider>
  )
}