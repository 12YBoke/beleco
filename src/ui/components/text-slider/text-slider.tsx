'use client' 
import { useEffect,  } from "react"
import { Typography } from "../typography/typography"
import { gsap } from 'gsap'
import clsx from "clsx"

interface Props {
  className?: string
  items: {key: string, content: string}[]
  variant?: 
    'body-lg'     | 
    'body-base'   
}

export const TextSlider = ({
  items,
  variant = 'body-lg',
  className
}: Props) => {
  const slider = () => {
    let container = document.querySelector<HTMLElement>('.slider')
    let items : HTMLElement[] = gsap.utils.toArray('.slide')

    items.forEach((item) => {
      gsap.set(item, {
        y: '-150%',
      })
    })
    
    let height = container?.offsetHeight
    gsap.set(container, {
      height : height? height + 10 : 10,
    })
    
    console.log(items[2].offsetWidth);
    console.log(container?.offsetWidth);
    
    let tl = gsap.timeline({repeat: -1, repeatDelay: 0})
    
    for (let i = 0; i < items.length; i++) {
      
      tl.to(container, {width : items[i].offsetWidth + 5, duration: .1}, '-=.6' )
      tl.to(items[i], {y: '0%', opacity: 1, duration: .5}, '-=.5')
      tl.to(items[i], {y: '150%', opacity: 0, duration: .5}, '+=2')
      tl.to(items[i], {y: '-150%', opacity: 0})
    }
  }

  useEffect(() => {
    slider()
  },[])

  return (
    <span 
      className={
        clsx(
          "slider h-[1rem] w-[1rem] relative flex flex-col justify-center overflow-hidden",
          "[&>*]:absolute [&>*]:opacity-0 [&>*]:whitespace-nowrap",
          className
        )
      }
    >
      {
        items.map(item => 
          <Typography key={item.key} variant={variant} component="span" className="slide">{item.content}</Typography>   
        )
      }
    </span>
  )
}