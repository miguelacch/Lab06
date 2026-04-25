import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={`${styles.hero} section`} id="home">
            <div className={`${styles.hero__container} container`}>
                <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
                    <h1 className={styles.hero__title}>Miguel Ángel Cruz Chávez</h1>
                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>Economista/Estudiante de MAC</span> en Crecimiento
                    </h2>
                    <p className={styles.hero__description}>
                        Soy un economista apasionado por las matemáticas y la programación, 
                        y sus aplicaciones en las ciencias, principalmente en las ciencias sociales. 
                        Soy alguien que disfruta los desafíos y logra 
                        aprender mucho del entorno que le rodea, personas, lugares y experiencias.
                    </p>
                    <div className={styles.hero__buttons}>
                        <a href="#projects" className="btn btn--primary">
                            <i className="fas fa-rocket"></i> Ver mis proyectos
                        </a>
                        <a href="#contact" className="btn btn--outline">
                            <i className="fas fa-envelope"></i> Contáctame
                        </a>
                    </div>
                </div>
                
                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <div className={styles.hero__avatar}>
                            <i className="fas fa-user-astronaut"></i>
                        </div>
                    </div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}></div>
                </div>
            </div>
            
            <div className={styles.hero__scroll}>
                <a href="#interests" className={styles['hero__scroll-link']}>
                    <span>Scroll</span>
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </section>
    );
}