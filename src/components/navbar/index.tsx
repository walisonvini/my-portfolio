import styles from "./style.module.scss"
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

export function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.containerItems}>
                <div className={styles.navIcon}>
                    <a>walison.io()</a>
                </div>
                <div className={styles.navText}>
                    <a>Sobre mim</a>
                    <a>Habilidades</a>
                    <a>Projetos</a>
                    <span><MdDarkMode /></span>
                </div>
            </div>
        </div>
    )
}