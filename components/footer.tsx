import { BookOpen, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-semibold">Calidad de Software</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Aplicación educativa sobre normas, modelos y estándares de calidad para el desarrollo de software.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Secciones</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#normas" className="hover:text-foreground transition-colors">
                  Normas
                </a>
              </li>
              <li>
                <a href="#modelos" className="hover:text-foreground transition-colors">
                  Modelos
                </a>
              </li>
              <li>
                <a href="#estandares" className="hover:text-foreground transition-colors">
                  Estándares
                </a>
              </li>
              <li>
                <a href="#codigo" className="hover:text-foreground transition-colors">
                  Código
                </a>
              </li>
              <li>
                <a href="#pruebas" className="hover:text-foreground transition-colors">
                  Pruebas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="mailto:contacto@ejemplo.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contacto@ejemplo.com</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Calidad de Software. ACA Final.</p>
        </div>
      </div>
    </footer>
  )
}
