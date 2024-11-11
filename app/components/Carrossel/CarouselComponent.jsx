import React from 'react';
import { Carousel } from 'antd';
import styles from './CarouselComponent.module.css'; 

const CarouselComponent = () => (
  <div className={styles.carouselWrapper}>
    <Carousel arrows infinite={true} className={styles.carousel}>
      <div className={styles.carouselItem}>
        <img src="/senai.jpg" alt="Imagem 1" className={styles.carouselImage} />
      </div>
      <div className={styles.carouselItem}>
        <img src="/senai.jpg" alt="Imagem 2" className={styles.carouselImage} />
      </div>
      <div className={styles.carouselItem}>
        <img src="/senai.jpg" alt="Imagem 3" className={styles.carouselImage} />
      </div>
      <div className={styles.carouselItem}>
        <img src="/senai.jpg" alt="Imagem 4" className={styles.carouselImage} />
      </div>
      <div className={styles.carouselItem}>
        <img src="/senai.jpg" alt="Imagem 5" className={styles.carouselImage} />
      </div>
    </Carousel>
  </div>
);

export default CarouselComponent;
