import styles from './style.module.scss'

import { Button } from '../../Button';

import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ToggleTheme";

type BlocksProps = {
    title: string;
    image: string;
    description: string;
    icons: any[],
    linkGitHub: string
}

export function Blocks({ title, image, description, icons, linkGitHub }: BlocksProps) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${styles.blockContainer} ${styles[theme]}`}>
            <div className={styles.background} />
            <div className={styles.image}>
                <img src={image} />
            </div>
            <div className={styles.containerDescription}>
                <strong>{title}</strong>
                <p className={styles.description}>
                    {description}
                </p>
                <div className={styles.technology}>
                    {icons.map((item) => <a>{item}</a>)}
                </div>
                <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
                    <Button
                        text="View Github"
                        style={{
                            marginRight: "0.2rem",
                            marginBottom: "1rem",
                            marginTop: "1rem",
                            padding: "15px 30px",
                            color: "white"
                        }}
                    />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <Button
                        text="Preview"
                        style={{
                            marginRight: "0.2rem",
                            padding: "15px 30px",
                            color: "white"
                        }}
                    />
                </a>
            </div>
        </div>
    )
}