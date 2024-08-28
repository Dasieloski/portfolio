'use client'

import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { ArrowDownCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const [text] = useTypewriter({
    words: ['Desarrollador Full Stack', 'Ingeniero de Software', 'Creador de Soluciones Web'],
    loop: 0,
  })

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('proyectos')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <motion.div
          className="mb-6 md:mb-0 md:mr-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/dasieloski.jpg"
            alt="Tu Nombre"
            width={200}
            height={200}
            className="rounded-full"
          />
        </motion.div>
        <div>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Hola, soy <span className="text-primary">Dasiel Torres</span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span>{text}</span>
            <Cursor cursorStyle="_" />
          </motion.h2>
        </div>
      </div>
      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Desarrollando aplicaciones web robustas y escalables con las últimas tecnologías y mejores prácticas.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <Button size="lg" className="group" onClick={scrollToProjects}>
          Ver proyectos
          <ArrowDownCircle className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </motion.div>
    </section>
  )
}