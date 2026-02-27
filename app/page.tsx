import Hero from '@/components/Hero'
import ProblemaReal from '@/components/ProblemaReal'
import Resultados from '@/components/Resultados'
import Metodologia from '@/components/Metodologia'
import Impacto from '@/components/Impacto'
import LeadMagnet from '@/components/LeadMagnet'
import Calendario from '@/components/Calendario'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A]">
      <Hero />
      <ProblemaReal />
      <Resultados />
      <Metodologia />
      <Impacto />
      <LeadMagnet />
      <Calendario />
      <FAQ />
      <Blog />
      <CTAFinal />
      <Footer />
    </main>
  )
}
