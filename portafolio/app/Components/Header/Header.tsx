import React from 'react';
import styles from './Header.module.css';

let HeaderData:String = 'Miguel Angel Cruz'

export default function Header() {
    return (
        <><header className={styles.header} id="header">
        <nav className={`container ${styles.nav}`}>
            <a href="#home" className={`container ${styles.nav__logo}`}>
                <span className={`container ${styles.logo__bracket}`}>&lt;</span>Miguel Angel Cruz<span className={`container ${styles.logo__bracket}`}>/&gt;</span>
            </a>
            
            
            <input type="checkbox" id="nav-toggle" className={`container ${styles.nav__checkbox}`}/>
            <label htmlFor="nav-toggle" className={`container ${styles.nav__toggle}`}>
                <i className={`${styles.container} fas fa-bars`}></i>
            </label>
            
            <div className={`container ${styles.nav_menu}`} id="nav-menu">
                <label htmlFor="nav-toggle" className={`container ${styles.nav__close}`}>
                    <i className={`${styles.container} fas fa-times`}></i>
                </label>
                
                <ul className={`container ${styles.nav__list}`}>
                    <li className={`container ${styles.nav__item}`}>
                        <label htmlFor="nav-toggle">
                            <a href="#home" className={`container ${styles.nav__link}`}>Inicio</a>
                        </label>
                    </li>
                    <li className={`container ${styles.nav__item}`}>
                        <label htmlFor="nav-toggle">
                            <a href="#interests" className={`container ${styles.nav__link}`}>Intereses</a>
                        </label>
                    </li>
                    <li className={`container ${styles.nav__item}`}>
                        <label htmlFor="nav-toggle">
                            <a href="#cv" className={`container ${styles.nav__link}`}>CV</a>
                        </label>
                    </li>
                    <li className={`container ${styles.nav__item}`}>
                        <label htmlFor="nav-toggle">
                            <a href="#projects" className={`container ${styles.nav__link}`}>Proyectos</a>
                        </label>
                    </li>
                    <li className={`container ${styles.nav__item}`}>
                        <label htmlFor="nav-toggle">
                            <a href="#contact" className={`container ${styles.nav__link}`}>Contacto</a>
                        </label>
                    </li>
                </ul>
            </div>
        </nav>
    </header></>
    );
    
  
}