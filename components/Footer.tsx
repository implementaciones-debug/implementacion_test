'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              NEXORA SYSTEMS
            </h3>
            <p className="text-gray-400 mb-4">
              Intelligent Business Architecture
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Diseñamos ecosistemas tecnológicos automatizados que transforman empresas en sistemas inteligentes eficientes.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="mailto:contacto@nexorasystems.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contacto@nexorasystems.com</span>
              </a>
              <a 
                href="tel:+521234567890" 
                className="flex items-center gap-3 text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+52 123 456 7890</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">México City</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#metodologia" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Conecta con nuestra comunidad de líderes empresariales.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2024 NEXORA SYSTEMS. Todos los derechos reservados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                Términos
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                Cookies
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll to Top */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-sky-500/25 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
