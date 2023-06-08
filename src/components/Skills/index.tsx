import styles from './style.module.scss'

import { SiJavascript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiDjango, SiCsharp } from 'react-icons/si';
import { FaSass, FaVuejs, FaReact, FaPython, FaDatabase } from 'react-icons/fa';

import { useContext } from "react";
import { ThemeContext } from "../../contexts/ToggleTheme";

export function Skills() {
    const { theme } = useContext(ThemeContext);

    return (
        <section id="skills" className={`${styles.skillsContainer} ${styles[theme]}`}>
            <div className={styles.title}>Habilidades</div>
            <div className={styles.skills}>
                <a className={styles.skillsText}>
                    <i><SiJavascript /></i>
                    <span>JavaScript</span>
                </a>
                <a className={styles.skillsText}>
                    <i><FaVuejs /></i>
                    <span>Vue.js</span>
                </a>
                <a className={styles.skillsText}>
                    <i><FaReact /></i>
                    <span>React.js</span>
                </a>
                <a className={styles.skillsText}>
                    <i><TbBrandNextjs /></i>
                    <span>Next.js</span>
                </a>
                <a className={styles.skillsText}>
                    <i><FaSass /></i>
                    <span>Sass</span>
                </a>
                <a className={styles.skillsText}>
                    <i><FaPython /></i>
                    <span>Python</span>
                </a>
                <a className={styles.skillsText}>
                    <i><SiDjango /></i>
                    <span>Django</span>
                </a>
                <a className={styles.skillsText}>
                    <i><SiCsharp /></i>
                    <span>Csharp</span>
                </a>
                
                <a className={styles.skillsText}>
                    <i><FaDatabase /></i>
                    <span>SQL</span>
                </a>
            </div>
        </section>
    )
}