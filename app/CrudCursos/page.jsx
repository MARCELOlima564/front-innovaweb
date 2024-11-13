'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '@/api/api';
import styles from './crudCursos.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Header from '../components/Header/Header';

const CursosPage = () => {
  const [cursos, setCursos] = useState([]);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaModalidade, setNovaModalidade] = useState('');
  const [novaCargaHoraria, setNovaCargaHoraria] = useState(0);
  const [novoNivel, setNovoNivel] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [novaDescricaoRequisitos, setNovaDescricaoRequisitos] = useState('');
  const [novaProgramacao, setNovaProgramacao] = useState('');
  const [novaModalidadeAula, setNovaModalidadeAula] = useState('');
  const [novaMetodologiaEnsino, setNovaMetodologiaEnsino] = useState('');
  const [novaIdade, setNovaIdade] = useState(0);
  const [novosTurnos, setNovosTurnos] = useState('');
  const [novoStatus, setNovoStatus] = useState('');
  const [novaImagem, setNovaImagem] = useState('');
  const [cursoSelecionadoId, setCursoSelecionadoId] = useState(null);

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = async () => {
    try {
      const response = await api.get('/cursos');
      setCursos(response.data.cursos);
    } catch (error) {
      console.error('Erro ao obter cursos:', error);
    }
  };

  const preencherFormularioParaAtualizacao = (curso) => {
    setNovoTitulo(curso.titulo);
    setNovaModalidade(curso.modalidade);
    setNovaCargaHoraria(curso.carga_horaria);
    setNovoNivel(curso.nivel);
    setNovaDescricao(curso.descricao);
    setNovaDescricaoRequisitos(curso.descricao_requisitos);
    setNovaProgramacao(curso.programacao);
    setNovaModalidadeAula(curso.modalidade_aula);
    setNovaMetodologiaEnsino(curso.metodologia_ensino);
    setNovaIdade(curso.idade);
    setNovosTurnos(curso.turnos);
    setNovoStatus(curso.status);
    setNovaImagem(curso.imagem);
    setCursoSelecionadoId(curso.id_curso);
  };

  const handleCriarCurso = async () => {
    try {
      await api.post('/cursos', {
        titulo: novoTitulo,
        modalidade: novaModalidade,
        carga_horaria: novaCargaHoraria,
        nivel: novoNivel,
        descricao: novaDescricao,
        descricao_requisitos: novaDescricaoRequisitos,
        programacao: novaProgramacao,
        modalidade_aula: novaModalidadeAula,
        metodologia_ensino: novaMetodologiaEnsino,
        idade: novaIdade,
        turnos: novosTurnos,
        status: novoStatus,
        imagem: novaImagem,
      });
      fetchCursos();
      resetFormFields();
    } catch (error) {
      console.error('Erro ao criar curso:', error);
    }
  };

  const handleAtualizarCurso = async () => {
    if (!cursoSelecionadoId) return;

    try {
      await api.put(`/cursos/${cursoSelecionadoId}`, {
        titulo: novoTitulo,
        modalidade: novaModalidade,
        carga_horaria: novaCargaHoraria,
        nivel: novoNivel,
        descricao: novaDescricao,
        descricao_requisitos: novaDescricaoRequisitos,
        programacao: novaProgramacao,
        modalidade_aula: novaModalidadeAula,
        metodologia_ensino: novaMetodologiaEnsino,
        idade: novaIdade,
        turnos: novosTurnos,
        status: novoStatus,
        imagem: novaImagem,
      });
      fetchCursos();
      resetFormFields();
      setCursoSelecionadoId(null);
    } catch (error) {
      console.error('Erro ao atualizar curso:', error);
    }
  };

  const handleDeletarCurso = async (id) => {
    try {
      await api.delete(`/cursos/${id}`);
      fetchCursos();
    } catch (error) {
      console.error('Erro ao deletar curso:', error);
    }
  };

  const resetFormFields = () => {
    setNovoTitulo('');
    setNovaModalidade('');
    setNovaCargaHoraria(0);
    setNovoNivel('');
    setNovaDescricao('');
    setNovaDescricaoRequisitos('');
    setNovaProgramacao('');
    setNovaModalidadeAula('');
    setNovaMetodologiaEnsino('');
    setNovaIdade(0);
    setNovosTurnos('');
    setNovoStatus('');
    setNovaImagem('');
    setCursoSelecionadoId(null);
  };

  return (
    <div className={styles.pageContainer}>
      {/* <Header /> */}
      <div className={styles.cardsContainer}>
        <div className={styles.formCard}>
          <h2>{cursoSelecionadoId ? 'Atualizar Curso' : 'Novo Curso'}</h2>
          <label>Título:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
          />
          <label>Modalidade:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novaModalidade}
            onChange={(e) => setNovaModalidade(e.target.value)}
          />
          <label>Carga Horária:</label>
          <input
            type="number"
            className={styles.inputField}
            value={novaCargaHoraria}
            onChange={(e) => setNovaCargaHoraria(e.target.value)}
          />
          <label>Nível:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novoNivel}
            onChange={(e) => setNovoNivel(e.target.value)}
          />
          <label>Descrição:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novaDescricao}
            onChange={(e) => setNovoNivel(e.target.value)}
          />
          <label>Requisitos:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novaDescricaoRequisitos}
            onChange={(e) => setNovoNivel(e.target.value)}
          />
          <label>Programação:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novaProgramacao}
            onChange={(e) => setNovoNivel(e.target.value)}
          />
          <label>Modalidade aula:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novaModalidadeAula}
            onChange={(e) => setNovoNivel(e.target.value)}
          />
          <label>Metodologia de Ensino:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novaMetodologiaEnsino}
            onChange={(e) => setNovoNivel(e.target.value)}
          />
          <label>Idade:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novaIdade}
            onChange={(e) => setNovoNivel(e.target.value)}
          />
          <label>Turnos:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novosTurnos}
            onChange={(e) => setNovoNivel(e.target.value)}
          />
          <label>Status:</label>
          <input
            type="boolean"
            className={styles.inputField}
            value={novoStatus}
            onChange={(e) => setNovoNivel(e.target.value)}
          />
          <label>Imagem:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novaImagem}
            onChange={(e) => setNovoNivel(e.target.value)}
          />
          {/* Adicione os outros inputs aqui, aplicando a classe styles.inputField */}
          {cursoSelecionadoId ? (
            <div>
              <button onClick={handleAtualizarCurso}>Salvar Alterações</button>
              <button onClick={resetFormFields}>Cancelar</button>
            </div>
          ) : (
            <button onClick={handleCriarCurso}>Criar Curso</button>
          )}
        </div>

        <div className={styles.coursesListCard}>
          <h2>Listagem de Cursos</h2>
          <table className={styles.coursesTable}>
            <thead>
              <tr>
                <th className={styles.leftr} >Título</th>
                <th className={styles.leftr}>Modalidade</th>
                <th className={styles.leftr}>Carga Horária</th>
                <th className={styles.leftr}>Descrição</th>
                <th className={styles.leftr}>Programação</th>
                <th className={styles.leftr}>Idade</th>
                <th className={styles.leftr}>Turnos</th>
                <th className={styles.leftr}>Status</th>
                <th className={styles.leftr}>Imagem</th>
                <th className={styles.leftr}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cursos.map((curso) => (
                <tr key={curso.id_curso} className={styles.courseRow}>
                  <td>{curso.titulo}</td>
                  <td>{curso.modalidade}</td>
                  <td>{curso.carga_horaria}</td>
                  <td>{curso.nivel}</td>
                  <td>
                    <FaEdit
                      className={styles.actionIcon}
                      onClick={() => preencherFormularioParaAtualizacao(curso)}
                    />
                    <FaTrash
                      className={styles.actionIcon}
                      onClick={() => handleDeletarCurso(curso.id_curso)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CursosPage;
