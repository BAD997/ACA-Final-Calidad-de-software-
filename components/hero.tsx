import { CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Calidad de Software
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
            Una guía completa sobre las mejores prácticas, normas, modelos y estándares para el desarrollo de software
            de calidad en entornos educativos y profesionales.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            <div className="flex items-center justify-center gap-2 text-sm">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Normas ISO</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Modelos de Calidad</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Buenas Prácticas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
