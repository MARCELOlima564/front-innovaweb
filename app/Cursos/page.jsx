"use client";
import api from '../../api/api.js';
import React, { useEffect, useState } from 'react';
import CursosC from '../components/CursosC/CursosC.jsx';
import styles from './cursos.module.css';

const CursosComponent = () => {
  const [allCursos, setAllCursos] = useState([]); // Cursos completos carregados do backend
  const [filteredCursos, setFilteredCursos] = useState([]); // Cursos filtrados a serem exibidos
  const [filters, setFilters] = useState({
    idade: '',
    modalidade: '',
    nivel: '',
    turno: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Função para buscar todos os cursos na inicialização
  useEffect(() => {
    const fetchCursos = async () => {
      setIsLoading(true);
      try {
        const response = await api.get('http://localhost:4000/cursos');
        setAllCursos(response.data.cursos); // Armazena todos os cursos
        setFilteredCursos(response.data.cursos); // Exibe todos os cursos inicialmente
      } catch (error) {
        console.error('Erro ao buscar cursos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCursos();
  }, []);

  // Função para aplicar filtros nos cursos
  useEffect(() => {
    let cursosFiltrados = allCursos;

    // Aplica filtro de idade
    if (filters.idade) {
      cursosFiltrados = cursosFiltrados.filter((curso) => curso.idade >= filters.idade);
    }
    // Aplica filtro de modalidade
    if (filters.modalidade) {
      cursosFiltrados = cursosFiltrados.filter((curso) => curso.modalidade.toLowerCase() === filters.modalidade.toLowerCase());
    }
    // Aplica filtro de nível
    if (filters.nivel) {
      cursosFiltrados = cursosFiltrados.filter((curso) => curso.nivel.toLowerCase() === filters.nivel.toLowerCase());
    }
    // Aplica filtro de turno
    if (filters.turno) {
      cursosFiltrados = cursosFiltrados.filter((curso) => curso.turnos.toLowerCase() === filters.turno.toLowerCase());
    }

    setFilteredCursos(cursosFiltrados); // Atualiza a lista exibida com os filtros aplicados
  }, [filters, allCursos]); // Atualiza quando os filtros ou a lista de cursos mudam

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
<div>
      <h1 className={styles.title}>Cursos</h1>
      <div className={styles.container}>
        <div className={styles.aside}>
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
            <option value="Gravada">Gravada</option>
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
            <option value="integrado">Iniciante</option>
            <option value="Avançado">Avançado</option>
            <option value="profissionalizante">Profissionalizante</option>
            
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
        </div></div>
        <div className={styles.containerCard}>
        {isLoading ? (
          <p className={styles.loader}>Carregando...</p>
        ) : filteredCursos.length > 0 ? (
          filteredCursos.map((curso) => (
            <div className={styles.card} key={curso.id_curso}>
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
          <p className={styles.loader}> OPS! Nenhum curso encontrado.</p>
        )}
        </div>
      </div>
</div>
  );
};

export default CursosComponent;
