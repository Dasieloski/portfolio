/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};


const projects = [
  {
    title: 'Proyecto 1',
    description: 'Una aplicación web e-commerce dedicado a articulos y suplementos para tatuar.',
    image: '/nk.png',
    tags: ['NextJS', 'Node.js', 'Strapi', 'JavaScript', 'Typescript','Tailwind-CSS','shadcn/ui'],
    link: "mktattoo.vercel.app"
  },
   {
    title: 'Proyecto 2',
    description: 'Un juego clásico de Sudoku.',
    image: '/Sudoku.png',
    tags: ['NextJS', 'Node.js', 'Typescript','Tailwind-CSS','shadcn/ui'],
    link: "sudokumaritza.vercel.app"
  },
   {
     title: 'Proyecto 3',
     description: 'Sitio web de un gimnasio que gestiona clientes, entrenadores y membresias',
     image: '/gymvictoria.png',
     tags: ['NextJS', 'Typescript', 'Supabase','NextAuth','PostgreSQL','Tailwind-CSS','shadcn/ui'],
     link: "gymvictoria.vercel.app"
   },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="proyectos" className="py-20 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Mis Proyectos
      </motion.h2>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Card
        className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative h-48"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer">
            <Button>Ver detalles</Button>
          </a>


        </div>
      </Card>
    </motion.div>
  )
}