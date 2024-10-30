"use client";
import React from 'react';
import Header from "./components/Header/Header";
import styles from './page.module.css';
import Wave from 'react-wavify';

export default function Home() {
  // Função para rolagem suave
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
          <h1>O conhecimento se transforma em prática e</h1>
          <h1>o aprendizado em carreira. O caminho</h1>
          <h1 className={styles.letter}>para a profissão dos seus sonhos!</h1>
          <p>Descubra itinerários formativos que abrem portas para novas oportunidades.</p>
          <p>Nós transformamos sua paixão em profissão com cursos de qualidade e inovação.</p>

          {/* Botão com evento onClick para rolar suavemente até a seção alvo */}
          <button onClick={scrollToSection} className={styles.bannerButton}>Saiba Mais</button>
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

      {/* Seção alvo da rolagem suave */}
      <div id="targetSection" className={styles.targetSection}>
        <h1>Bem-vindo ao Next.js!</h1>
      </div>
    </div>
  );
}