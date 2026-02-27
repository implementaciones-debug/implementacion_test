'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, TrendingDown, Zap, Users } from 'lucide-react'

const Impacto = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const metricas = [
    {
      valor: "+35%",
      descripcion: "aumento en eficiencia operativa",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      valor: "-28%",
      descripcion: "reducción en costos administrativos",
      icon: <TrendingDown className="w-6 h-6" />,
      color: "from-red-500 to-pink-600"
    },
    {
      valor: "3X",
      descripcion: "más velocidad en ejecución de procesos",
      icon: <Zap className="w-6 h-6" />,
      color: "from-sky-500 to-blue-600"
    },
    {
      valor: "100%",
      descripcion: "menos dependencia de tareas manuales",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Cuando la arquitectura mejora,
            <span className="gradient-text"> los números cambian.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Métricas reales de empresas transformadas
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metricas.map((metrica, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 * index,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="glass-effect p-6 rounded-2xl text-center h-full">
                {/* Icon */}
                <motion.div
                  animate={isInView ? { 
                    rotate: [0, 360],
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    delay: 0.5 + index * 0.2,
                    ease: "easeInOut"
                  }}
                  className={`inline-flex p-3 rounded-full bg-gradient-to-r ${metrica.color} mb-4`}
                >
                  <div className="text-white">
                    {metrica.icon}
                  </div>
                </motion.div>

                {/* Value */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-3xl sm:text-4xl font-bold gradient-text mb-2"
                >
                  {metrica.valor}
                </motion.div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {metrica.descripcion}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${metrica.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg">
            <div className="bg-black px-8 py-4 rounded-lg">
              <p className="text-lg sm:text-xl text-white">
                No son promesas. Son
                <span className="gradient-text font-bold"> resultados estructurales.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 2,
              }}
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 blur-3xl"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impacto
