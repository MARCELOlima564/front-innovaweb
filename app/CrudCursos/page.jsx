'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '@/api/api';

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
    <div>
      <h1>Cursos</h1>

      <h2>{cursoSelecionadoId ? 'Atualizar Curso' : 'Novo Curso'}</h2>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={novoTitulo}
          onChange={(e) => setNovoTitulo(e.target.value)}
        />
        <label>Modalidade:</label>
        <input
          type="text"
          value={novaModalidade}
          onChange={(e) => setNovaModalidade(e.target.value)}
        />
        <label>Carga Horária:</label>
        <input
          type="number"
          value={novaCargaHoraria}
          onChange={(e) => setNovaCargaHoraria(e.target.value)}
        />
        <label>Nível:</label>
        <input
          type="text"
          value={novoNivel}
          onChange={(e) => setNovoNivel(e.target.value)}
        />
        <label>Descrição:</label>
        <textarea
          value={novaDescricao}
          onChange={(e) => setNovaDescricao(e.target.value)}
        />
        <label>Descrição de Requisitos:</label>
        <textarea
          value={novaDescricaoRequisitos}
          onChange={(e) => setNovaDescricaoRequisitos(e.target.value)}
        />
        <label>Programação:</label>
        <input
          type="text"
          value={novaProgramacao}
          onChange={(e) => setNovaProgramacao(e.target.value)}
        />
        <label>Modalidade de Aula:</label>
        <input
          type="text"
          value={novaModalidadeAula}
          onChange={(e) => setNovaModalidadeAula(e.target.value)}
        />
        <label>Metodologia de Ensino:</label>
        <input
          type="text"
          value={novaMetodologiaEnsino}
          onChange={(e) => setNovaMetodologiaEnsino(e.target.value)}
        />
        <label>Idade:</label>
        <input
          type="number"
          value={novaIdade}
          onChange={(e) => setNovaIdade(e.target.value)}
        />
        <label>Turnos:</label>
        <input
          type="text"
          value={novosTurnos}
          onChange={(e) => setNovosTurnos(e.target.value)}
        />
        <label>Status:</label>
        <input
          type="text"
          value={novoStatus}
          onChange={(e) => setNovoStatus(e.target.value)}
        />
        <label>Imagem:</label>
        <input
          type="text"
          value={novaImagem}
          onChange={(e) => setNovaImagem(e.target.value)}
        />
        {cursoSelecionadoId ? (
          <div>
            <button onClick={handleAtualizarCurso}>Salvar Alterações</button>
            <button onClick={resetFormFields}>Cancelar</button>
          </div>
        ) : (
          <button onClick={handleCriarCurso}>Criar Curso</button>
        )}
      </div>

      <h2>Listagem de Cursos</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Modalidade</th>
            <th>Carga Horária</th>
            <th>Nível</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id_curso}>
              <td>{curso.titulo}</td>
              <td>{curso.modalidade}</td>
              <td>{curso.carga_horaria}</td>
              <td>{curso.nivel}</td>
              <td>
                <button onClick={() => preencherFormularioParaAtualizacao(curso)}>
                  Atualizar
                </button>
                <button onClick={() => handleDeletarCurso(curso.id_curso)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CursosPage;