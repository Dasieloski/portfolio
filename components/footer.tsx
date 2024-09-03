import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm">&copy; {currentYear} Dasiel Torres. Todos los derechos reservados.</p>
          </motion.div>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="https://github.com/Dasieloski" className="text-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/dasiel-torres-3b6166320/" className="text-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/DasieIoski" className="text-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/dasieloski/" className="text-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}