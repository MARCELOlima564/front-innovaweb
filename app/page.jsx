"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Wave from 'react-wavify';

export default function Home() {
  const scrollToSection = () => {
    const target = document.getElementById("targetSection");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.backgroundimg}>
      <Header />
      <div className={styles.redSection}>
        <div className={styles.banner}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // Estado inicial
            animate={{ opacity: 1, y: 0 }} // Estado final
            transition={{ duration: 0.5 }} // Duração da animação
          >
            O conhecimento se transforma em prática e
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            o aprendizado em carreira. O caminho
          </motion.h1>
          <motion.h1
            className={styles.letter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            para a profissão dos seus sonhos!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Descubra itinerários formativos que abrem portas para novas oportunidades.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Nós transformamos sua paixão em profissão com cursos de qualidade e inovação.
          </motion.p>
    
          <motion.button
            onClick={scrollToSection}
            className={styles.bannerButton}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 1 }}
          >
            Saiba Mais
          </motion.button>
        </div>
      </div>

      <div style={{ transform: "rotate(180deg)", overflow: "hidden" }}>
        <Wave mask="url(#mask)" fill="#393b47" options={{ speed: 0.2, points: 4 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="black" />
              <stop offset="0.5" stopColor="white" />
            </linearGradient>
            <mask id="mask">
              <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
            </mask>
          </defs>
        </Wave>
      </div>

      <div id="targetSection" className={styles.targetSection}>
        <h1>Bem-vindo ao Next.js!</h1>
      </div>
 {/* Cards de cursos! */} 

      <div className={styles.cardsContainer}>
 
  <div className={styles.card1}>
    <img className={styles.redSeta} src='red.png'></img>
    <h4 className={styles.cardTitle}>Nossas opções de curso</h4>
  </div>

  {/* Outros 6 Cards */}
  <div className={styles.card}>
    <h4 className={styles.cardTitle}>Curso 1</h4>
    <p className={styles.cardDescription}>Descrição breve do curso 1.</p>
    <button className={styles.cardButton}>
      + Saiba mais
    </button>
  </div>

  <div className={styles.card}>
    <h4 className={styles.cardTitle}>Curso 2</h4>
    <p className={styles.cardDescription}>Descrição breve do curso 2.</p>
    <button className={styles.cardButton}>
      + Saiba mais
    </button>
  </div>

  <div className={styles.card}>
    <h4 className={styles.cardTitle}>Curso 3</h4>
    <p className={styles.cardDescription}>Descrição breve do curso 3.</p>
    <button className={styles.cardButton}>
      + Saiba mais
    </button>
  </div>

  <div className={styles.card}>
    <h4 className={styles.cardTitle}>Curso 4</h4>
    <p className={styles.cardDescription}>Descrição breve do curso 4.</p>
    <button className={styles.cardButton}>
      + Saiba mais
    </button>
  </div>

  <div className={styles.card}>
    <h4 className={styles.cardTitle}>Curso 5</h4>
    <p className={styles.cardDescription}>Descrição breve do curso 5.</p>
    <button className={styles.cardButton}>
      + Saiba mais
    </button>
  </div>

  <div className={styles.card}>
    <h4 className={styles.cardTitle}>Curso 6</h4>
    <p className={styles.cardDescription}>Descrição breve do curso 6.</p>
    <button className={styles.cardButton}>
      + Saiba mais
    </button>
  </div>

  {/* Último Card */}
  <div className={styles.card} style={{ backgroundColor: '#f0f0f0' }}>
    <h4 className={styles.cardTitle}>Ver mais opções</h4>
    <button className={styles.cardButton} style={{ backgroundColor: 'red', color: 'white' }}>
      Ver mais opções
    </button>
  </div>
</div>

      <Footer />
    </div>
  );
}
