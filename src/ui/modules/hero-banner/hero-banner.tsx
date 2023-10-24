'use client'

import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/components/typography/typography"

export const HeroBanner = () => {
  return (
    <Container className="h-[90vh] flex flex-col justify-center items-center">
      <Container className="w-[70vw] text-center flex justify-center items-center">
        <Typography component="h1" variant="title-lg" className="text-primary-900">La solution graphique pour tous vos projets</Typography>
      </Container>
    </Container>
  )
}