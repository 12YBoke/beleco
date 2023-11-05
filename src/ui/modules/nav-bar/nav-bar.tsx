import { MainRoute } from "@/routes/routes"
import { Container } from "@/ui/components/container/container"
import { Menu } from "@/ui/components/menu/menu"

export const NavBar = () => {
  return (
    <header className="z-[10] fixed top-0 left-0 right-0 border-b-[1px] border-primary-100 bg-white h-[8vh]">
      <Container variant="Glass-Effect" className="h-full flex flex-row  items-center px-16">
        <Container className="flex flex-row gap-8 items-center">
          <Container>
            BELECO
          </Container>
          <Container>
            <Menu/>
          </Container>
        </Container>
        <Container>
        </Container>
      </Container>
    </header>
  )
}