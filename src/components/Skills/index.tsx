import styles from './style.module.scss'

import { SiJavascript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiDjango, SiCsharp, SiPostgresql, SiMicrosoftsqlserver } from 'react-icons/si';
import { FaSass, FaVuejs, FaReact, FaPython } from 'react-icons/fa';

export function Skills() {
    return (
        <section className={styles.skillsContainer}>
            <div className={styles.title}>Habilidades</div>
            <div className={styles.skills}>
                <a className={styles.skillsText}>
                    <i><SiJavascript /></i>
                    <span>JavaScript</span>
                </a>
                <a className={styles.skillsText}>
                    <i><TbBrandNextjs /></i>
                    <span>Next.js</span>
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
                    <i><FaSass /></i>
                    <span>Sass</span>
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
                    <i><FaPython /></i>
                    <span>Python</span>
                </a>
                <a className={styles.skillsText}>
                    <i><SiPostgresql /></i>
                    <span>PostgreSQL</span>
                </a>
                <a className={styles.skillsText}>
                    <i><SiMicrosoftsqlserver /></i>
                    <span>SQL Server</span>
                </a>
            </div>

        </section>
    )
}