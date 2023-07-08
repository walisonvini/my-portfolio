import styles from "./style.module.scss"

import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../contexts/ToggleTheme";

export function About(){
    const { theme } = useContext(ThemeContext);
    const [t, i18n] = useTranslation("global");

    const semesters = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto', 'sexto', 'sétimo', 'oitavo'];
    var semester;
    const date = new Date();
    
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
        <section id="about" className={styles.container} data-theme={theme}>
            <div className={styles.title}>{t("common.aboutMe")}</div>
            <div className={styles.background}></div>
            <div className={styles.about}>
                <img src="my-picture.png" />
                <p>
                    {t("about.welcomeMessage")}

                    {t("about.education", { semester: semester })}
                    <br />
                    <br />
                    {t("about.projects")}
                    
                    {t("about.community")} <a href="https://github.com/walisonvini" target="_blank" rel="noopener noreferrer">GitHub</a> :D
                </p>
                
            </div>
            <h4>
                "{t("about.MartinFowler")}"
                <p>Martin Fowler</p>
            </h4>
        </section>
    )
}