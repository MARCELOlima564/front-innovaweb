"use client";
import React, { useState, useRef, useEffect } from 'react';
import styles from './faq.module.css' // Arquivo CSS modular
import Header from '../components/Header/Header'; // Suponho que tenha um Header
import Footer from '../components/Footer/Footer'; // Suponho que tenha um Footer
import Carrossel from '../components/CarrosselFaq/CardFaq';

export default function Faq() {
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
        // Ajuste para evitar erros de referência nula
        if (!targetSectionRef.current || event.target.closest(`.${styles.card}`)) {
            return;
        }
        setActiveCard(null);
    };

    useEffect(() => {
        // Adiciona o listener de clique apenas se necessário
        document.addEventListener("click", handleOutsideClick);
        // Limpeza: remove o listener de clique ao desmontar
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerDiv}>
                <Header />
            </div>
            <div className={styles.mainContent}>
                <div className={styles.titulo1}>
                    <h1 className={styles.titulo}>Perguntas Frequentes</h1>
                </div>
                <div className={styles.heroSection}>
                    {/* Botão que rola suavemente até a targetSection */}
                    <button onClick={scrollToSection} className={styles.heroButton}>+ Saiba Mais</button>
                </div>
            </div>
            <div className={styles.seta}>
                <img className={styles.redSeta} src="red.png" alt="Seta Vermelha" />
            </div>
            {/* Seção de destino com referência para rolagem */}
            <div id="targetSection" ref={targetSectionRef} className={styles.targetSection}>
                <Carrossel />
            </div>
            <div className={styles.aviso}>
                <p className={styles.textoaviso}>Clique nos riscos BRANCOS para visualizar todos os Desenvolvedores.</p>
            </div>
            <div className={styles.footerDiv}>
                <Footer />
            </div>
        </div>
    );
}
