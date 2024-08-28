'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'JavaScript', icon: '/javascript.svg' },
  { name: 'TypeScript', icon: '/typescript.svg' },
  { name: 'React', icon: '/react.svg' },
  { name: 'NestJS', icon: '/nest.svg' },
  { name: 'Next.js', icon: '/next.png' },
  { name: 'PostgreSQL', icon: '/postgresql.svg' },
/*   { name: 'MongoDB', icon: '/mongodb.svg' }, */
  { name: 'Git', icon: '/git.svg' },
  { name: 'Docker', icon: '/docker.svg' },
/*   { name: 'AWS', icon: '/aws.svg' }, */
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="habilidades" className="py-20 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Mis Habilidades
      </motion.h2>
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image src={skill.icon} alt={`${skill.name} icon`} width={48} height={48} className="mb-2" />
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
