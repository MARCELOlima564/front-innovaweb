import React from 'react';
import { Carousel } from 'antd';
import styles from './CarouselComponent.module.css';

const CarouselComponent = () => (
  <div className={styles.carouselWrapper}>
    <Carousel arrows infinite={true} className={styles.carousel}>
      <div className={styles.carouselItem}>
        <a href="https://sp.senai.br/unidade/valinhos/" target="_blank" rel="noopener noreferrer">
          <img src="/senai.jpg" alt="Imagem 1" className={styles.carouselImage} />
        </a>
      </div>
      <div className={styles.carouselItem}>
        <a href="https://sp.senai.br/unidade/valinhos/" target="_blank" rel="noopener noreferrer">
          <img src="/senaiamb.jpg" alt="Imagem 2" className={styles.carouselImage} />
        </a>
      </div>
      <div className={styles.carouselItem}>
        <a href="https://sp.senai.br/unidade/valinhos/" target="_blank" rel="noopener noreferrer">
          <img src="/senaiamb1.jpg" alt="Imagem 3" className={styles.carouselImage} />
        </a>
      </div>
      <div className={styles.carouselItem}>
        <a href="https://sp.senai.br/unidade/valinhos/" target="_blank" rel="noopener noreferrer">
          <img src="/senaiamb2.JPG" alt="Imagem 4" className={styles.carouselImage} />
        </a>
      </div>
      <div className={styles.carouselItem}>
        <a href="https://sp.senai.br/unidade/valinhos/" target="_blank" rel="noopener noreferrer">
          <img src="/senaiamb3.jpg" alt="Imagem 4" className={styles.carouselImage} />
        </a>
      </div>

      <div className={styles.carouselItem}>
        <a href="https://sp.senai.br/unidade/valinhos/" target="_blank" rel="noopener noreferrer">
          <img src="/senaiamb4.jpg" alt="Imagem 4" className={styles.carouselImage} />
        </a>
      </div>

      <div className={styles.carouselItem}>
        <a href="https://sp.senai.br/unidade/valinhos/" target="_blank" rel="noopener noreferrer">
          <img src="/senaiamb5.jpg" alt="Imagem 4" className={styles.carouselImage} />
        </a>
      </div>

      <div className={styles.carouselItem}>
        <a href="https://sp.senai.br/unidade/valinhos/" target="_blank" rel="noopener noreferrer">
          <img src="/senaiamb6.jpg" alt="Imagem 4" className={styles.carouselImage} />
        </a>
      </div>

      <div className={styles.carouselItem}>
        <a href="https://sp.senai.br/unidade/valinhos/" target="_blank" rel="noopener noreferrer">
          <img src="/senaiamb7.jpg" alt="Imagem 4" className={styles.carouselImage} />
        </a>
      </div>
    
    </Carousel>
  </div>
);

export default CarouselComponent;

