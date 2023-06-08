import styles from "./style.module.scss"
import { useContext } from "react";

import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TbTools } from 'react-icons/tb';

import { ThemeContext } from "../../contexts/ToggleTheme";

export function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <div className={`${styles.container} ${styles[theme]}`}>
                <div className={styles.containerItems}>
                    <div className={styles.navIcon}>
                        <a onClick={topFunction}>walison.io()</a>
                    </div>
                    <div className={styles.navText}>
                        <a href="#about">Sobre mim</a>
                        <a href="#skills">Habilidades</a>
                        <a href="#projects">Projetos</a>
                        <span onClick={toggleTheme}>
                            {theme === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />}
                        </span>
                    </div>
                </div>
            </div>
            <nav className={`${styles.mobileMenu} ${styles[theme]}`}>
                <a href="#about" className={styles.mobileText}>
                    <i><BsPerson /></i>
                    <span>Sobre mim</span>
                </a>
                <a href="#skills" className={styles.mobileText}>
                    <i><TbTools /></i>
                    <span>Habilidades</span>
                </a>
                <a href="#projects" className={styles.mobileText}>
                    <i><AiOutlineFundProjectionScreen /></i>
                    <span>Projetos</span>
                </a>
                <span className={styles.mobileToggleTheme} onClick={toggleTheme}>
                    {theme === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />}
                </span>
            </nav>
        </>
    )
}