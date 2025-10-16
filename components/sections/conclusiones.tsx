import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, TrendingUp, Users, Award } from "lucide-react"

export function Conclusiones() {
  const conclusiones = [
    {
      icon: TrendingUp,
      titulo: "Mejora Continua",
      descripcion: "La calidad de software no es un destino, sino un viaje continuo de mejora y aprendizaje.",
    },
    {
      icon: Users,
      titulo: "Trabajo en Equipo",
      descripcion: "Las buenas prácticas facilitan la colaboración y comunicación entre desarrolladores.",
    },
    {
      icon: Award,
      titulo: "Valor Profesional",
      descripcion: "Dominar estándares de calidad aumenta significativamente el valor profesional en el mercado.",
    },
  ]

  return (
    <section id="conclusiones" className="py-16 scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <Lightbulb className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Conclusiones</h2>
      </div>

      <Card className="mb-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary">
        <CardHeader>
          <CardTitle className="text-2xl">Reflexión Final</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            La calidad de software es un aspecto fundamental que impacta directamente en el éxito de cualquier proyecto
            tecnológico. A través del estudio de normas, modelos, estándares y buenas prácticas, hemos comprendido que
            la calidad no es un accidente, sino el resultado de un esfuerzo consciente y sistemático.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            En entornos educativos, la aplicación de estos conceptos prepara a los estudiantes para enfrentar desafíos
            reales en la industria del software. La adopción temprana de estándares de calidad forma profesionales más
            competentes y conscientes de la importancia de entregar productos robustos, mantenibles y seguros.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {conclusiones.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.titulo} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.titulo}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.descripcion}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Impacto de la Calidad de Software</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">En el Desarrollo</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Reduce costos de mantenimiento a largo plazo</li>
                <li>✓ Facilita la incorporación de nuevos desarrolladores</li>
                <li>✓ Disminuye la deuda técnica</li>
                <li>✓ Mejora la productividad del equipo</li>
                <li>✓ Permite escalabilidad del proyecto</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">En el Negocio</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Aumenta la satisfacción del cliente</li>
                <li>✓ Reduce riesgos de fallos críticos</li>
                <li>✓ Mejora la reputación de la organización</li>
                <li>✓ Facilita el cumplimiento normativo</li>
                <li>✓ Genera ventaja competitiva</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
