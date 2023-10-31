'use client' 
import { Container } from "../container/container"
import { useEffect, useRef } from "react"
import { Typography } from "../typography/typography"
import { gsap } from 'gsap'

interface Props {

}

export const TextSlider = ({

}: Props) => {
  const slider = () => {
    let container = document.querySelector('.slider')
    let items : HTMLElement[] = gsap.utils.toArray('.slide')

    items.forEach((item) => {
      gsap.set(item, {
        y: '-150%',
      })
    })
    
    console.log(items[0].offsetWidth);
    
    let tl = gsap.timeline({repeat: -1, repeatDelay: 0})


    // items.forEach((item) => {
    //   tl.to(item, {y: '0%', opacity: 1, duration: .5}, '-=1')
    //   tl.to(item, {y: '150%', opacity: 0, duration: .5}, '+=1')
    //   tl.to(item, {y: '-150%', opacity: 0})
    // })
    
    for (let i = 0; i < items.length; i++) {
      let width = items[i].offsetWidth
      console.log(width)
      tl.to(items[i], {y: '0%', opacity: 1, duration: .5}, '=1')
      tl.to(items[i], {y: '150%', opacity: 0, duration: .5}, '+=1')
      tl.to(items[i], {y: '-150%', opacity: 0})
    }
  }

  useEffect(() => {
    slider()
  },[])

  return (
    <Container 
      className="
        slider h-[2rem] w-[2rem] relative flex flex-col justify-center overflow-y-hidden bg-black
        [&>*]:absolute [&>*]:opacity-0 [&>*]:whitespace-nowrap
      "
    >
      <Typography variant="title-sm" component="h4" className="slide">Slide 1</Typography>
      <Typography variant="title-sm" component="h4" className="slide">Slide 2</Typography>
      <Typography variant="title-sm" component="h4" className="slide">Slide avec un texte plus long</Typography>
      <Typography variant="title-sm" component="h4" className="slide">Slide 4</Typography>
      <Typography variant="title-sm" component="h4" className="slide">Slide 5</Typography>
    </Container>
  )
}