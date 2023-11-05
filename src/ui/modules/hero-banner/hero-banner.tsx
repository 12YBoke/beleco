'use client'

import { Container } from "@/ui/components/container/container"
import { TextSlider } from "@/ui/components/text-slider/text-slider"
import { Typography } from "@/ui/components/typography/typography"
import { SearchBar } from "../search-bar/search-bar"
import { AuthButtons } from "@/ui/components/auth-buttons/auth-buttons"

export const HeroBanner = () => {



  return (
    <Container className="h-[90vh] pb-8 flex flex-col justify-end items-center gap-10">
      <Container className="md:w-[70vw] text-center flex flex-col justify-center items-center">
        <Typography component="h1" variant="display" className="text-primary-900">La solution graphique pour tous vos projets</Typography>
      </Container>
      <Container className="md:w-[70vw] flex flex-col gap-2 items-center ">
        <Typography component="p" variant="body-lg" className="text-primary-900">
          Que vous rechechiez des
        </Typography>
        <TextSlider
          items={[
            {
              key: 'option1',
              content: 'Modèles de mise en page Excel, Word, PowerPoint'
            },
            {
              key: 'option2',
              content: 'Maquettes de site web de qualité professionnelle'
            },
            {
              key: 'option3',
              content: 'Logos personnalisés et uniques'
            },
            {
              key: 'option4',
              content: 'Icônes et illustrations pour tous vos besoins'
            },
            {
              key: 'option5',
              content: 'Ou tout autre éléments graphiques'
            }
          ]}
          className="text-primary-900"
        />
        <Typography  component="p" variant="body-lg" className="text-primary-900">Vous etes au bon endroit</Typography>
      </Container>
      <Container className="w-[50%]">
        <SearchBar/>
      </Container>
    </Container>
  )
} 