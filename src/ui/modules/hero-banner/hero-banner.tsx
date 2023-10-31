'use client'

import { Container } from "@/ui/components/container/container"
import { TextSlider } from "@/ui/components/text-slider/text-slider"
import { Typography } from "@/ui/components/typography/typography"

export const HeroBanner = () => {



  return (
    <Container className="h-[90vh] flex flex-col justify-center items-center">
      <Container className="md:w-[70vw] text-center flex flex-col justify-center items-center">
        <Typography component="h1" variant="display" className="text-primary-900">La solution graphique pour tous vos projets</Typography>
      </Container>
      <TextSlider/>
    </Container>
  )
} 