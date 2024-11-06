import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AreaCardsPagination.module.css';

const AreaCardsPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalAreas = 18;
  const totalPages = Math.ceil(totalAreas / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getVisibleCards = () => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    return Array.from({ length: cardsPerPage }, (_, i) => i + indexOfFirstCard + 1);
  };

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsInnerContainer}>
        {getVisibleCards().map((area) => (
          <motion.div
            key={area}
            className={styles.card}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.cardContent}>
              <h4 className={`${styles.cardTitle} ${area <= 3 ? styles.specialCardTitle : ''}`}>
                {area <= 3 ? area : `Área ${area}`}
              </h4>
              <p className={styles.cardDescription}>Descrição breve da Área {area}.</p>
              <span className={`${styles.cardLink} ${area <= 3 ? styles.specialCardLink : ''}`}>
                + Saiba mais
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.paginationContainer}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`${styles.paginationButton} ${
              currentPage === pageNumber ? styles.activePage : ''
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AreaCardsPagination;