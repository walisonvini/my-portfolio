import styles from './style.module.scss'

import { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from "../../contexts/ToggleTheme";
import { Blocks } from './Blocks';

import * as SiIcon from 'react-icons/si';
import * as FaIcon from 'react-icons/fa';
import * as TbIcon from 'react-icons/tb';

export function Projects() {
    const { theme } = useContext(ThemeContext);
    const [t, i18n] = useTranslation("global");

    return(
        <section id="projects" className={styles.container} data-theme={theme}> 
            <div className={styles.title}>{t("common.projects")}</div>
            
            <div className={styles.projects}>
                <Blocks
                    title="Find your Duo"
                    description="Find your Duo, uma plataforma que ajuda gamers a encontrar um parceiro ou parceira para jogar 
                    online seu game favorito, conectado a Twitch."
                    image="nlw-esports.png"
                    icons={[
                        <SiIcon.SiTypescript key="typescript" />,
                        <SiIcon.SiReact key="react" />,
                        <SiIcon.SiSqlite key="sqlite" />,
                        <SiIcon.SiPrisma key="prisma" />,
                        <SiIcon.SiTailwindcss key="tailwindcss" />,
                        <FaIcon.FaNodeJs key="nodejs" />
                    ]}
                    linkGitHub="https://github.com/walisonvini"
                />
                <Blocks
                    title="My Portfolio"
                    description="Esse é o site em que você está navegando, meu site pessoal :) "
                    image="portfolio.png"
                    icons={[
                        <SiIcon.SiTypescript key="typescript" />,
                        <TbIcon.TbBrandNextjs key="nextjs" />,
                        <FaIcon.FaSass key="sass" />,
                    ]}
                    linkGitHub="https://github.com/walisonvini/my-portfolio"
                />
                <Blocks
                    title="Revision"
                    description="Revision, uma plataforma que te ajuda a revisar suas matérias 
                    de acordo com a teoria da curva de esquecimento de Ebbinghaus."
                    image="revision.png"
                    icons={[
                        <SiIcon.SiTypescript key="typescript" />,
                        <TbIcon.TbBrandNextjs key="nextjs" />,
                        <FaIcon.FaSass key="sass" />,
                        <SiIcon.SiPython key="python" />,
                        <SiIcon.SiDjango key="django" />,
                        <SiIcon.SiPostgresql key="postgresql" />,
                    ]}
                    linkGitHub="https://github.com/walisonvini/revision"
                />
            </div>
        </section>
    )
}