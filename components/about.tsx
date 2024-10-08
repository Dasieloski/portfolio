'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="sobre-mi" className="py-20 px-4">
            <motion.h2
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                Sobre Mí
            </motion.h2>
            <div ref={ref} className="max-w-4xl mx-auto">
                <Card className="p-6 mb-8 bg-card text-card-foreground">
                    <motion.p
                        className="text-lg mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Desarrollador Full Stack apasionado por crear soluciones innovadoras y de alto impacto. Recientemente graduado de la Universidad de Ciencias Informáticas, he desarrollado varios proyectos web, aplicando buenas prácticas en desarrollo ágil y versionado de código. Busco una oportunidad en una empresa donde pueda crecer profesionalmente y aportar mi creatividad a través de soluciones tecnológicas de vanguardia.
                    </motion.p>
                    <motion.p
                        className="text-lg mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Mi enfoque se centra en la creación de código limpio, mantenible y eficiente. Siempre estoy
                        buscando nuevas formas de optimizar el rendimiento y mejorar la experiencia del usuario en
                        cada proyecto que emprendo.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button>
                                    Descargar CV
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <a href="/Dasiel%20Torres%20CV%20Resume%20(español).pdf" download className="w-full">
                                        Español
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="/Dasiel%20Torres%20CV%20Resume%20(inglés).pdf" download className="w-full">
                                        English
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </motion.div>
                </Card>
            </div>
        </section>
    )
}