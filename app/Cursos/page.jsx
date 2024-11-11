"use client"
import api from '../../api/api.js';
import React, { useEffect, useState } from 'react';
import CursosC from '../components/CursosC/CursosC.jsx';
import styles from './cursos.module.css';

const CursosComponent = () => {
  const [cursos, setCursos] = useState([]);
  const [filters, setFilters] = useState({
    idade: '',
    modalidade: '',
    nivel: '',
    turno: ''
  });
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCursos = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('http://localhost:4000/cursos', {
        params: filters
      });
      console.log(response);
      setCursos(response.data.cursos);
      setIsFilterApplied(true);
    } catch (error) {
      console.log('Erro ao buscar cursos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFilterApply = () => {
    fetchCursos();
  };

  return (
    <div className={styles.cursosContainer}>
      <h1 className={styles.title}>Cursos</h1>
      <div className={styles.filterContainer}>
        <div className={styles.filterItem}>
          <label htmlFor="idade">Idade Mínima:</label>
          <input
            id="idade"
            type="number"
            value={filters.idade}
            onChange={(e) => handleFilterChange('idade', e.target.value)}
          />
        </div>
        <div className={styles.filterItem}>
          <label htmlFor="modalidade">Modalidade:</label>
          <select
            id="modalidade"
            value={filters.modalidade}
            onChange={(e) => handleFilterChange('modalidade', e.target.value)}
          >
            <option value="">Selecione uma modalidade</option>
            <option value="online">Online</option>
            <option value="presencial">Presencial</option>
            <option value="gravado">Gravado</option>
          </select>
        </div>
        <div className={styles.filterItem}>
          <label htmlFor="nivel">Nível:</label>
          <select
            id="nivel"
            value={filters.nivel}
            onChange={(e) => handleFilterChange('nivel', e.target.value)}
          >
            <option value="">Selecione um nível</option>
            <option value="integrado">Integrado</option>
            <option value="profissionalizante">Profissionalizante</option>
            <option value="concomitante">Concomitante</option>
          </select>
        </div>
        <div className={styles.filterItem}>
          <label htmlFor="turno">Turno:</label>
          <select
            id="turno"
            value={filters.turno}
            onChange={(e) => handleFilterChange('turno', e.target.value)}
          >
            <option value="">Selecione um turno</option>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
            <option value="integral">Integral</option>
          </select>
        </div>
        <button
          className={`${styles.filterButton} ${isLoading ? styles.loading : ''}`}
          onClick={handleFilterApply}
          disabled={isLoading}
        >
          {isLoading ? 'Carregando...' : 'Aplicar Filtro'}
        </button>
      </div>
      <div className={styles.container2}>
        {isFilterApplied ? (
          cursos.length > 0 ? (
            cursos.map((curso) => (
              <div className={styles.cursoCard} key={curso.id_curso}>
                <CursosC
                  titulo={curso.titulo}
                  modalidade={curso.modalidade}
                  carga_horaria={curso.carga_horaria}
                  nivel={curso.nivel}
                  descricao={curso.descricao}
                  descricao_requisitos={curso.descricao_requisitos}
                  programacao={curso.programacao}
                  modalidade_aula={curso.modalidade_aula}
                  metodologia_ensino={curso.metodologia_ensino}
                  idade={curso.idade}
                  turnos={curso.turnos}
                  status={curso.status}
                  imagem={curso.imagem}
                />
              </div>
            ))
          ) : (
            <p className={styles.loader}>Nenhum curso encontrado.</p>
          )
        ) : (
          <p className={styles.loader}>Carregando...</p>
        )}
      </div> 
    
    </div>

  );
};

export default CursosComponent;