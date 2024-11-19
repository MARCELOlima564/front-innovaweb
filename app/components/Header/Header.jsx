import React, { useState } from 'react';
import styles from './style.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src="/senailogot.png" alt="Logo SENAI" className={styles.logo} />
        
        <button 
          className={styles.hamburgerMenu} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.menuContent}>
            <a href="/" className={styles.link}>Início</a>
            <a href="/Cursos" className={styles.link}>Cursos</a>
            <a href="/Faq" className={styles.link}>FAQ</a>
            <a href="/PaginaSobreNos" className={styles.link}>Desenvolvedores</a>
            <a href="/login" className={styles.link}>Login</a>
            <a 
              href="https://www.sp.senai.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.senaiButton}
            >
              SENAI
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;