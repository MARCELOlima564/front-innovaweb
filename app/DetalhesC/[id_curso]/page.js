'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './DetalhesC.module.css';
import AreaCardsPagination from '@/app/components/AreaCardsPagination/AreaCardsPagination';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';

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
    return <div className={styles.loadingText}>Carregando...</div>; 
  }

  if (error) {
    return <div className={styles.errorText}>Erro: {error}</div>; 
  }

  if (!curso) {
    return <div className={styles.loadingText}>Curso não encontrado.</div>; 
}
  return (
<div>
<Header />
  <div className={styles.container}>
      <div className={styles.header2IMG}>
        <h2>{curso.titulo}</h2>
       <div className={styles.horizontalLine}></div> 
        </div>
   
      
     <div className={styles.InfosDesc}>
     <h2 className={styles.h2}>Conheça sobre o curso!</h2>
        <p className={styles.infosDescText}>{curso.descricao}</p>
        <p className={styles.infosDescText}>{curso.status}</p>
      </div>

 

      <div className={styles.contaier2}>     
           
        <div className={styles.bloco1}>
          <p className={styles.blocosText}> Para entrar no curso, é necesserio uma idade minima de {curso.idade}.</p>
          <p className={styles.blocosText}> Possui uma carga horaria de {curso.carga_horaria} horas.</p>
          <p className={styles.blocosText}>Com o nível do curso sendo {curso.nivel} </p>
          <p className={styles.blocosText}> E a maneira em que é apresnetado é {curso.modalidade_aula}, algo que é fixo!</p></div>

        <div className={styles.bloco2}>
          <p className={styles.blocosText}> Requisitos para entressar {curso.descricao_requisitos}.</p>
          <p className={styles.blocosText}> Programação trabalhada {curso.programacao},</p>
          <p className={styles.blocosText}>e a métodologia utilizada para um melhor desenvolvimento é {curso.metodologia_ensino}</p>
        </div>
      </div>
    </div>
  <Footer/>
 </div> 

  );
}
