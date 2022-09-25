import { About } from "../components/About"
import { Container } from "../components/Container"
import { Presentation } from "../components/Home"
import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { ThemeProvider } from "../contexts/ToggleTheme"

export default function Home() {
  return (
    <div>
      <ThemeProvider>
          <Container>
            <Presentation />
            <About />
            {/* <Skills /> */}
            <Projects />
          </Container>
      </ThemeProvider>
    </div>
  )
}
