import { LineOne, LineTwo } from "@/lib/img-slider-list"
import { ContainerSlider } from "@/ui/components/container-slider/container-slider"
import { Container } from "@/ui/components/container/container"
export const Slide =  () => {
  return(
    <Container className="flex flex-col gap-4 py-8 bg-primary-50">
      <ContainerSlider direction="left" speed="slow" items={LineOne}/>
    </Container>
  )
}