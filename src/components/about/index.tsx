import styles from "./style.module.scss"

import { useContext } from "react";
import { ThemeContext } from "../../contexts/ToggleTheme";

export function About(){
    const { theme } = useContext(ThemeContext);

    return(
        <section className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.title}>Sobre mim</div>
            <div className={styles.background}></div>
            <div className={styles.about}>
                <img src="my-picture.png" />
                <p>
                    Olá, meu nome é Walison Ribeiro, um desenvolvedor full stack autodidata e apaixonado por tecnlogoia,
                    principalmente na área da programação.
                    
                    Formado como Técnico em Desenvolvimento de Sistemas e atualmentecursando o segundo semestre em Ciência da Computação 👨‍💻.
                    <br />
                    <br />
                    Desde 2018 estudando e criando projetos web, software, mobile e hardware com arduino.
                    O que mais prezo em meus códigos é a organização e testes.
                    
                    Amo a comunidade dev e como todos podem contribuir com o desenvolvimento de nossas aplicações. Então vamos contribuir reciprocamente,
                    conecte comigo no <a href="https://github.com/walisonvini" target="_blank" rel="noopener noreferrer">GitHub</a> :D
                </p>
                
            </div>
            <h4>
                "Qualquer tolo consegue escrever código que um computador entenda.
                Bons programadores escrevem código que humanos possam entender"
                <p>Martin Fowler</p>
            </h4>
        </section>
    )
}