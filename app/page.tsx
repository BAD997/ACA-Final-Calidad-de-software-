import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Normas } from "@/components/sections/normas"
import { Modelos } from "@/components/sections/modelos"
import { Estandares } from "@/components/sections/estandares"
import { Codigo } from "@/components/sections/codigo"
import { Pruebas } from "@/components/sections/pruebas"
import { Conclusiones } from "@/components/sections/conclusiones"
import { Recomendaciones } from "@/components/sections/recomendaciones"
import { VideoIntegrantes } from "@/components/sections/video-integrantes"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Normas />
        <Modelos />
        <Estandares />
        <Codigo />
        <Pruebas />
        <Conclusiones />
        <Recomendaciones />
        <VideoIntegrantes />
      </main>

      <Footer />
    </div>
  )
}
