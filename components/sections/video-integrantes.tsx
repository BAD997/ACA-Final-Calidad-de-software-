"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Users } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function VideoIntegrantes() {
  const [videoUrl, setVideoUrl] = useState("")
  const [embedUrl, setEmbedUrl] = useState("")

  const handleVideoSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Convert YouTube URL to embed format
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      let videoId = ""
      if (videoUrl.includes("youtube.com/watch?v=")) {
        videoId = videoUrl.split("watch?v=")[1]?.split("&")[0]
      } else if (videoUrl.includes("youtu.be/")) {
        videoId = videoUrl.split("youtu.be/")[1]?.split("?")[0]
      }
      if (videoId) {
        setEmbedUrl(`https://www.youtube.com/embed/${videoId}`)
      }
    } else if (videoUrl.includes("vimeo.com")) {
      const videoId = videoUrl.split("vimeo.com/")[1]?.split("?")[0]
      if (videoId) {
        setEmbedUrl(`https://player.vimeo.com/video/${videoId}`)
      }
    } else {
      setEmbedUrl(videoUrl)
    }
  }

  return (
    <section id="video" className="py-16 scroll-mt-16">
      <div className="flex items-center gap-3 mb-8">
        <Video className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold">Video de los Integrantes</h2>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <CardTitle>Presentación del Equipo</CardTitle>
          </div>
          <CardDescription>
            Conoce al equipo detrás de este proyecto educativo sobre calidad de software
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!embedUrl ? (
            <>
              <Alert>
                <Video className="h-4 w-4" />
                <AlertDescription>
                  Ingresa la URL de tu video de YouTube, Vimeo o cualquier plataforma de video para mostrarlo aquí.
                </AlertDescription>
              </Alert>

              <form onSubmit={handleVideoSubmit} className="flex gap-2">
                <Input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">Cargar Video</Button>
              </form>

              <div className="bg-muted rounded-lg p-12 text-center">
                <Video className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">El video de presentación aparecerá aquí</p>
              </div>
            </>
          ) : (
            <>
              <div className="aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <Button
                variant="outline"
                onClick={() => {
                  setEmbedUrl("")
                  setVideoUrl("")
                }}
              >
                Cambiar Video
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sobre el Proyecto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Este proyecto educativo fue desarrollado con el objetivo de proporcionar una guía completa y accesible sobre
            calidad de software. Nuestro equipo ha trabajado en la investigación, diseño y desarrollo de esta aplicación
            web para facilitar el aprendizaje de conceptos fundamentales en ingeniería de software.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2">Objetivo</h4>
              <p className="text-sm text-muted-foreground">
                Contextualizar la calidad de software para proyectos educativos y ambientes reales
              </p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2">Alcance</h4>
              <p className="text-sm text-muted-foreground">
                Normas, modelos, estándares, código, pruebas y mejores prácticas
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
