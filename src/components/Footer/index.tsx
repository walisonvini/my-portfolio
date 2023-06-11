import styles from "./style.module.scss"

import { useContext } from "react";
import { ThemeContext } from "../../contexts/ToggleTheme";

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';


export function Footer() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    function copyEmail() {
        navigator.clipboard.writeText("walison.vinicios12@gmail.com")
    }

    return (
        <footer className={`${styles.containerFooter} ${styles[theme]}`}>
            <div className={styles.containerIcons}>
                <a href="https://github.com/walisonvini" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/walison-vinicios-alves-ribeiro-259705198/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                <a className={styles.copyEmail} onClick={copyEmail} title="walison.vinicios12@gmail.com">
                    <MdEmail />
                    <sup>Copiado</sup>
                </a>
            </div>
            <ul className={styles.list}>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#skills">Hablidades</a>
                </li>
                <li>
                    <a href="#projects">Projetos</a>
                </li>
            </ul>
            <p className={styles.copyright}>
                Walison Ribeiro &copy; 2023
            </p>
        </footer>
    )
}