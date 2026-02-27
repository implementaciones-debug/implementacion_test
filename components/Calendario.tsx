'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Video } from 'lucide-react'

const Calendario = () => {
  return (
    <section id="calendario" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Agenda tu Evaluación
            <span className="gradient-text"> Estratégica</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Selecciona el horario que mejor se adapte a tu agenda y recibe una sesión personalizada con nuestro equipo.
          </p>
        </motion.div>

        {/* Calendar Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect p-8 rounded-2xl">
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  icon: <Calendar className="w-5 h-5" />,
                  title: "Flexibilidad Total",
                  description: "Elige tu fecha y hora preferida"
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  title: "30 Minutos",
                  description: "Sesión enfocada y directa"
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  title: "Expertos",
                  description: "Consultores especializados"
                },
                {
                  icon: <Video className="w-5 h-5" />,
                  title: "Virtual",
                  description: "Desde cualquier lugar"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 mb-3">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Calendly Embed Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black/50 rounded-xl p-8 border border-gray-700"
            >
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  Calendario de Disponibilidad
                </h3>
                
                <p className="text-gray-400 mb-6">
                  Integración con Calendly próximamente
                </p>
                
                {/* Calendar Placeholder */}
                <div className="bg-gray-800/50 rounded-lg p-8 mb-6 border-2 border-dashed border-gray-600">
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, index) => (
                      <div key={index} className="text-center text-gray-400 text-sm font-medium">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2">
                    {[...Array(35)].map((_, index) => (
                      <div
                        key={index}
                        className={`aspect-square flex items-center justify-center rounded-lg text-sm ${
                          index >= 7 && index <= 13
                            ? 'bg-gradient-to-r from-sky-500/20 to-blue-600/20 text-sky-400 border border-sky-500/30'
                            : index > 0 && index < 31
                            ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 cursor-pointer'
                            : 'text-gray-600'
                        }`}
                      >
                        {index > 0 && index <= 31 ? index : ''}
                      </div>
                    ))}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Ver Horarios Disponibles
                </motion.button>
              </div>
            </motion.div>

            {/* Bottom Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full">
                <Video className="w-5 h-5 text-sky-400" />
                <span className="text-white">
                  Recibirás un enlace de Google Meet antes de la sesión
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Calendario
