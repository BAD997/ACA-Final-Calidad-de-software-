import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

export function Normas() {
  const normas = [
    {
      nombre: "ISO/IEC 25010",
      descripcion: "Modelo de calidad del producto software",
      caracteristicas: [
        "Funcionalidad",
        "Rendimiento",
        "Compatibilidad",
        "Usabilidad",
        "Fiabilidad",
        "Seguridad",
        "Mantenibilidad",
        "Portabilidad",
      ],
    },
    {
      nombre: "ISO/IEC 9126",
      descripcion: "Evaluación de la calidad del software (reemplazada por ISO 25010)",
      caracteristicas: ["Calidad interna", "Calidad externa", "Calidad en uso"],
    },
    {
      nombre: "ISO 9001",
      descripcion: "Sistema de gestión de calidad",
      caracteristicas: ["Enfoque al cliente", "Liderazgo", "Mejora continua", "Toma de decisiones basada en evidencia"],
    },
  ]

  return (
    <section id="normas" className="py-16 scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <FileText className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Normas de Calidad de Software</h2>
      </div>

      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Las normas de calidad de software son estándares internacionales que establecen criterios y directrices para
          garantizar que el software cumpla con requisitos específicos de calidad. Estas normas proporcionan un marco
          común para evaluar y mejorar la calidad del software.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {normas.map((norma) => (
          <Card key={norma.nombre} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{norma.nombre}</CardTitle>
              <CardDescription>{norma.descripcion}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {norma.caracteristicas.map((caracteristica) => (
                  <Badge key={caracteristica} variant="secondary">
                    {caracteristica}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-accent/5 border-accent">
        <CardHeader>
          <CardTitle>Importancia en Proyectos Educativos</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Establecen un lenguaje común entre estudiantes y profesores</li>
            <li>✓ Proporcionan criterios objetivos para evaluar proyectos</li>
            <li>✓ Preparan a los estudiantes para entornos profesionales</li>
            <li>✓ Fomentan la cultura de calidad desde el aprendizaje</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
