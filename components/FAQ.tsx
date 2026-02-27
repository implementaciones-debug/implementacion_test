'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Cuánto tiempo toma implementar la automatización?",
      answer: "Depende de la complejidad del sistema actual. Algunos procesos pueden optimizarse en semanas; arquitecturas completas requieren planificación estratégica estructurada."
    },
    {
      question: "¿Necesito cambiar mis herramientas actuales?",
      answer: "No necesariamente. En muchos casos integramos y optimizamos lo que ya utilizas."
    },
    {
      question: "¿Qué tipo de empresas pueden aplicar?",
      answer: "Trabajamos con empresas en crecimiento que buscan eficiencia operativa y escalabilidad estructurada."
    },
    {
      question: "¿Cuál es el retorno estimado?",
      answer: "El retorno depende del nivel de optimización, pero la mayoría de las empresas recuperan la inversión mediante reducción de costos y mejora en productividad."
    },
    {
      question: "¿Qué tan segura es la integración tecnológica?",
      answer: "Implementamos prácticas modernas de seguridad y arquitectura robusta para proteger información y procesos."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-sky-400" />
            <span className="text-sky-400 font-semibold">FAQS ESTRATÉGICAS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Preguntas
            <span className="gradient-text"> Frecuentes</span>
          </h2>
          
          <p className="text-gray-400 text-lg">
            Resolvemos tus dudas sobre transformación digital
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-sky-400" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-lg">
            <div className="bg-black px-8 py-4 rounded-lg">
              <p className="text-white">
                ¿Tienes más preguntas?
              </p>
              <p className="gradient-text font-semibold">
                Agenda una consulta con nuestros expertos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
