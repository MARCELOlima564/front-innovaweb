import React from 'react';
import styles from './style.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/senailogot.png" alt="Logo SENAI" className={styles.logo} />
      <div className={styles.opcoes}>
        <a href="/Cursos" className={styles.link}>Cursos</a>
        <a href="/Faq" className={styles.link}>FAQ</a>
        <a href="/PaginaSobreNos" className={styles.link}>Desenvolvedores</a>
        <a href="/login" className={styles.link}>Login</a>

      </div>
      <button className={styles.button}>SENAI</button>
    </div>
  );
};

export default Header;