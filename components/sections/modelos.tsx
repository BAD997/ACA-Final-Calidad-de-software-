import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Modelos() {
  const modelos = [
    {
      nombre: "CMMI (Capability Maturity Model Integration)",
      descripcion: "Modelo de madurez de capacidades para mejorar procesos",
      niveles: [
        { nivel: "Nivel 1: Inicial", desc: "Procesos impredecibles y reactivos" },
        { nivel: "Nivel 2: Gestionado", desc: "Proyectos gestionados" },
        { nivel: "Nivel 3: Definido", desc: "Procesos organizacionales definidos" },
        { nivel: "Nivel 4: Cuantitativamente gestionado", desc: "Procesos medidos y controlados" },
        { nivel: "Nivel 5: Optimizado", desc: "Mejora continua" },
      ],
    },
    {
      nombre: "McCall",
      descripcion: "Modelo de calidad basado en factores, criterios y métricas",
      niveles: [
        { nivel: "Operación del producto", desc: "Corrección, fiabilidad, eficiencia, integridad, usabilidad" },
        { nivel: "Revisión del producto", desc: "Mantenibilidad, flexibilidad, testeabilidad" },
        { nivel: "Transición del producto", desc: "Portabilidad, reusabilidad, interoperabilidad" },
      ],
    },
    {
      nombre: "Modelo de Boehm",
      descripcion: "Enfoque jerárquico de características de calidad",
      niveles: [
        { nivel: "Nivel superior", desc: "Utilidad general, mantenibilidad, portabilidad" },
        { nivel: "Nivel intermedio", desc: "Características específicas" },
        { nivel: "Nivel primitivo", desc: "Métricas cuantificables" },
      ],
    },
  ]

  return (
    <section id="modelos" className="py-16 scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <Layers className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Modelos de Calidad</h2>
      </div>

      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Los modelos de calidad de software proporcionan marcos estructurados para evaluar y mejorar la calidad del
          software. Estos modelos definen características, atributos y métricas que permiten medir objetivamente la
          calidad de un producto software.
        </p>
      </div>

      <div className="space-y-6">
        {modelos.map((modelo) => (
          <Card key={modelo.nombre}>
            <CardHeader>
              <CardTitle className="text-xl">{modelo.nombre}</CardTitle>
              <CardDescription>{modelo.descripcion}</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {modelo.niveles.map((nivel, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{nivel.nivel}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{nivel.desc}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-primary/5 border-primary">
        <CardHeader>
          <CardTitle>Aplicación en Entornos Educativos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Beneficios</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Estructura clara para evaluar proyectos</li>
                <li>• Desarrollo de pensamiento crítico</li>
                <li>• Preparación para certificaciones</li>
                <li>• Mejora continua del proceso de aprendizaje</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Implementación</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Adaptación a proyectos académicos</li>
                <li>• Evaluación por pares</li>
                <li>• Retroalimentación estructurada</li>
                <li>• Portafolio de evidencias</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
