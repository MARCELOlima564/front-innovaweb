import React from 'react';
import styles from './style.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>© 2024 SENAI. Todos os direitos reservados.</p>
        <div className={styles.links}>
        <a href="/cursos" className={styles.link}>Cursos</a>
        <a href="/faq" className={styles.link}>FAQ</a>
        <a href="/Sobrenos" className={styles.link}>Desenvolvedores</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
