import styles from "./style.module.scss"

export function Terminal() {
    return (
        <div className={styles.container}>
            <img src="computer.png" alt="" ></img>
            <div className={styles.computer}>
                <div className={styles.terminal}>

                </div>
            </div>
        </div>
    )
}