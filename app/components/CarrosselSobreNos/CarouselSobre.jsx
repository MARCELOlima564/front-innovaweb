import React from 'react';
import { Carousel } from 'antd';
import styles from './CarouselSobre.module.css';

const CarouselComponent = () => (
    <div className={styles.carouselWrapper}>
        <Carousel arrows infinite={true} className={styles.container}>
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
                <h1 className={styles.Nome}>Isabela Alcântara</h1>
                <h3 className={styles.funcoes}>Desenvolvedora</h3>
                <p className={styles.descricao}>Tem 18 anos, estudante formada do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
                <p className={styles.email}>isabela.ferreira16@aluno.senai.br</p>
            </div>
            <div className={styles.carouselItem}>
                <img src="marcelo.jpg" alt="Imagem 3" className={styles.carouselImage} />
                <h1 className={styles.Nome}>Marcelo Lima</h1>
                <h3 className={styles.funcoes}>Desenvolvedor</h3>
                <p className={styles.descricao}>Tem 18 anos, estudante formado do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
                <p className={styles.email}>marcelo.lima4@aluno.senai.br</p>
            </div>
            <div className={styles.carouselItem}>
                <img src="nicolly.jpg" alt="Imagem 4" className={styles.carouselImage} />
                <h1 className={styles.Nome}>Nicolly Santos</h1>
                <h3 className={styles.funcoes}>Desenvolvedora</h3>
                <p className={styles.descricao}>Tem 17 anos, estudante formada do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
                <p className={styles.email}>nicolly.silva5@aluno.senai.br</p>
            </div>
            <div className={styles.carouselItem}>
                <img src="manuela.jpg" alt="Imagem 5" className={styles.carouselImage} />
                <h1 className={styles.Nome}>Manuela Queiroz</h1>
                <h3 className={styles.funcoes}>Desenvolvedora</h3>
                <p className={styles.descricao}>Tem 17 anos, estudante formada do SENAI Valinhos,
                    no curso de Desenvolvimento de Sistemas em 2024.</p>
                <p className={styles.email}>manuelamachado@aluno.senai.br</p>
            </div>
        </Carousel>
    </div>
);

export default CarouselComponent;
