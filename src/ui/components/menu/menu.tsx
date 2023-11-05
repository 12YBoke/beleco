"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/shadcnui/ui/navigation-menu"
import { AppLinks } from "@/types/app-links"
import { MainRoute } from "@/routes/routes"
import { Typography } from "../typography/typography"
import { ActiveLink } from "../active-link/active-link"
import { Container } from "../container/container"

const Links: AppLinks[] = MainRoute

export const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
      {
      Links.map(link =>
        <NavigationMenuItem key={link.title} >
          {link.children ? 
            <>
              <NavigationMenuTrigger className="rounded">{link.title}</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px]">
                  {link.children?.map((child) => (
                    <ListItem
                      key={child.title}
                      title={child.title}
                      href={child.baseUrl}
                      Icon={child.Icon}
                      color={child.color}
                    >
                      {child.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </>
            :
            <ActiveLink href={link.baseUrl? link.baseUrl : '/'} className={cn(navigationMenuTriggerStyle(), 'rounded')}>
              {link.title}
            </ActiveLink>
            }
        </NavigationMenuItem>
        )
      }
      </NavigationMenuList>
    </NavigationMenu>
  )
}

interface Props {
  className?: string,
  title?: string,
  children?: React.ReactNode
  Icon?: React.ElementType
  href?: string
  color?: string
}

export const ListItem = ({ className, title, children, Icon, href, color }: Props) => {
  return (
    <li>
      <ActiveLink href={href ? href : '/'}
        className={cn(
          "group block select-none space-y-1 rounded p-4 leading-none no-underline outline-none transition-colors hover:bg-primary-50",
          className
        )}
      > 
        <Container className="flex flex-row justify-center gap-4 ">
          <Container className={cn("flex justify-center items-center px-4 bg-white rounded", color)}>
            {Icon?
              <Icon/>
              :
              null
            }
          </Container>
          <Container className=" group-hover:text-primary-600">
            <Typography component="p" variant="body-lg" className="leading-none">{title}</Typography>
            <Typography component="p" variant="body-base" className="line-clamp-4">
              {children}
            </Typography>
          </Container>
        </Container>
        
      </ActiveLink>
    </li>
  )
}

ListItem.displayName = "ListItem"
