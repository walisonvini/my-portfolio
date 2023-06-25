import styles from './style.module.scss'

import { SiDjango } from 'react-icons/si';
import { TbBrandJavascript, TbBrandPython } from 'react-icons/tb';
import { FaPhp, FaLaravel, FaVuejs, FaReact, FaDatabase } from 'react-icons/fa';

import { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from "../../contexts/ToggleTheme";

export function Skills() {
    const { theme } = useContext(ThemeContext);
    const [t, i18n] = useTranslation("global");

    return (
        <section id="skills" className={`${styles.skillsContainer} ${styles[theme]}`}>
            <div className={styles.title}>{t("common.skills")}</div>
            <div className={styles.skills}>
                <a className={styles.skillsText}>
                    <i><FaPhp /></i>
                    <span>PHP</span>
                </a>
                <a className={styles.skillsText}>
                    <i><FaLaravel /></i>
                    <span>Laravel</span>
                </a>
                <a className={styles.skillsText}>
                    <i><TbBrandJavascript /></i>
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
                    <i><TbBrandPython /></i>
                    <span>Python</span>
                </a>
                <a className={styles.skillsText}>
                    <i><SiDjango
                     /></i>
                    <span>Django</span>
                </a>
                <a className={styles.skillsText}>
                    <i><FaDatabase /></i>
                    <span>SQL</span>
                </a>
            </div>
        </section>
    )
}