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
                <a className={styles.icons} href="https://github.com/walisonvini" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                <a className={styles.icons} href="https://www.linkedin.com/in/walison-vinicios-alves-ribeiro-259705198/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                <a className={`${styles.icons} ${styles.copyEmail}`} onClick={copyEmail} title="walison.vinicios12@gmail.com">
                    <MdEmail />
                    <sup>Copiado</sup>
                </a>
            </div>
            <div className={styles.copyright}>
                Copyright &copy; 2022 Walison Ribeiro
            </div>
        </footer>
    )
}