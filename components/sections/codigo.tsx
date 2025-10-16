import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code } from "lucide-react"

export function Codigo() {
  return (
    <section id="codigo" className="py-16 scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <Code className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Código y Programación</h2>
      </div>

      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          La calidad del código es fundamental para el éxito de cualquier proyecto de software. Un código limpio, bien
          estructurado y siguiendo principios sólidos facilita el mantenimiento, reduce errores y mejora la colaboración
          en equipo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Principios SOLID</CardTitle>
            <CardDescription>Fundamentos de diseño orientado a objetos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm mb-1">S - Single Responsibility</h4>
              <p className="text-sm text-muted-foreground">Una clase debe tener una única responsabilidad</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">O - Open/Closed</h4>
              <p className="text-sm text-muted-foreground">Abierto para extensión, cerrado para modificación</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">L - Liskov Substitution</h4>
              <p className="text-sm text-muted-foreground">Las subclases deben ser sustituibles por sus clases base</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">I - Interface Segregation</h4>
              <p className="text-sm text-muted-foreground">Interfaces específicas mejor que una general</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">D - Dependency Inversion</h4>
              <p className="text-sm text-muted-foreground">Depender de abstracciones, no de implementaciones</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Clean Code</CardTitle>
            <CardDescription>Principios de código limpio</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Nombres significativos y descriptivos</li>
              <li>✓ Funciones pequeñas y enfocadas</li>
              <li>✓ Comentarios solo cuando sea necesario</li>
              <li>✓ Formateo consistente</li>
              <li>✓ Manejo apropiado de errores</li>
              <li>✓ No repetir código (DRY)</li>
              <li>✓ Mantener bajo acoplamiento</li>
              <li>✓ Alta cohesión</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Patrones de Diseño</CardTitle>
          <CardDescription>Soluciones probadas a problemas comunes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Creacionales</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Singleton</li>
                <li>• Factory Method</li>
                <li>• Abstract Factory</li>
                <li>• Builder</li>
                <li>• Prototype</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Estructurales</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Adapter</li>
                <li>• Bridge</li>
                <li>• Composite</li>
                <li>• Decorator</li>
                <li>• Facade</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Comportamiento</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Observer</li>
                <li>• Strategy</li>
                <li>• Command</li>
                <li>• Iterator</li>
                <li>• State</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-accent/5 border-accent">
        <CardHeader>
          <CardTitle>Refactorización</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            La refactorización es el proceso de mejorar el código sin cambiar su comportamiento externo. Es esencial
            para mantener la calidad del código a largo plazo.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-sm">Cuándo refactorizar</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Código duplicado</li>
                <li>• Funciones muy largas</li>
                <li>• Clases muy grandes</li>
                <li>• Listas de parámetros largas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">Técnicas comunes</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Extraer método</li>
                <li>• Renombrar variables</li>
                <li>• Mover método/campo</li>
                <li>• Simplificar condicionales</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
