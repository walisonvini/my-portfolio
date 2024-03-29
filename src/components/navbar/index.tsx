import styles from "./style.module.scss"
import { useContext } from "react";

import { useTranslation } from "react-i18next";

import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TbTools } from 'react-icons/tb';

import { ThemeContext } from "../../contexts/ToggleTheme";

export function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }

    const handleChange = event => {
        handleChangeLanguage(event.target.value)
    };
    

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <div className={styles.container} data-theme={theme}>
                <div className={styles.containerItems}>
                    <div className={styles.navIcon}>
                        <a onClick={topFunction}>walison.io()</a>
                    </div>
                    <div className={styles.navText}>
                        <a href="#about">{t("common.aboutMe")}</a>
                        <a href="#skills">{t("common.skills")}</a>
                        <a href="#projects">{t("common.projects")}</a>
                        <div className={styles.languageSwitcher}>
                            <select onChange={handleChange}>
                                <option value="en">English</option>
                                <option value="ptBr">Português</option>
                            </select>
                        </div>
                        {theme === 'light' ? (
                            <span onClick={() => toggleTheme('dark')}>
                                <MdDarkMode />
                            </span>
                        ) : (
                            <span onClick={() => toggleTheme('light')}>
                                <MdOutlineLightMode />
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <nav className={styles.mobileMenu} data-theme={theme}>
                <a href="#about" className={styles.mobileText}>
                    <i><BsPerson /></i>
                    <span>{t("common.aboutMe")}</span>
                </a>
                <a href="#skills" className={styles.mobileText}>
                    <i><TbTools /></i>
                    <span>{t("common.skills")}</span>
                </a>
                <a href="#projects" className={styles.mobileText}>
                    <i><AiOutlineFundProjectionScreen /></i>
                    <span>{t("common.projects")}</span>
                </a>
                {theme === 'light' ? (
                    <span className={styles.mobileToggleTheme} onClick={() => toggleTheme('dark')}>
                        <MdDarkMode />
                    </span>
                ) : (
                    <span className={styles.mobileToggleTheme} onClick={() => toggleTheme('light')}>
                        <MdOutlineLightMode />
                    </span>
                )}
                <div className={styles.languageSwitcher}>
                    <select onChange={handleChange}>
                        <option value="en">English</option>
                        <option value="ptBr">Português</option>
                    </select>
                </div>
            </nav>
        </>
    )
}