import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './style.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.topSection}>
          <div className={styles.logo}>
            <img src="/senailogowhite.png" alt="Logo SENAI" className={styles.logoImage} />
          </div>
          <div className={styles.links}>
            <a href="/cursos" className={styles.link}>Cursos</a>
            <a href="/faq" className={styles.link}>FAQ</a>
            <a href="/sobrenos" className={styles.link}>Desenvolvedores</a>
            <a href="https://www.google.com/search?q=senai+valinhos&oq=senai+valinhos&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yBggHEEUYPNIBCDI4MjNqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8" className={styles.link}>Contato</a>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <div className={styles.social}>
            <a href="https://www.facebook.com/senaisp.valinhos/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/senaivalinhos/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p className={styles.text}>© 2024. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;