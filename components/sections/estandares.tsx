import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Estandares() {
  return (
    <section id="estandares" className="py-16 scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Estándares de Desarrollo</h2>
      </div>

      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Los estándares de desarrollo establecen convenciones y mejores prácticas que garantizan la consistencia,
          mantenibilidad y calidad del código. Son fundamentales para el trabajo en equipo y proyectos a largo plazo.
        </p>
      </div>

      <Tabs defaultValue="codigo" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="codigo">Código</TabsTrigger>
          <TabsTrigger value="documentacion">Documentación</TabsTrigger>
          <TabsTrigger value="versionado">Versionado</TabsTrigger>
          <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
        </TabsList>

        <TabsContent value="codigo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Estándares de Codificación</CardTitle>
              <CardDescription>Convenciones para escribir código limpio y mantenible</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Nomenclatura
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• Variables: camelCase (userName, totalAmount)</li>
                  <li>• Constantes: UPPER_SNAKE_CASE (MAX_SIZE, API_KEY)</li>
                  <li>• Clases: PascalCase (UserController, DatabaseManager)</li>
                  <li>• Funciones: camelCase descriptivo (calculateTotal, getUserById)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Estructura
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• Indentación consistente (2 o 4 espacios)</li>
                  <li>• Líneas no mayores a 80-120 caracteres</li>
                  <li>• Separación lógica de bloques de código</li>
                  <li>• Comentarios significativos y actualizados</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documentacion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documentación del Proyecto</CardTitle>
              <CardDescription>Elementos esenciales para documentar software</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Documentación Técnica</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• README.md completo</li>
                    <li>• Arquitectura del sistema</li>
                    <li>• API documentation</li>
                    <li>• Diagramas UML</li>
                    <li>• Guía de instalación</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Documentación de Usuario</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Manual de usuario</li>
                    <li>• Tutoriales y guías</li>
                    <li>• FAQ</li>
                    <li>• Casos de uso</li>
                    <li>• Troubleshooting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="versionado" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Control de Versiones</CardTitle>
              <CardDescription>Mejores prácticas con Git y sistemas de versionado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Commits</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Mensajes descriptivos y concisos</li>
                  <li>• Formato: tipo(alcance): descripción</li>
                  <li>• Ejemplo: feat(auth): add login functionality</li>
                  <li>• Commits atómicos (un cambio lógico por commit)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Branching Strategy</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• main/master: código en producción</li>
                  <li>• develop: integración de features</li>
                  <li>• feature/*: nuevas funcionalidades</li>
                  <li>• hotfix/*: correcciones urgentes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seguridad" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Estándares de Seguridad</CardTitle>
              <CardDescription>Prácticas esenciales para desarrollo seguro</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-accent" />
                    OWASP Top 10
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                    <li>• Inyección SQL</li>
                    <li>• Autenticación rota</li>
                    <li>• Exposición de datos sensibles</li>
                    <li>• XXE (XML External Entities)</li>
                    <li>• Control de acceso roto</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Buenas Prácticas</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Validación de entrada de datos</li>
                    <li>• Encriptación de datos sensibles</li>
                    <li>• Gestión segura de credenciales</li>
                    <li>• Actualizaciones regulares de dependencias</li>
                    <li>• Principio de mínimo privilegio</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
