"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carrossel from "./components/Carrossel/CarouselComponent";
import Wave from "react-wavify";
import styles from "./page.module.css";
import AreaCardsPagination from "./components/AreaCardsPagination/AreaCardsPagination";

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const targetSectionRef = useRef(null);

  const scrollToSection = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
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
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.backgroundimg}>
      <Header />
      <div className={styles.redSection}>
        <div className={styles.banner}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            O conhecimento se transforma em prática e
          </motion.h1>
          <motion.h1
           className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            o aprendizado em carreira. O caminho
          </motion.h1>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            para a profissão dos seus sonhos!
          </motion.h1>
          <motion.p
           className={styles.letter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Descubra itinerários formativos que abrem portas para novas
            oportunidades.
          </motion.p>
          <motion.p
           className={styles.letter1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Nós transformamos sua paixão em profissão com cursos de qualidade
            e inovação.
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

      <div  className={styles.wave} style={{ transform: "rotate(180deg)", overflow: "hidden" }}>
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

      <div ref={targetSectionRef} className={styles.targetSection}>
        <motion.div 
          className={styles.infoSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className={styles.infoTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Conhecendo o SENAI Valinhos
          </motion.h2>
          <motion.p 
            className={styles.infoSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Nossa instituição é ótima por oferecer formação de qualidade e
            preparação prática para o mercado.
          </motion.p>
          <motion.div 
            className={styles.infoCardsContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div 
              className={styles.infoCard}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className={styles.infoCardGif}></div>
              <img className={styles.infoCardImage} src="1.png" alt="Imagem 1" />
              <h4 className={styles.infoCardTitle}>Missão</h4>
              <p className={styles.infoCardDescription}>
                Promover o desenvolvimento sustentável do país, elevando a
                competitividade da indústria, por meio da educação profissional
                e da inovação e tecnologia.
              </p>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className={styles.infoCardGif}></div>
              <img className={styles.infoCardImage} src="2.png" alt="Imagem 2" />
              <h4 className={styles.infoCardTitle}>Visão</h4>
              <p className={styles.infoCardDescription}>
                Ser reconhecido pela oferta de formação profissional de padrão
                global, como indutor da inovação e da tecnologia para a
                competitividade da indústria.
              </p>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className={styles.infoCardGif}></div>
              <img className={styles.infoCardImage} src="3.png" alt="Imagem 3" />
              <h4 className={styles.infoCardTitle}>Compromissos</h4>
              <p className={styles.infoCardDescription}>
                Formação para oportunidades reais de trabalho. Meritocracia
                baseada em oportunidades iguais para todos.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className={styles.middleSection}>
          <div className={styles.leftImage}>
            <img src="homeelemento.png" alt="Cursos SENAI" />
          </div>
          <div className={styles.rightContent}>
            <div className={styles.titleAndText}>
              <h2 className={styles.sectionTitle}>Excelência em Formação Técnica</h2>
              <p className={styles.rightText}>
                Os cursos do SENAI são reconhecidos pela excelência na formação
                técnica e profissional. Com uma infraestrutura moderna e corpo
                docente altamente qualificado, oferecemos uma gama de cursos que
                atendem às demandas do mercado de trabalho. Desde a formação
                inicial até cursos avançados, garantimos que nossos alunos
                estejam prontos para enfrentar os desafios da indústria.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.cardsInnerContainer}>
            <div className={styles.card1}>
              <img className={styles.redSeta} src="red.png" alt="Seta Vermelha" />
              <h4 className={styles.cardTitle1}>Descubra áreas disponíveis!</h4>
            </div>
          </div>

          <AreaCardsPagination />
        </div>

        <img className={styles.redSeta} src="red.png" alt="Seta Vermelha" />
        <h4 className={styles.cardTitle1}>Depoimentos</h4>
        <Carrossel />
      </div>

      <Footer />
    </div>
  );
}