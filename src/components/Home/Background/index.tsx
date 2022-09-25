import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../../contexts/ToggleTheme";

import styles from "./style.module.scss"

export function Background() {
    const { theme } = useContext(ThemeContext);

    const canvasRef = useRef(null)

    function Particle(x, y, directionX, directionY, size, color, text) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.text = text
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.canvas.width = 80 * window.innerWidth / 100;
        ctx.canvas.height = 100 * window.innerHeight / 100;
        let particleArray;

        Particle.prototype.draw = function () {
            ctx.beginPath();
            ctx.font = "600 32px Open Sans"
            ctx.fillText(this.text, this.x, this.y);
            ctx.fillStyle = this.color;
        }

        Particle.prototype.update = function () {
            if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y + this.size > canvas.height || this.y - this.size < 0) {
                this.directionY = -this.directionY;
            }
            this.x += this.directionX;
            this.y += this.directionY;

            this.draw();
        }

        function init() {
            particleArray = [];
            for (let i = 0; i < 50; i++) {
                let size = Math.random() * 10;
                let x = Math.random() * (innerWidth - size * 2);
                let y = Math.random() * (innerHeight - size * 2);
                let directionX = (Math.random() * 1) - .5;
                let directionY = (Math.random() * 1) - .5;
                let color = '#191919'
                let text = Math.floor(Math.random() * 2);

                particleArray.push(new Particle(x, y, directionX, directionY, size, color, text));
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particleArray.length; i++) {
                particleArray[i].update();
            }
        }
        init();
        animate();

        window.addEventListener('resize',
            function () {
                canvas.width = 80 * window.innerWidth / 100;
                canvas.height = 100 * window.innerHeight / 100;
                init();
            }
        )
        canvas.addEventListener("click", function (e) {
            let size = Math.random() * 10;
            let x = e.offsetX;
            let y = e.offsetY;
            let directionX = (Math.random() * 1) - .5;
            let directionY = (Math.random() * 1) - .5;
            let color = '#191919'
            let text = Math.floor(Math.random() * 2);

            particleArray.push(new Particle(x, y, directionX, directionY, size, color, text));
        });
    }, [])

    return (
        <canvas ref={canvasRef} className={styles.background}></canvas>
    )
}