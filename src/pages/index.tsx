import { Container } from "../components/container"
import { Presentation } from "../components/presentation"
import { ThemeProvider } from "../contexts/ToggleTheme"

export default function Home() {
  return (
    <div>
      <ThemeProvider>
          <Container>
            <Presentation />
          </Container>
      </ThemeProvider>
    </div>
  )
}
