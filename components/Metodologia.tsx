'use client'

import { motion } from 'framer-motion'
import { Search, Cpu, Zap, TrendingUp, CheckCircle } from 'lucide-react'

const Metodologia = () => {
  const pasos = [
    {
      number: "1",
      title: "Diagnóstico Estratégico",
      description: "Analizamos tus procesos actuales, identificamos fricciones operativas y cuantificamos oportunidades de optimización.",
      icon: <Search className="w-6 h-6" />,
      color: "from-sky-500 to-blue-600"
    },
    {
      number: "2",
      title: "Arquitectura del Sistema",
      description: "Diseñamos la estructura tecnológica ideal alineada a tus objetivos de crecimiento.",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      number: "3",
      title: "Implementación y Automatización",
      description: "Desarrollamos, integramos y automatizamos cada componente del sistema.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600"
    },
    {
      number: "4",
      title: "Optimización Continua",
      description: "Medimos resultados y ajustamos constantemente para maximizar eficiencia.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    }
  ]

  return (
    <section id="metodologia" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
            Nuestro Framework de
            <span className="gradient-text"> Transformación Inteligente</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pasos.map((paso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent transform -translate-y-1/2" />
              )}

              <div className="glass-effect p-8 rounded-2xl h-full">
                {/* Step Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${paso.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {paso.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white/20">
                      {paso.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {paso.title}
                    </h3>
                  </div>
                </div>

                {/* Step Description */}
                <p className="text-gray-300 leading-relaxed">
                  {paso.description}
                </p>

                {/* Completion Indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 + 0.2 * index }}
                  viewport={{ once: true }}
                  className={`mt-6 h-1 bg-gradient-to-r ${paso.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-white font-medium">
              Proceso estructurado. Resultados medibles.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Metodologia
