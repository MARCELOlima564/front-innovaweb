import React from 'react';
import styles from './style.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/senailogot.png" alt="Logo SENAI" className={styles.logo} />
      <div className={styles.opcoes}>
        <a href="/cursos" className={styles.link}>Cursos</a>
        <a href="/faq" className={styles.link}>FAQ</a>
        <a href="/Sobrenos" className={styles.link}>Desenvolvedores</a>
      </div>
      <button className={styles.button}>Veja mais sobre o SENAI</button>
    </div>
  );
};

export default Header;