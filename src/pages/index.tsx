import { I18nextProvider } from "react-i18next"
import { About } from "../components/about"
import { Container } from "../components/container"
import { Presentation } from "../components/Home"
import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { ThemeProvider } from "../contexts/ToggleTheme"

import global_en from "../translations/en/global.json"
import global_ptBr from "../translations/pt-br/global.json"
import i18next from "i18next"

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    ptBr: {
      global: global_ptBr
    }
  },
})

export default function Home() {
  return (
    <div>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider>
            <Container>
              <Presentation />
              <About />
              <Skills />
              <Projects />
            </Container>
        </ThemeProvider>
      </I18nextProvider>
    </div>
  )
}
