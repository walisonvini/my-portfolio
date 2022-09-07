import styles from "./style.module.scss"

import { RewrittenText } from "./rewrittenText";
import { Background } from "./background";

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import { useState } from 'react'

export function Presentation() {
    const [items, setItems] = useState([]);

    for (let i = 0; i <= 50; i++) {
        items.push(<Background />)
    }

    return (
        <div>
            {/* {items.map((item, index) => (
                <div key={index}>
                    {item}
                </div>
            ))} */}
            <section className={styles.container}>
                <div className={styles.textPresentation}>
                    <p>Olá, eu sou</p>
                    <RewrittenText />
                    <noscript><h1>Walison Ribeiro</h1></noscript>
                    <p>Desenvolvedor full-stack</p>
                    <button className={styles.button}>Download Currículo</button>
                    <a href="https://github.com/walisonvini" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/walison-vinicios-alves-ribeiro-259705198/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                    <a><MdEmail /></a>
                </div>
                <div>
                    <img src="computer.png" alt="" />
                </div>

            </section>
        </div>
    )
}