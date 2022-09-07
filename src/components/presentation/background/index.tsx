import { useEffect } from "react";
import styles from "./style.module.scss"

export function Background() {
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    useEffect(() => {
        let divs = document.getElementsByClassName(styles['background'])

        for (var i = 0; i < divs.length; i++) {

            let thisDiv = divs[i];

            let randomTop = getRandomNumber(0, 90);
            let randomLeft = getRandomNumber(0, 95);

            thisDiv["style"].top = randomTop + "vh";
            thisDiv["style"].left = randomLeft + "vw";
            thisDiv.innerHTML = "" + Math.floor(Math.random() * 2);
        }
    }, []);

    return (
       <span className={styles.background} />
    )
}
