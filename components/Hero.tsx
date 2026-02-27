'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const handleAgendarClick = () => {
    // Scroll to calendar section
    const element = document.getElementById('calendario')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDescubrirClick = () => {
    // Scroll to methodology section
    const element = document.getElementById('metodologia')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F1A]">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-[#0B0F1A] to-[#7C3AED]/10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles - optimized */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#3B82F6] rounded-full"
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2">
              NEXORA SYSTEMS
            </h1>
            <p className="text-[#9CA3AF] text-lg sm:text-xl">
              Intelligent Business Architecture
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Convierte tu empresa en un sistema inteligente que trabaja 24/7.
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-[#9CA3AF] mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            En NEXORA SYSTEMS diseñamos ecosistemas tecnológicos automatizados que reducen costos operativos, eliminan tareas manuales innecesarias y preparan tu empresa para escalar sin fricción.
          </motion.p>

          {/* Authority Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12 text-sm sm:text-base"
          >
            <span className="text-[#3B82F6]">Arquitectura tecnológica estratégica.</span>
            <span className="text-[#7C3AED]">Automatización inteligente.</span>
            <span className="text-[#3B82F6]">Crecimiento estructurado.</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAgendarClick}
              className="btn-primary flex items-center gap-2"
            >
              Agendar Diagnóstico Estratégico
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDescubrirClick}
              className="btn-secondary flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Descubrir Cómo Funciona
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#9CA3AF] rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-[#9CA3AF] rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
