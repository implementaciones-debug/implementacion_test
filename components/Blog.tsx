'use client'

import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Calendar, User } from 'lucide-react'
import { useState } from 'react'
import ArticleModal from './ArticleModal'

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const articles = [
    {
      id: "operaciones",
      title: "Cómo reducir costos operativos con automatización",
      excerpt: "Descubre estrategias prácticas para identificar y eliminar ineficiencias en tus procesos empresariales mediante la automatización inteligente.",
      author: "NEXORA SYSTEMS",
      date: "15 min de lectura",
      category: "Operaciones",
      gradient: "from-sky-500 to-blue-600"
    },
    {
      id: "estrategia",
      title: "Errores comunes en transformación digital",
      excerpt: "Analizamos los errores más frecuentes que cometen las empresas al iniciar su journey digital y cómo evitarlos.",
      author: "NEXORA SYSTEMS",
      date: "12 min de lectura",
      category: "Estrategia",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: "innovacion",
      title: "Cómo escalar una empresa con inteligencia artificial",
      excerpt: "Implementa IA de forma estratégica para potenciar el crecimiento sostenible de tu organización.",
      author: "NEXORA SYSTEMS",
      date: "18 min de lectura",
      category: "Innovación",
      gradient: "from-emerald-500 to-teal-600"
    }
  ]

  const handleOpenArticle = (article: any) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
            <BookOpen className="w-6 h-6 text-sky-400" />
            <span className="text-sky-400 font-semibold">BLOG ESTRATÉGICO</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Inteligencia Aplicada a
            <span className="gradient-text"> Negocios</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Compartimos estrategias, análisis y perspectivas para líderes empresariales que buscan eficiencia real.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-effect p-6 rounded-2xl h-full flex flex-col">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${article.gradient} text-white text-xs font-semibold`}>
                    {article.category}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Read More */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleOpenArticle(article)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${article.gradient} text-white font-medium hover:shadow-lg transition-all duration-300`}
                >
                  Leer artículo
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <BookOpen className="w-12 h-12 text-sky-400 mx-auto mb-4" />
            
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres recibir contenido exclusivo?
            </h3>
            
            <p className="text-gray-300 mb-6">
              Suscríbete a nuestro newsletter y recibe las últimas estrategias de transformación digital directamente en tu inbox.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Suscribirse al Newsletter
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Article Modal */}
      <ArticleModal 
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default Blog
