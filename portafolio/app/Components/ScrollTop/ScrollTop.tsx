import React from 'react';
import styles from './ScrollTop.module.css';

export default function ScrollTop() {
    return (
        <a href="#home" className={styles.scroll_top} id="scroll-top">
            <i className="fas fa-arrow-up"></i>
        </a>
    );
}