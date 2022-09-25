import styles from './style.module.scss'

import { useContext } from "react";
import { ThemeContext } from "../../contexts/ToggleTheme";
import { Blocks } from './Blocks';

import * as SiIcon from 'react-icons/si';
import * as FaIcon from 'react-icons/fa';
import * as TbIcon from 'react-icons/tb';

export function Projects() {
    const { theme } = useContext(ThemeContext);

    return(
        <section className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.title}>Projetos</div>
            
            <div className={styles.projects}>
                <Blocks
                    title="Find your Duo"
                    description="Find your Duo, uma plataforma que ajuda gamers a encontrar um parceiro ou parceira para jogar 
                    online seu game favorito, conectado a Twitch."
                    image="nlw-esports.png"
                    icons={[
                        <SiIcon.SiTypescript />,
                        <SiIcon.SiReact />,
                        <SiIcon.SiSqlite />,
                        <SiIcon.SiPrisma />,
                        <SiIcon.SiTailwindcss />,
                        <FaIcon.FaNodeJs />
                    ]}
                    linkGitHub="https://github.com/walisonvini"
                />
                <Blocks
                    title="My Portfolio"
                    description="Esse é o site em que você está navegando, meu site pessoal :) "
                    image="portfolio.png"
                    icons={[
                        <SiIcon.SiTypescript />,
                        <TbIcon.TbBrandNextjs />,
                        <FaIcon.FaSass />,
                    ]}
                    linkGitHub="https://github.com/walisonvini/my-portfolio"
                />
                <Blocks
                    title="Revision"
                    description="Revision, uma plataforma que te ajuda a revisar suas matérias 
                    de acordo com a teoria da curva de esquecimento de Ebbinghaus."
                    image="revision.png"
                    icons={[
                        <SiIcon.SiTypescript />,
                        <TbIcon.TbBrandNextjs />,
                        <FaIcon.FaSass />,
                        <SiIcon.SiPython />,
                        <SiIcon.SiDjango />,
                        <SiIcon.SiPostgresql />,
                    ]}
                    linkGitHub="https://github.com/walisonvini/revision"
                />
            </div>
        </section>
    )
}