import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquare, BookOpen, Code2, Users2, Rocket } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function Recomendaciones() {
  return (
    <section id="recomendaciones" className="py-16 scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <CheckSquare className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Recomendaciones</h2>
      </div>

      <Alert className="mb-8 border-accent bg-accent/5">
        <Rocket className="h-4 w-4" />
        <AlertTitle>Comienza Hoy Mismo</AlertTitle>
        <AlertDescription>
          No esperes a tener el proyecto perfecto. Implementa estas prácticas gradualmente y verás mejoras
          significativas en la calidad de tu código.
        </AlertDescription>
      </Alert>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle>Para Estudiantes</CardTitle>
            </div>
            <CardDescription>Construye bases sólidas desde el inicio</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="text-accent font-bold">1.</span>
                <span>Practica escribir código limpio desde tus primeros proyectos</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">2.</span>
                <span>Aprende y aplica al menos un framework de testing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">3.</span>
                <span>Usa control de versiones (Git) en todos tus proyectos</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">4.</span>
                <span>Lee código de proyectos open source de calidad</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">5.</span>
                <span>Documenta tu código como si otros fueran a leerlo</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">6.</span>
                <span>Participa en code reviews con tus compañeros</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users2 className="h-5 w-5 text-primary" />
              <CardTitle>Para Equipos de Desarrollo</CardTitle>
            </div>
            <CardDescription>Establece cultura de calidad en tu equipo</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="text-accent font-bold">1.</span>
                <span>Define y documenta estándares de código del equipo</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">2.</span>
                <span>Implementa revisiones de código obligatorias</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">3.</span>
                <span>Automatiza pruebas con CI/CD pipelines</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">4.</span>
                <span>Realiza retrospectivas para mejorar procesos</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">5.</span>
                <span>Invierte tiempo en refactorización regular</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">6.</span>
                <span>Mantén documentación técnica actualizada</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <CardTitle>Herramientas Recomendadas</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-sm">Análisis de Código</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• SonarQube - Análisis estático</li>
                <li>• ESLint - Linting JavaScript</li>
                <li>• Prettier - Formateo automático</li>
                <li>• CodeClimate - Métricas de calidad</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Testing</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Jest/Vitest - Unit testing</li>
                <li>• Cypress - E2E testing</li>
                <li>• Postman - API testing</li>
                <li>• JMeter - Performance testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">CI/CD</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• GitHub Actions - Automatización</li>
                <li>• Jenkins - Integración continua</li>
                <li>• Docker - Contenedorización</li>
                <li>• Vercel/Netlify - Deployment</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary">
        <CardHeader>
          <CardTitle>Recursos de Aprendizaje</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Libros Recomendados</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "Clean Code" - Robert C. Martin</li>
                <li>• "The Pragmatic Programmer" - Hunt & Thomas</li>
                <li>• "Refactoring" - Martin Fowler</li>
                <li>• "Design Patterns" - Gang of Four</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Plataformas Online</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Coursera - Cursos de universidades</li>
                <li>• Udemy - Cursos prácticos</li>
                <li>• Pluralsight - Contenido técnico</li>
                <li>• freeCodeCamp - Recursos gratuitos</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
