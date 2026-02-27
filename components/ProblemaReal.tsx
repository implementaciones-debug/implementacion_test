'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Users, DollarSign } from 'lucide-react'

const ProblemaReal = () => {
  const problems = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "El equipo se sobrecarga",
      description: "Exceso de trabajo manual y repetitivo"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Los errores aumentan",
      description: "Fallas humanas por falta de automatización"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Los costos operativos se disparan",
      description: "Ineficiencias generan gastos innecesarios"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "El crecimiento se vuelve caótico",
      description: "Falta de sistemas escalables"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0F1A] to-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tu empresa no necesita más esfuerzo.
            <br />
            <span className="gradient-text">Necesita mejor arquitectura.</span>
          </h2>
        </motion.div>

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-4xl mx-auto leading-relaxed mb-8">
            La mayoría de las empresas pierden miles de dólares cada año por procesos manuales, herramientas desconectadas y decisiones basadas en información fragmentada.
          </p>
          
          <p className="text-xl text-white font-semibold mb-8">
            Cuando los sistemas no están alineados:
          </p>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-6 rounded-xl text-center card-hover"
            >
              <div className="text-[#7C3AED] mb-4 flex justify-center">
                {problem.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {problem.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] rounded-lg">
            <div className="bg-[#0B0F1A] px-8 py-4 rounded-lg">
              <p className="text-xl sm:text-2xl font-bold text-white">
                El problema no es la falta de talento.
              </p>
              <p className="text-xl sm:text-2xl font-bold gradient-text mt-2">
                Es la ausencia de sistemas inteligentes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemaReal
