import { Footer } from "../Footer"
import { Navbar } from "../navbar"
import styles from "./style.module.scss"

export function Container({ children }) {
    return(
        <div className={styles.childrenContainer}>
            <div>
                <Navbar />
            </div>
            <div className={styles.children}>
                {children}
            </div>
            <Footer />
        </div>
    )
}