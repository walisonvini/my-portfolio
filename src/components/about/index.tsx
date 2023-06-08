import styles from "./style.module.scss"

import { useContext } from "react";
import { ThemeContext } from "../../contexts/ToggleTheme";

export function About(){
    const { theme } = useContext(ThemeContext);

    const semesters = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto', 'sexto', 'sétimo', 'oitavo'];
    var semester;
    const date = new Date();
    console.log(date.getMonth());
    if(date.getFullYear() == 2022) {
        if(date.getMonth()+1 <= 6)
            semester = semesters[0]
        else
            semester = semesters[1]
    }
    else if(date.getFullYear() == 2023) {
        if(date.getMonth()+1 <= 6)
            semester = semesters[2]
        else
            semester = semesters[3]
    }
    else if(date.getFullYear() == 2024) {
        if(date.getMonth()+1 <= 6)
            semester = semesters[4]
        else
            semester = semesters[5]
    }
    else if(date.getFullYear() == 2025) {
        if(date.getMonth()+1 <= 6)
            semester = semesters[6]
        else
            semester = semesters[7]
    }

    return(
        <section id="about" className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.title}>Sobre mim</div>
            <div className={styles.background}></div>
            <div className={styles.about}>
                <img src="my-picture.png" />
                <p>
                    Olá, meu nome é Walison Ribeiro, um desenvolvedor full stack autodidata e apaixonado por tecnologia,
                    principalmente na área da programação.
                    
                    Formado como Técnico em Desenvolvimento de Sistemas e atualmente cursando o { semester } semestre em Ciência da Computação 👨‍💻.
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