import React from 'react';
import styles from './paginaSobre.module.css'; // Arquivo CSS modular
import Header from '../components/Header/Header'; // Suponho que tenha um Header
import Footer from '../components/Footer/Footer'; // Suponho que tenha um Footer
import Carrossel from '../components/CarrosselSobreNos/CarouselSobre';

export default function Sobrenos() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerDiv}>
                <Header />
            </div>
            <div className={styles.mainContent}>
                <div className={styles.titulo1}>
                    <h1 className={styles.titulo}>Desenvolvedores do Projeto</h1>
                </div>
                <div className={styles.heroSection}>
                    <p className={styles.heroText}>A equipe InnovaWeb tem o prazer de anunciar a conclusão da plataforma de itinerários de cursos
                        para a Escola Técnica Senai. Nossa solução foi desenvolvida para oferecer uma experiência intuitiva e personalizada,
                        permitindo que os alunos ajustem seus planos de estudo de acordo com seus interesses.</p>
                    <p className={styles.heroText}>A plataforma já está em funcionamento, proporcionando fácil acesso às informações dos cursos, como conteúdos,
                        horários e vagas disponíveis. Agradecemos a todos os alunos e professores que contribuíram com feedback ao longo do desenvolvimento.
                        Estamos empolgados em ver como essa ferramenta irá enriquecer a jornada educacional dos estudantes!</p>
                    <a href="/Sobrenos" className={styles.heroButton}>Saiba Mais</a>
                </div>
            </div>
            <div className={styles.seta}>
            <img className={styles.redSeta} src="red.png" alt="Seta Vermelha" />
            </div>
            <Carrossel />
            <div className={styles.aviso}>
                <p className={styles.textoaviso}>Clique nos riscos Brancos para visualizar todos os Desenvolvedores. </p>
            </div>
            <div className={styles.footerDiv}>
                <Footer />
            </div>
        </div>
    );
}
