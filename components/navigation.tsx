"use client"

import { FileText, Layers, Shield, Code, TestTube, Lightbulb, CheckSquare, Video } from "lucide-react"
import { Card } from "@/components/ui/card"

const sections = [
  { icon: FileText, name: "Normas", href: "#normas", color: "text-blue-600" },
  { icon: Layers, name: "Modelos", href: "#modelos", color: "text-purple-600" },
  { icon: Shield, name: "Estándares", href: "#estandares", color: "text-green-600" },
  { icon: Code, name: "Código", href: "#codigo", color: "text-orange-600" },
  { icon: TestTube, name: "Pruebas", href: "#pruebas", color: "text-red-600" },
  { icon: Lightbulb, name: "Conclusiones", href: "#conclusiones", color: "text-yellow-600" },
  { icon: CheckSquare, name: "Recomendaciones", href: "#recomendaciones", color: "text-teal-600" },
  { icon: Video, name: "Video", href: "#video", color: "text-pink-600" },
]

export function Navigation() {
  return (
    <section className="py-12 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contenido del Curso</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <a key={section.name} href={section.href}>
                <Card className="p-4 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <Icon className={`h-6 w-6 ${section.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-xs font-medium">{section.name}</span>
                  </div>
                </Card>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
