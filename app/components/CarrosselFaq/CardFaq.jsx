import React from 'react';
import { Carousel } from 'antd';
import styles from './cardfaq.module.css';

const CarouselComponent = () => (
    <div className={styles.carouselWrapper}>
        <Carousel arrows infinite={true} className={styles.container}>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Qual é o objetivo dos cursos do SENAI?</h1>
                </div>
                <p className={styles.resposta}>O SENAI oferece cursos técnicos e de formação profissional para qualificar trabalhadores e capacitar pessoas para atuarem em diversas áreas industriais. O objetivo principal é fornecer habilidades práticas e teóricas que possam ser aplicadas no mercado de trabalho.</p>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Quais são os requisitos para fazer um curso técnico do SENAI?</h1>
                </div>
                <p className={styles.resposta}>Para fazer um curso técnico presencial do SENAI é necessário ter concluído a 1ª série do Ensino Médio até o início das aulas. Para cursos da noite, é preciso ter o Ensino Médio completo. Além disso, alguns cursos podem exigir outras condições específicas.</p>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Os cursos do SENAI são gratuitos?</h1>
                </div>
                <p className={styles.resposta}>Sim, todos os Cursos Técnicos e de Aprendizagem Industrial do SENAI são gratuitos. Além disso, o SENAI também oferece alguns cursos livres gratuitos e bolsas parciais em Cursos Superiores (graduação e pós-graduação).</p>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Onde posso encontrar mais informações sobre os cursos do SENAI?</h1>
                </div>
                <p className={styles.resposta}>Você pode acessar o site oficial do SENAI (sp.senai.br) para obter todas as informações detalhadas sobre os cursos oferecidos, incluindo inscrições, programação e requisitos específicos. Também existem links específicos para cursos online e graduações/pós-graduações.</p>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Qual é a duração dos cursos técnicos do SENAI?</h1>
                </div>
                <p className={styles.resposta}>A duração dos cursos técnicos do SENAI varia conforme o tipo de curso. Os cursos técnicos geralmente duram entre 1 a 2 anos, podendo ser realizados ainda durante o Ensino Médio. Já os cursos superiores (tecnólogos) têm duração entre 2 a 3 anos e precisam ser feitos após o Ensino Médio completo.</p>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Quais são as áreas em que o SENAI oferece cursos?</h1>
                </div>
                <p className={styles.resposta}>O SENAI oferece cursos em diversas áreas técnicas, incluindo eletrônica, mecânica, química, informática, entre outras.</p>
            </div>
        </Carousel>
    </div>
);

export default CarouselComponent;