import React from 'react';
import { Carousel } from 'antd';
import styles from './CarouselSobre.module.css';

const CarouselComponent = () => (
    <div className={styles.carouselWrapper}>
        <Carousel arrows infinite={true} className={styles.carousel}>
            <div className={styles.carouselItem}>
                <img src="anaju.jpg" alt="Imagem 1" className={styles.carouselImage} />
                <h1 className={styles.Nome}>Ana Júlia Pontes</h1>
                <h3 className={styles.funcoes}>Desenvolvedora</h3>
                <p className={styles.descricao}>Tem 18 anos, estudante formada do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
                <p className={styles.email}>ana-pontes@aluno.senai.br</p>
            </div>
            <div className={styles.carouselItem}>
                <img src="isabela.jpg" alt="Imagem 2" className={styles.carouselImage} />
                <h1 className={styles.Nome}>Ana Júlia Pontes</h1>
                <h3 className={styles.funcoes}>Desenvolvedora</h3>
                <p className={styles.descricao}>Tem 18 anos, estudante formada do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
                <p className={styles.email}>ana-pontes@aluno.senai.br</p>
            </div>
            <div className={styles.carouselItem}>
                <img src="marcelo.jpg" alt="Imagem 3" className={styles.carouselImage} />
            </div>
            <div className={styles.carouselItem}>
                <img src="nicolly.jpg" alt="Imagem 4" className={styles.carouselImage} />
            </div>
            <div className={styles.carouselItem}>
                <img src="manuela.jpg" alt="Imagem 5" className={styles.carouselImage} />
            </div>
        </Carousel>
    </div>
);

export default CarouselComponent;
