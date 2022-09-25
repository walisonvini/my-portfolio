import styles from "./style.module.scss"

import { RewrittenText } from "./RewrittenText";
import { Background } from "./Background";

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import { useContext } from 'react'
import { ThemeContext } from "../../contexts/ToggleTheme";
import { Button } from "../Button";

export function Presentation() {
    const { theme } = useContext(ThemeContext);
    function sla(){
        alert('sla')
    }
    return (
        <div>
            <div className={styles.background}>
                <Background />
            </div>
            <section className={`${styles.container} ${styles[theme]}`}>
                <div className={styles.textPresentation}>
                    <p>Olá, eu sou</p>
                    <RewrittenText />
                    <noscript><h1>Walison Ribeiro</h1></noscript>
                    <p>Desenvolvedor full-stack</p>
                    <Button
                        text="Download Currículo"
                        style={{
                            padding: "18px 32px",
                            color: "black",
                            marginTop: "1rem",
                            marginBottom: "1.5rem"
                        }}
                    />
                    <div></div>
                    <a href="https://github.com/walisonvini" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/walison-vinicios-alves-ribeiro-259705198/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                    <a><MdEmail /></a>
                </div>
                <div>
                    <img src="computer.png" alt="" />
                </div>
            </section>
        </div>
    )
}