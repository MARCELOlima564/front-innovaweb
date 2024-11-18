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

  // Estados adicionais para armazenar as opções únicas
  const [modalidadeOptions, setModalidadeOptions] = useState([]);
  const [nivelOptions, setNivelOptions] = useState([]);
  const [turnoOptions, setTurnoOptions] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      setIsLoading(true);
      try {
        const response = await api.get('http://localhost:4000/cursos');
        const cursos = response.data.cursos;

        setAllCursos(cursos); // Armazena todos os cursos
        setFilteredCursos(cursos); // Exibe todos os cursos inicialmente

        // Extrai opções únicas para os selects
        const modalidades = [...new Set(cursos.map(curso => curso.modalidade))];
        const niveis = [...new Set(cursos.map(curso => curso.nivel))];
        const turnos = [...new Set(cursos.map(curso => curso.turnos))];

        setModalidadeOptions(modalidades);
        setNivelOptions(niveis);
        setTurnoOptions(turnos);

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

    // Aplica filtro de idade (verifica se o campo está preenchido)
    if (filters.idade) {
      cursosFiltrados = cursosFiltrados.filter((curso) => curso.idade && curso.idade >= parseInt(filters.idade));
    }
    // Aplica filtro de modalidade
    if (filters.modalidade) {
      cursosFiltrados = cursosFiltrados.filter((curso) =>
        curso.modalidade && curso.modalidade.toLowerCase() === filters.modalidade.toLowerCase()
      );
    }
    // Aplica filtro de nível
    if (filters.nivel) {
      cursosFiltrados = cursosFiltrados.filter((curso) =>
        curso.nivel && curso.nivel.toLowerCase() === filters.nivel.toLowerCase()
      );
    }
    // Aplica filtro de turno
    if (filters.turno) {
      cursosFiltrados = cursosFiltrados.filter((curso) =>
        curso.turnos && curso.turnos.toLowerCase() === filters.turno.toLowerCase()
      );
    }

    setFilteredCursos(cursosFiltrados); // Atualiza a lista exibida com os filtros aplicados
  }, [filters, allCursos]); // Atualiza quando os filtros ou a lista de cursos mudam

  // Função para atualizar os filtros
  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h2 className={styles.title}>Cursos</h2>
      <div className={styles.container}>
        <div className={styles.filterAside}>
          <label htmlFor="idade" className={styles.infoAside}>Idade Mínima:</label>
          <input
            id="idade"
            type="number"
            value={filters.idade}
            onChange={(e) => handleFilterChange('idade', e.target.value)}
          />

          <label htmlFor="modalidade">Modalidade:</label>
          <select
            id="modalidade"
            value={filters.modalidade}
            onChange={(e) => handleFilterChange('modalidade', e.target.value)}
          >
            <option value="">Selecione uma modalidade</option>
            {modalidadeOptions.map((option, index) => (
              <option key={index} value={option.toLowerCase()}>{option}</option>
            ))}
          </select>

          <label htmlFor="nivel">Nível:</label>
          <select
            id="nivel"
            value={filters.nivel}
            onChange={(e) => handleFilterChange('nivel', e.target.value)}
          >
            <option value="">Selecione um nível</option>
            {nivelOptions.map((option, index) => (
              <option key={index} value={option.toLowerCase()}>{option}</option>
            ))}
          </select>

          <label htmlFor="turno">Turno:</label>
          <select
            id="turno"
            value={filters.turno}
            onChange={(e) => handleFilterChange('turno', e.target.value)}
          >
            <option value="">Selecione um turno</option>
            {turnoOptions.map((option, index) => (
              <option key={index} value={option.toLowerCase()}>{option}</option>
            ))}
          </select>
        </div>
     
        <div className={styles.containerCards}>
          {isLoading ? (
            <p className={styles.loader}>Carregando...</p>
          ) : filteredCursos.length > 0 ? (
            filteredCursos.map((curso) => (
              <div className={styles.Cards} key={curso.id_curso}>
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
            <p>Nenhum curso encontrado com os filtros selecionados.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CursosComponent;