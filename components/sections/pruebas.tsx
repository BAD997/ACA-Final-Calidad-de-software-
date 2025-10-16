import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TestTube, Target } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function Pruebas() {
  return (
    <section id="pruebas" className="py-16 scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <TestTube className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Pruebas y Evaluación</h2>
      </div>

      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Las pruebas de software son fundamentales para garantizar la calidad y confiabilidad del producto. Un enfoque
          sistemático de testing ayuda a detectar errores tempranamente y asegurar que el software cumple con los
          requisitos especificados.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pruebas Unitarias</CardTitle>
            <CardDescription>Testing de componentes individuales</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Prueban funciones/métodos aislados</li>
              <li>• Rápidas de ejecutar</li>
              <li>• Fáciles de mantener</li>
              <li>• Base de la pirámide de testing</li>
            </ul>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Cobertura recomendada</span>
                <span className="font-semibold">70-80%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pruebas de Integración</CardTitle>
            <CardDescription>Testing de módulos combinados</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Verifican interacción entre módulos</li>
              <li>• Detectan problemas de interfaces</li>
              <li>• Prueban flujos de datos</li>
              <li>• Validan APIs y servicios</li>
            </ul>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Cobertura recomendada</span>
                <span className="font-semibold">40-60%</span>
              </div>
              <Progress value={50} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pruebas E2E</CardTitle>
            <CardDescription>Testing de flujos completos</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Simulan comportamiento del usuario</li>
              <li>• Prueban el sistema completo</li>
              <li>• Validan casos de uso reales</li>
              <li>• Más lentas pero muy valiosas</li>
            </ul>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Cobertura recomendada</span>
                <span className="font-semibold">10-20%</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Tipos Adicionales de Pruebas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Pruebas de Rendimiento</h4>
                <p className="text-sm text-muted-foreground">
                  Evalúan la velocidad, escalabilidad y estabilidad del sistema bajo carga.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pruebas de Seguridad</h4>
                <p className="text-sm text-muted-foreground">
                  Identifican vulnerabilidades y aseguran la protección de datos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pruebas de Usabilidad</h4>
                <p className="text-sm text-muted-foreground">
                  Verifican que la interfaz sea intuitiva y fácil de usar.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Pruebas de Regresión</h4>
                <p className="text-sm text-muted-foreground">
                  Aseguran que nuevos cambios no rompan funcionalidad existente.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pruebas de Aceptación</h4>
                <p className="text-sm text-muted-foreground">
                  Validan que el software cumple con los requisitos del cliente.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pruebas de Compatibilidad</h4>
                <p className="text-sm text-muted-foreground">
                  Verifican funcionamiento en diferentes plataformas y dispositivos.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary">
        <CardHeader>
          <CardTitle>Herramientas de Testing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-sm">JavaScript/TypeScript</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Jest</li>
                <li>• Vitest</li>
                <li>• Cypress</li>
                <li>• Playwright</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">Java</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• JUnit</li>
                <li>• TestNG</li>
                <li>• Mockito</li>
                <li>• Selenium</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">Python</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• pytest</li>
                <li>• unittest</li>
                <li>• Robot Framework</li>
                <li>• Behave</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">C#/.NET</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• NUnit</li>
                <li>• xUnit</li>
                <li>• MSTest</li>
                <li>• SpecFlow</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
