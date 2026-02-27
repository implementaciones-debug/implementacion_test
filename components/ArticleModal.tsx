'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, User, Tag } from 'lucide-react'

interface Article {
  id: string
  title: string
  category: string
  author: string
  readTime: string
  content: string[]
}

interface ArticleModalProps {
  article: Article | null
  isOpen: boolean
  onClose: () => void
}

const articles: Article[] = [
  {
    id: 'operaciones',
    title: 'Cómo reducir costos operativos con automatización',
    category: 'Operaciones',
    author: 'NEXORA SYSTEMS',
    readTime: '15 min de lectura',
    content: [
      'Introducción',
      '',
      'Reducir costos operativos no significa despedir personal ni recortar recursos esenciales. Significa eliminar ineficiencia estructural.',
      '',
      'En la mayoría de las empresas, los costos ocultos no provienen de grandes errores estratégicos, sino de pequeños procesos manuales que se repiten todos los días.',
      '',
      'Horas duplicadas.',
      'Información fragmentada.',
      'Errores humanos.',
      'Retrabajo constante.',
      '',
      'La automatización inteligente no es una tendencia tecnológica. Es una herramienta estratégica para optimizar estructura, tiempo y dinero.',
      '',
      '1. Identificar el verdadero costo oculto',
      '',
      'Antes de automatizar, es necesario medir.',
      '',
      'Preguntas clave:',
      '',
      '¿Cuántas horas semanales se invierten en tareas repetitivas?',
      '¿Cuántos procesos requieren intervención manual innecesaria?',
      '¿Cuántos sistemas no están integrados entre sí?',
      '¿Cuántos errores se corrigen mensualmente?',
      '',
      'Cuando se traduce el tiempo improductivo en costo financiero, el impacto suele sorprender.',
      '',
      'Ejemplo simple:',
      '',
      'Si un equipo pierde 15 horas semanales en tareas manuales y el costo promedio por hora es de $20, estamos hablando de:',
      '',
      '15 x 4 semanas x $20 = $1,200 mensuales',
      '$14,400 anuales en ineficiencia.',
      '',
      'Y esto es solo un proceso.',
      '',
      '2. Automatización estratégica vs automatización aislada',
      '',
      'Uno de los errores más comunes es automatizar sin arquitectura.',
      '',
      'Automatizar un proceso aislado puede ahorrar tiempo, pero si no está integrado en un sistema mayor, genera nuevos puntos de fricción.',
      '',
      'La automatización estratégica implica:',
      '',
      'Mapear procesos completos',
      'Identificar dependencias',
      'Diseñar flujos conectados',
      'Integrar herramientas existentes',
      'Medir impacto real',
      '',
      'No se trata de usar más software.',
      'Se trata de diseñar mejor estructura.',
      '',
      '3. Procesos que suelen generar mayores ahorros',
      '',
      'En nuestra experiencia, las áreas con mayor oportunidad de optimización son:',
      '',
      'Gestión de leads y ventas',
      'Facturación y administración',
      'Reportes y consolidación de datos',
      'Atención al cliente',
      'Seguimiento interno de proyectos',
      '',
      'Automatizar estos procesos puede generar:',
      '',
      'Reducción de errores humanos',
      'Mayor velocidad de respuesta',
      'Mejor experiencia del cliente',
      'Ahorro directo en costos administrativos',
      '',
      '4. La relación entre automatización y crecimiento',
      '',
      'Reducir costos no es el único beneficio.',
      '',
      'La automatización libera capacidad estratégica.',
      '',
      'Cuando el equipo deja de ejecutar tareas repetitivas, puede enfocarse en:',
      '',
      'Innovación',
      'Estrategia comercial',
      'Mejora de producto',
      'Expansión',
      '',
      'La eficiencia no solo ahorra dinero.',
      'Acelera el crecimiento.',
      '',
      'Conclusión',
      '',
      'La pregunta no es si tu empresa necesita automatización.',
      '',
      'La pregunta es:',
      '',
      '¿Cuánto dinero estás perdiendo por no tenerla?',
      '',
      'Reducir costos operativos no requiere recortes drásticos.',
      'Requiere rediseñar la arquitectura empresarial.'
    ]
  },
  {
    id: 'estrategia',
    title: 'Errores comunes en transformación digital',
    category: 'Estrategia',
    author: 'NEXORA SYSTEMS',
    readTime: '12 min de lectura',
    content: [
      'Introducción',
      '',
      'La transformación digital se ha convertido en una prioridad estratégica para empresas de todos los sectores.',
      '',
      'Sin embargo, muchas organizaciones confunden digitalización con transformación.',
      '',
      'El resultado: inversiones elevadas con impacto limitado.',
      '',
      'Estos son los errores más frecuentes.',
      '',
      '1. Comprar herramientas sin estrategia',
      '',
      'El error más común es adquirir software antes de definir arquitectura.',
      '',
      'Se implementan CRM, ERP, plataformas de automatización...',
      'Pero no existe una visión integral.',
      '',
      'La transformación digital comienza con diseño estructural, no con compras tecnológicas.',
      '',
      '2. No rediseñar procesos',
      '',
      'Digitalizar un proceso ineficiente no lo mejora.',
      'Solo lo acelera.',
      '',
      'Antes de implementar tecnología, es necesario preguntarse:',
      '',
      '¿Este proceso tiene sentido?',
      '¿Puede simplificarse?',
      '¿Puede eliminarse?',
      '',
      '3. Ignorar la integración',
      '',
      'Muchas empresas operan con múltiples herramientas que no se comunican entre sí.',
      '',
      'Esto genera:',
      '',
      'Duplicación de datos',
      'Errores manuales',
      'Falta de visibilidad global',
      '',
      'La verdadera transformación ocurre cuando los sistemas están conectados.',
      '',
      '4. No medir impacto',
      '',
      'Sin métricas claras, no existe transformación real.',
      '',
      'Es fundamental establecer indicadores como:',
      '',
      'Reducción de tiempos',
      'Ahorro de costos',
      'Disminución de errores',
      'Mejora en productividad',
      '',
      'Lo que no se mide, no se optimiza.',
      '',
      '5. Subestimar el cambio cultural',
      '',
      'La tecnología es solo una parte.',
      '',
      'La transformación también implica:',
      '',
      'Capacitación',
      'Comunicación interna',
      'Adaptación de mentalidad',
      '',
      'Una estrategia tecnológica sin alineación interna pierde efectividad.',
      '',
      'Conclusión',
      '',
      'Transformar digitalmente no es adoptar herramientas modernas.',
      '',
      'Es rediseñar la estructura operativa para hacerla más eficiente, medible y escalable.',
      '',
      'Las empresas que entienden esto no solo sobreviven al cambio digital.',
      'Lo lideran.'
    ]
  },
  {
    id: 'innovacion',
    title: 'Cómo escalar una empresa con inteligencia artificial',
    category: 'Innovación',
    author: 'NEXORA SYSTEMS',
    readTime: '18 min de lectura',
    content: [
      'Introducción',
      '',
      'Escalar no significa trabajar más.',
      'Significa estructurar mejor.',
      '',
      'La inteligencia artificial permite a las empresas multiplicar capacidad sin multiplicar costos al mismo ritmo.',
      '',
      'Pero para que la IA impulse crecimiento real, debe aplicarse estratégicamente.',
      '',
      '1. IA como herramienta de eficiencia',
      '',
      'Las aplicaciones más efectivas de IA en empresas incluyen:',
      '',
      'Automatización de atención al cliente',
      'Análisis predictivo de ventas',
      'Optimización de inventarios',
      'Clasificación y análisis de datos',
      'Generación de reportes inteligentes',
      '',
      'El impacto no está en la tecnología en sí.',
      'Está en cómo se integra dentro del sistema empresarial.',
      '',
      '2. IA para toma de decisiones',
      '',
      'Uno de los mayores beneficios es la capacidad de convertir datos en información accionable.',
      '',
      'Con IA, las empresas pueden:',
      '',
      'Identificar patrones de comportamiento',
      'Predecir demanda',
      'Detectar riesgos operativos',
      'Optimizar campañas comerciales',
      '',
      'Esto reduce incertidumbre y mejora estrategia.',
      '',
      '3. Escalabilidad sin caos',
      '',
      'El crecimiento desordenado genera:',
      '',
      'Sobrecarga operativa',
      'Errores frecuentes',
      'Costos crecientes',
      '',
      'La IA, integrada dentro de una arquitectura adecuada, permite:',
      '',
      'Procesar mayor volumen sin aumentar proporcionalmente el equipo',
      'Estandarizar decisiones',
      'Mantener control operativo',
      '',
      'Escalar no es crecer en tamaño.',
      'Es crecer en capacidad estructurada.',
      '',
      '4. Riesgos de implementar IA sin estrategia',
      '',
      'Los errores comunes incluyen:',
      '',
      'Adoptar IA por moda',
      'No tener datos organizados',
      'No definir objetivos claros',
      'No medir resultados',
      '',
      'La IA no corrige desorden estructural.',
      'Lo amplifica.',
      '',
      'Conclusión',
      '',
      'La inteligencia artificial no reemplaza liderazgo.',
      'Lo potencia.',
      '',
      'Las empresas que integran IA estratégicamente no solo escalan.',
      'Lo hacen con eficiencia, control y ventaja competitiva.'
    ]
  }
]

const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  if (!article) return null

  const getArticleById = (id: string): Article | undefined => {
    return articles.find(a => a.id === id)
  }

  const currentArticle = article.id ? getArticleById(article.id) : article

  return (
    <AnimatePresence>
      {isOpen && currentArticle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                      {currentArticle.category}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{currentArticle.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {currentArticle.title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <User className="w-4 h-4" />
                    <span>{currentArticle.author}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="prose prose-invert max-w-none">
                {currentArticle.content.map((paragraph, index) => (
                  <p key={index} className={`text-gray-300 leading-relaxed ${
                    paragraph === '' ? 'mb-4' : 'mb-4'
                  }`}>
                    {paragraph === '' ? '\u00A0' : paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-800">
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">
                  🟦 ARTÍCULO {currentArticle.category.toUpperCase()}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Cerrar Artículo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ArticleModal
