import { LogInRoute, LogOutRoute, SignUpRoute } from "@/routes/routes"
import { Button } from "../buttons/button"
import { Container } from "../container/container"

export const AuthButtons = () => {
  const isConnected = false

  return(
    <Container className="flex flex-row justify-center gap-4">
      {
        isConnected ?
          LogOutRoute.map(logout => 
            <Button key={logout.title}>{logout.title}</Button>
          )
        :
        <>
          {
            LogInRoute.map(login => 
              <Button key={login.title}>{login.title}</Button>
            )
          }
          {
            SignUpRoute.map(signup => 
              <Button variant="ghost" key={signup.title}>{signup.title}</Button>
            )
          }
        </>
      }

    </Container>
  )
}