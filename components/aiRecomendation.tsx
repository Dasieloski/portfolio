'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export function AIRecommendations({ userInput }) {
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    if (userInput.length > 10) {
      // Simulación de recomendaciones basadas en IA
      const simulatedRecommendations = [
        'Proyecto de e-commerce',
        'Aplicación de gestión de tareas',
        'Plataforma de aprendizaje en línea',
      ]
      setRecommendations(simulatedRecommendations)
    } else {
      setRecommendations([])
    }
  }, [userInput])

  if (recommendations.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <Card className="p-4 bg-card text-card-foreground">
        <h3 className="text-lg font-semibold mb-2">Proyectos recomendados basados en tu mensaje:</h3>
        <ul className="list-disc pl-5">
          {recommendations.map((rec, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {rec}
            </motion.li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}