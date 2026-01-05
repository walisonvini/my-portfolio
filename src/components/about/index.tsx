import styles from "./style.module.scss"

import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../contexts/ToggleTheme";

export function About(){
    const { theme } = useContext(ThemeContext);
    const [t, i18n] = useTranslation("global");

    return(
        <section id="about" className={styles.container} data-theme={theme}>
            <div className={styles.title}>{t("common.aboutMe")}</div>
            <div className={styles.background}></div>
            <div className={styles.about}>
                <img src="my-picture.png" />
                <p>
                    {t("about.welcomeMessage")}

                    {t("about.education")}
                    <br />
                    <br />
                    {t("about.projects")}
                    
                    {t("about.community")} <a href="https://github.com/walisonvini" target="_blank" rel="noopener noreferrer">GitHub</a> :D
                </p>
                
            </div>
            <h4>
                {t("about.MartinFowler").replace(/"/g, "&quot;")}
                <p>Martin Fowler</p>
            </h4>
        </section>
    )
}