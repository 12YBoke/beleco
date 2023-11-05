'use client'

import { useEffect } from "react"
import { Container } from "../container/container"
import gsap from "gsap"
import { BgImg } from "../bg-img/bg-img"
import { ImgSlider } from "@/types/img-slider"

interface Props {
  items?: ImgSlider[]
  speed?: 'fast' | 'slow'
  direction?: 'left' | 'right'
}

export const ContainerSlider = ({
  items,
  speed = "slow",
  direction = 'left'
}: Props) => {

  const slider = () => {
    const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", new Boolean(true).toString());

      const scrollerInner = document.querySelector<HTMLElement>(".scroller__inner");
      const scrollerContent : HTMLElement[] = gsap.utils.toArray(scrollerInner? scrollerInner.children : null);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInner?.appendChild(duplicatedItem);
      });
    });
  }
  }

  useEffect(() => {
    slider()
  },[])

  return(
    <div className="scroller" data-direction={direction} data-speed={speed}>
      <Container className="scroller__inner" aria-hidden="true">
        {
          items?.map(item => 
            <BgImg key={item.alt} src={item.src} alt={item.alt} className="scroller__part" classNameImg="rounded w-full"/>
          )
        }
      </Container>
    </div>
  )
}