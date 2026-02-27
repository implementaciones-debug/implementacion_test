import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NEXORA SYSTEMS - Intelligent Business Architecture',
  description: 'Diseñamos ecosistemas tecnológicos automatizados que reducen costos operativos, eliminan tareas manuales innecesarias y preparan tu empresa para escalar sin fricción.',
  keywords: 'automatización, inteligencia artificial, transformación digital, eficiencia operativa, sistemas empresariales',
  openGraph: {
    title: 'NEXORA SYSTEMS - Intelligent Business Architecture',
    description: 'Arquitectura tecnológica estratégica. Automatización inteligente. Crecimiento estructurado.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXORA SYSTEMS - Intelligent Business Architecture',
    description: 'Convierte tu empresa en un sistema inteligente que trabaja 24/7.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
