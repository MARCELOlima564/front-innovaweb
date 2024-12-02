'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './DetalhesC.module.css';
import AreaCardsPagination from '@/app/components/AreaCardsPagination/AreaCardsPagination';
import Header from '@/app/components/Header/Header';

export default function DetalhesCurso() {
  const params = useParams(); // Captura os parâmetros dinâmicos da URL
  const id_curso = params?.id_curso; // Use o nome exato do parâmetro definido na rota dinâmica

  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id_curso) {
      setError('ID de curso inválido. oie');
      setLoading(false);
      return;
    }

    const fetchCursoDetalhes = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/cursos/${id_curso}`);
        setCurso(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.mensagem || 'Erro ao buscar o curso.');
        setLoading(false);
      }
    };

    fetchCursoDetalhes();
  }, [id_curso]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!curso) {
    return <div>Curso não encontrado.</div>;
  }

  return (
<div>
<Header />
  <div className={styles.container}>
      <div className={styles.header2IMG}>
        <h2>{curso.titulo}</h2>
      </div>
    
      <div className={styles.InfosDesc}>
        <h2 className={styles.h2}>Conheça sobre o curso!</h2>
        <p className={styles.infosDescText}>{curso.descricao}</p>
        <p className={styles.infosDescText}>{curso.status}</p>
      </div>

      <div className={styles.contaier2}>

        <div className={styles.bloco1}>
          <p className={styles.blocosText}>idade minima de {curso.idade} </p>
          <p className={styles.blocosText}>carga horaria de {curso.carga_horaria} horas.</p>
          <p className={styles.blocosText}>nvel do curso {curso.nivel} </p>
          <p className={styles.blocosText}>Modalidade:{curso.modalidade_aula}</p></div>

        <div className={styles.bloco2}>
          <p className={styles.blocosText}>descricao_requisitos:{curso.descricao_requisitos}</p>
          <p className={styles.blocosText}> programacao:{curso.programacao}</p>
          <p className={styles.blocosText}>metodologia utilizada: {curso.metodologia_ensino}</p>
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

    </div>
  </div>
  );
}
