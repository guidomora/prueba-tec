'use client'

import { Montserrat } from "next/font/google";
import style from "./about.module.css"
import { useEffect } from "react";

const inter = Montserrat({ subsets: ["latin"] });

const About = () => {

    useEffect(() => {
        const container = document.getElementById(`main`)
        if (container) {
            container.classList.add(style["fade-in"]);
        }
    }, []);


    return (
        <div id="main" className={style.container}>
            <div className={style.firsCont}>
                <h1 className={`${inter.className} ${style.gradientTitle}`}>Sobre mí</h1>
                <h2 className={`${inter.className} ${style.gradientTitle}`}>Web developer</h2>
            </div>
            <div className={style.subcontainer}>
                <p>Hola, soy John Doe, un desarrollador web apasionado con más de 5 años de experiencia en la creación de aplicaciones web intuitivas y responsivas.
                    A lo largo de mi carrera, he trabajado con diversas tecnologías como JavaScript, React, Node.js y Next.js,
                    siempre buscando aprender y mejorar mis habilidades.
                </p>
                <p>Me especializo en construir interfaces de usuario atractivas y funcionales, con un enfoque en la experiencia del usuario y el rendimiento.
                    Además, tengo un fuerte interés en el desarrollo backend, lo que me permite crear aplicaciones completas y eficientes.
                </p>
                <p>
                    Soy un entusiasta de la tecnología que disfruta de los desafíos y de resolver problemas complejos.
                    Me apasiona trabajar en proyectos innovadores y colaborar con equipos dinámicos para crear productos de alta calidad.
                </p>
            </div>
        </div>
    )
}

export default About