import styles from './style.module.scss'

import { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from "../../contexts/ToggleTheme";
import { Blocks } from './Blocks';

import * as SiIcon from 'react-icons/si';
import * as FaIcon from 'react-icons/fa';
import * as TbIcon from 'react-icons/tb';
import * as GrIcon from 'react-icons/gr';

export function Projects() {
    const { theme } = useContext(ThemeContext);
    const [t, i18n] = useTranslation("global");

    return(
        <section id="projects" className={styles.container} data-theme={theme}> 
            <div className={styles.title}>{t("common.projects")}</div>
            
            <div className={styles.projects}>
                <Blocks
                    title="My Portfolio"
                    description={t("projects.portfolio.description")}
                    image="portfolio.png"
                    icons={[
                        <SiIcon.SiTypescript key="typescript" />,
                        <TbIcon.TbBrandNextjs key="nextjs" />,
                        <FaIcon.FaSass key="sass" />,
                    ]}
                    linkGitHub="https://github.com/walisonvini/my-portfolio"
                    linkPreview="https://walisonribeiro.com/"
                />
                <Blocks
                    title="Dashboard"
                    description={t("projects.dashboard.description")}
                    image="dashboard.png"
                    icons={[
                        <FaIcon.FaDocker key="docker" />,
                        <FaIcon.FaPhp key="php" />,
                        <FaIcon.FaLaravel key="laravel" />,
                        <SiIcon.SiJavascript key="javascript" />,
                        <FaIcon.FaVuejs key="vue" />,
                        <GrIcon.GrMysql key="mysql" />,

                    ]}
                    linkGitHub="https://github.com/walisonvini/dashboard"
                    linkPreview="https://dashboard.walisonribeiro.com/"
                />
                <Blocks
                    title="Cryptkeeper"
                    description={t("projects.cryptkeeper.description")}
                    image="cryptkeeper.png"
                    icons={[
                        <FaIcon.FaDocker key="docker" />,
                        <SiIcon.SiPython key="python" />,
                        <SiIcon.SiDjango key="django" />,
                        <SiIcon.SiPostgresql key="postgresql" />,
                        <SiIcon.SiJavascript key="javascript" />,
                        <SiIcon.SiHtml5 key="html" />,
                        <SiIcon.SiCss3 key="css" />,
                    ]}
                    linkGitHub="https://github.com/walisonvini/crypt-keeper"
                    linkPreview="https://cryptkeeper.walisonribeiro.com/"
                />
            </div>
        </section>
    )
}