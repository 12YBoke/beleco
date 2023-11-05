import { Button } from "@/shadcnui/ui/button"
import { AuthButtons } from "@/ui/components/auth-buttons/auth-buttons"
import { Container } from "@/ui/components/container/container"
import { Menu } from "@/ui/components/menu/menu"
import { Mail } from "lucide-react"

export const NavBar = () => {
  return (
    <header className="z-[10] fixed top-0 left-0 right-0 border-b-[1px] border-primary-100 h-[8vh]">
      <Container variant="Glass-Effect" className="h-full flex flex-row  items-center px-16 justify-between">
        <Container>
          BELECO
        </Container>
        <Container>
          <Menu/>
        </Container>
        <Container className="flex flex-row gap-4 items-center">
          <AuthButtons/>
        </Container>
      </Container>
    </header>
  )
}