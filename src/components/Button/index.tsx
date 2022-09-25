import styles from './style.module.scss'
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> { 
    text: string;
}

export function Button(props: ButtonProps) {
    return (
        <button
            {...props}
            className={styles.btn}
        >
            {props.text}
        </button>
    )
}