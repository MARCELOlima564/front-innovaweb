"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Wave from 'react-wavify';

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);

  const scrollToSection = () => {
    const target = document.getElementById("targetSection");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest(`.${styles.card}`) === null) {
      setActiveCard(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.backgroundimg}>
      <Header />
      <div className={styles.redSection}>
        <div className={styles.banner}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
            + Saiba Mais
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
        <div className={styles.cardsContainer}>
          <div className={styles.cardsInnerContainer}>
            <div className={styles.card1}>
              <img className={styles.redSeta} src='red.png' alt="Seta Vermelha" />
              <h4 className={styles.cardTitle1}>Descubra áreas disponíveis!</h4>
            </div>
          </div>

          <div className={styles.cardsInnerContainer}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={index}
                className={`${styles.card} ${activeCard === index ? styles.hideContent : ''}`}
                onClick={() => handleCardClick(index)}
                animate={{ scale: activeCard === index ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {activeCard === index ? (
                  <img src={`/gif${index + 1}.gif`} alt={`GIF ${index + 1}`} />
                ) : (
                  <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>Área {item}</h4>
                    <p className={styles.cardDescription}>Descrição breve da Área {item}.</p>
                    <span className={styles.cardLink}>+ Saiba mais</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <button className={styles.buttonMais}>
              Quero mais opções
            </button>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h2 className={styles.infoTitle}>Conhecendo o SENAI Valinhos</h2>
          <p className={styles.infoSubtitle}>Nossa instituição é ótima por oferecer formação de qualidade e preparação prática para o mercado.</p>
          <div className={styles.infoCardsContainer}>
            <div className={styles.infoCard}>
              <img className={styles.infoCardImage} src='1.png' alt="Imagem 1" />
              <h4 className={styles.infoCardTitle}>Missão</h4>
              <p className={styles.infoCardDescription}>Promover o desenvolvimento sustentável do país, elevando a competitividade da indústria, por meio da educação profissional e da inovação e tecnologia.</p>
            </div>
            <div className={styles.infoCard}>
              <img className={styles.infoCardImage} src='2.png' alt="Imagem 2" />
              <h4 className={styles.infoCardTitle}>Visão</h4>
              <p className={styles.infoCardDescription}>Ser reconhecido pela oferta de formação profissional de padrão global, como indutor da inovação e da tecnologia para a competitividade da indústria.</p>
            </div>
            <div className={styles.infoCard}>
              <img className={styles.infoCardImage} src='3.png' alt="Imagem 3" />
              <h4 className={styles.infoCardTitle}>Compromissos</h4>
              <p className={styles.infoCardDescription}>Formação para oportunidades reais de trabalho. Meritocracia baseada em oportunidades iguais para todos.</p>
            </div>
          </div>
        </div>

        <div className={styles.middleSection}>
          <div className={styles.leftImage}>
            <img src='courses.jpg' alt="Cursos SENAI" />
          </div>
          <div className={styles.rightText}>
            <p>Os cursos do SENAI são reconhecidos pela excelência na formação técnica e profissional. Com uma infraestrutura moderna e corpo docente altamente qualificado, oferecemos uma gama de cursos que atendem às demandas do mercado de trabalho. Desde a formação inicial até cursos avançados, garantimos que nossos alunos estejam prontos para enfrentar os desafios da indústria.</p>
          </div>
        </div>

        <div className={styles.topCoursesSection} style={{ backgroundColor: '#E6E6E6', padding: '20px' }}>
          <h2 className={styles.topCoursesTitle}>Top <span style={{ color: 'red' }}>cursos técnicos</span> com maior taxa de ocupação</h2>
          <div className={styles.coursesList}>
            <div className={styles.courseItem}>
              <img src='course1.png' alt="Curso 1" />
              <h4 style={{ color: 'red' }}>Curso 1</h4>
              <p style={{ color: '#999' }}>Descrição do curso 1.</p>
            </div>
            <div className={styles.courseItem}>
              <img src='course2.png' alt="Curso 2" />
              <h4 style={{ color: 'red' }}>Curso 2</h4>
              <p style={{ color: '#999' }}>Descrição do curso 2.</p>
            </div>
            <div className={styles.courseItem}>
              <img src='course3.png' alt="Curso 3" />
              <h4 style={{ color: 'red' }}>Curso 3</h4>
              <p style={{ color: '#999' }}>Descrição do curso 3.</p>
            </div>
            <div className={styles.courseItem}>
              <img src='course4.png' alt="Curso 4" />
              <h4 style={{ color: 'red' }}>Curso 4</h4>
              <p style={{ color: '#999' }}>Descrição do curso 4.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
