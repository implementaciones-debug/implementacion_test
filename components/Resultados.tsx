'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, TrendingUp, Clock, DollarSign, BarChart } from 'lucide-react'

const Resultados = () => {
  const resultados = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización Inteligente",
      description: "Diseñamos flujos automatizados que eliminan tareas repetitivas y reducen errores humanos.",
      impact: [
        { icon: <Clock className="w-4 h-4" />, text: "Menos tiempo perdido" },
        { icon: <TrendingUp className="w-4 h-4" />, text: "Más productividad por empleado" },
        { icon: <DollarSign className="w-4 h-4" />, text: "Reducción directa de costos operativos" }
      ],
      gradient: "from-[#3B82F6] to-[#7C3AED]"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Infraestructura Tecnológica Estratégica",
      description: "Creamos sistemas personalizados que integran tus herramientas y centralizan tu información.",
      impact: [
        { icon: <BarChart className="w-4 h-4" />, text: "Control total en tiempo real" },
        { icon: <TrendingUp className="w-4 h-4" />, text: "Escalabilidad sin desorden" },
        { icon: <Zap className="w-4 h-4" />, text: "Toma de decisiones basada en datos" }
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Presencia Digital de Alto Rendimiento",
      description: "No diseñamos páginas. Creamos activos digitales estratégicos que posicionan tu empresa y generan oportunidades reales.",
      impact: [
        { icon: <Shield className="w-4 h-4" />, text: "Mayor percepción de autoridad" },
        { icon: <DollarSign className="w-4 h-4" />, text: "Más oportunidades calificadas" },
        { icon: <BarChart className="w-4 h-4" />, text: "Mejor conversión" }
      ],
      gradient: "from-[#7C3AED] to-[#3B82F6]"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#111827] to-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Resultados que Diseñamos
          </h2>
          <p className="text-gray-400 text-lg">
            Impacto real. Medible. Sostenible.
          </p>
        </motion.div>

        {/* Resultados Cards */}
        <div className="space-y-12">
          {resultados.map((resultado, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Icon and Title */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${resultado.gradient} mb-6`}
                >
                  <div className="text-white">
                    {resultado.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {resultado.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {resultado.description}
                </p>
                
                <div className="text-sm font-semibold text-gray-400 mb-4">
                  Impacto real:
                </div>
                
                <ul className="space-y-3">
                  {resultado.impact.map((item, impactIndex) => (
                    <motion.li
                      key={impactIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * impactIndex }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${resultado.gradient} text-white`}>
                        {item.icon}
                      </div>
                      <span className="text-white">• {item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`w-64 h-64 rounded-2xl bg-gradient-to-br ${resultado.gradient} opacity-20 blur-xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resultados
