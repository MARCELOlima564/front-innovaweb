import React from 'react';
import { Carousel } from 'antd';
import styles from './CarouselSobre.module.css';

const CarouselComponent = () => (
    <div className={styles.carouselWrapper}>
        <Carousel arrows infinite={true} className={styles.container}>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Ana Júlia Pontes</h1>
                </div>
                <p className={styles.resposta}>Tem 18 anos, estudante formada do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Isabela Alcântara</h1>
                </div>
                <p className={styles.resposta}>Tem 18 anos, estudante formada do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Marcelo Lima</h1>
                </div>
                <p className={styles.resposta}>Tem 18 anos, estudante formado do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Nicolly Santos</h1>
                </div>
                <p className={styles.resposta}>Tem 17 anos, estudante formada do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
                <p className={styles.email}>nicolly.silva5@aluno.senai.br</p>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Manuela Queiroz</h1>
                </div>
                <p className={styles.resposta}>Tem 17 anos, estudante formada do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
                <p className={styles.email}>manuelamachado@aluno.senai.br</p>
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.infos}>
                <h1 className={styles.pergunta}>Manuela Queiroz</h1>
                </div>
                <p className={styles.resposta}>Tem 17 anos, estudante formada do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
                <p className={styles.email}>manuelamachado@aluno.senai.br</p>
            </div>
        </Carousel>
    </div>
);

export default CarouselComponent;
