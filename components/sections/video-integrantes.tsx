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
