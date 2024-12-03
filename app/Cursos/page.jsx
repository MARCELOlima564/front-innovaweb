"use client";
import api from '../../api/api.js';
import React, { useEffect, useState } from 'react';
import CursosC from '../components/CursosC/CursosC.jsx';
import styles from './cursos.module.css';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

const CursosComponent = () => {
  const [allCursos, setAllCursos] = useState([]); // Cursos carregados do backend
  const [filteredCursos, setFilteredCursos] = useState([]); // Cursos exibidos com base nos filtros
  const [filters, setFilters] = useState({
    idade: '',
    modalidade: '',
    nivel: '',
    turno: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Estados para armazenar as opções dos filtros
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

        // Extrai opções únicas para os filtros
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

  // Função para aplicar os filtros nos cursos
  useEffect(() => {
    let cursosFiltrados = allCursos;

    if (filters.idade) {
      cursosFiltrados = cursosFiltrados.filter((curso) => curso.idade && curso.idade >= parseInt(filters.idade));
    }
    if (filters.modalidade) {
      cursosFiltrados = cursosFiltrados.filter((curso) =>
        curso.modalidade && curso.modalidade.toLowerCase() === filters.modalidade.toLowerCase()
      );
    }
    if (filters.nivel) {
      cursosFiltrados = cursosFiltrados.filter((curso) =>
        curso.nivel && curso.nivel.toLowerCase() === filters.nivel.toLowerCase()
      );
    }
    if (filters.turno) {
      cursosFiltrados = cursosFiltrados.filter((curso) =>
        curso.turnos && curso.turnos.toLowerCase() === filters.turno.toLowerCase()
      );
    }

    if (filters.palavraChave) {
      cursosFiltrados = cursosFiltrados.filter((curso) =>
        Object.values(curso).some(value =>
          typeof value === 'string' && value.toLowerCase().includes(filters.palavraChave.toLowerCase())
        )
      );
    }

    setFilteredCursos(cursosFiltrados); // Atualiza os cursos filtrados
  }, [filters, allCursos]);

  // Função para atualizar os filtros
  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <div className={styles.filterAside}>
          <p className={styles.textcabecalho}>Filtre da sua maneira!</p>

          <label htmlFor="palavraChave" className={styles.infoAside}></label>
          <input className={styles.campoinfo}
            id="palavraChave"
            type="text"
            value={filters.palavraChave}
            placeholder='Digite aqui...'
            onChange={(e) => handleFilterChange('palavraChave', e.target.value)}
          />

          <label htmlFor="idade" className={styles.infoAside}>Idade:</label>
          <input className={styles.campoinfo}
            id="idade"
            type="number"
            value={filters.idade}
            onChange={(e) => handleFilterChange('idade', e.target.value)}
          />

          <label htmlFor="modalidade" className={styles.infoAside}>Modalidade:</label>
          <select className={styles.campoinfo}
            id="modalidade"
            value={filters.modalidade}
            onChange={(e) => handleFilterChange('modalidade', e.target.value)}
          >
            <option value="">Selecione</option>
            {modalidadeOptions.map((option, index) => (
              <option key={index} value={option.toLowerCase()}>{option}</option>
            ))}
          </select>

          <label htmlFor="nivel" className={styles.infoAside}>Nível:</label>
          <select className={styles.campoinfo}
            id="nivel"
            value={filters.nivel}
            onChange={(e) => handleFilterChange('nivel', e.target.value)}
          >
            <option value="">Selecione</option>
            {nivelOptions.map((option, index) => (
              <option key={index} value={option.toLowerCase()}>{option}</option>
            ))}
          </select>

          <label htmlFor="turno" className={styles.infoAside}>Turno:</label>
          <select className={styles.campoinfo}
            id="turno"
            value={filters.turno}
            onChange={(e) => handleFilterChange('turno', e.target.value)}
          >
            <option value="">Selecione</option>
            {turnoOptions.map((option, index) => (
              <option key={index} value={option.toLowerCase()}>{option}</option>
            ))}
          </select>
        </div>

        <div className={styles.verticalLine}></div>
        <div className={styles.containerCards}>
          {isLoading ? (
            <p className={styles.loader}>Carregando...</p>
          ) : filteredCursos.length > 0 ? (
            filteredCursos.map((curso) => (
              <div className={styles.Cards} key={curso.id_curso}>
                <CursosC
                  id_curso={curso.id_curso}
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

      <Footer />
    </div>
  );
};

export default CursosComponent;
