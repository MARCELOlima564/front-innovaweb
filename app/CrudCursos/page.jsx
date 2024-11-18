'use client';

import React, { useState, useEffect } from 'react';
import api from '@/api/api';
import styles from './crudcursos.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Header from '../components/Header/Header';

const CursosPage = () => {
  const [cursos, setCursos] = useState([]);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaModalidade, setNovaModalidade] = useState('');
  const [novaCargaHoraria, setNovaCargaHoraria] = useState('');
  const [novoNivel, setNovoNivel] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [novaDescricaoRequisitos, setNovaDescricaoRequisitos] = useState('');
  const [novaProgramacao, setNovaProgramacao] = useState('');
  const [novaModalidadeAula, setNovaModalidadeAula] = useState('');
  const [novaMetodologiaEnsino, setNovaMetodologiaEnsino] = useState('');
  const [novaIdade, setNovaIdade] = useState('');
  const [novosTurnos, setNovosTurnos] = useState('');
  const [novoStatus, setNovoStatus] = useState(false);
  const [novaImagem, setNovaImagem] = useState('');
  const [cursoSelecionadoId, setCursoSelecionadoId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = async () => {
    try {
      const response = await api.get('/cursos');
      setCursos(response.data.cursos);
    } catch (error) {
      console.error('Erro ao obter cursos:', error);
      setErro('Não foi possível carregar os cursos');
    }
  };

  const preencherFormularioParaAtualizacao = (curso) => {
    setNovoTitulo(curso.titulo);
    setNovaModalidade(curso.modalidade);
    setNovaCargaHoraria(curso.carga_horaria.toString());
    setNovoNivel(curso.nivel);
    setNovaDescricao(curso.descricao);
    setNovaDescricaoRequisitos(curso.descricao_requisitos);
    setNovaProgramacao(curso.programacao);
    setNovaModalidadeAula(curso.modalidade_aula);
    setNovaMetodologiaEnsino(curso.metodologia_ensino);
    setNovaIdade(curso.idade.toString());
    setNovosTurnos(curso.turnos);
    setNovoStatus(curso.status);
    setNovaImagem(curso.imagem);
    setCursoSelecionadoId(curso.id_curso);
  };

  const handleCriarCurso = async () => {
    setLoading(true);
    setErro('');
    try {
      const dadosCurso = {
        titulo: novoTitulo,
        modalidade: novaModalidade,
        carga_horaria: Number(novaCargaHoraria),
        nivel: novoNivel,
        descricao: novaDescricao,
        descricao_requisitos: novaDescricaoRequisitos,
        programacao: novaProgramacao,
        modalidade_aula: novaModalidadeAula,
        metodologia_ensino: novaMetodologiaEnsino,
        idade: Number(novaIdade),
        turnos: novosTurnos,
        status: novoStatus,
        imagem: novaImagem,
      };

      // Validar dados antes de enviar
      if (!novoTitulo || !novaModalidade || !novaCargaHoraria || !novaDescricao || !novaImagem) {
        setErro('Todos os campos obrigatórios devem ser preenchidos.');
        return;
      }

      console.log('Dados enviados para criação de curso:', dadosCurso);

      const response = await api.post('/cursos', dadosCurso);
      console.log('Resposta do servidor:', response);
      fetchCursos();
      resetFormFields();
    } catch (error) {
      console.error('Erro detalhado:', error);

      // Verificar se a resposta contém um erro
      if (error.response) {
        const message = error.response.data?.message || 'Erro desconhecido no servidor';
        setErro(`Erro ao criar curso: ${message}`);
      } else if (error.request) {
        // O pedido foi feito, mas sem resposta
        setErro('Erro de rede. Verifique sua conexão.');
      } else {
        // Outro tipo de erro
        setErro('Erro inesperado: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAtualizarCurso = async () => {
    if (!cursoSelecionadoId) return;
    setLoading(true);
    setErro('');
    try {
      const dadosCurso = {
        titulo: novoTitulo,
        modalidade: novaModalidade,
        carga_horaria: Number(novaCargaHoraria),
        nivel: novoNivel,
        descricao: novaDescricao,
        descricao_requisitos: novaDescricaoRequisitos,
        programacao: novaProgramacao,
        modalidade_aula: novaModalidadeAula,
        metodologia_ensino: novaMetodologiaEnsino,
        idade: Number(novaIdade),
        turnos: novosTurnos,
        status: novoStatus,
        imagem: novaImagem,
      };

      console.log('Dados enviados para atualização de curso:', dadosCurso);

      await api.put(`/cursos/${cursoSelecionadoId}`, dadosCurso);
      fetchCursos();
      resetFormFields();
      setCursoSelecionadoId(null);
    } catch (error) {
      console.error('Erro ao atualizar curso:', error);

      if (error.response) {
        setErro('Erro ao atualizar curso: ' + (error.response.data.message || 'Erro desconhecido'));
      } else if (error.request) {
        setErro('Erro de rede. Verifique sua conexão.');
      } else {
        setErro('Erro inesperado: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeletarCurso = async (id) => {
    setLoading(true);
    setErro('');
    try {
      await api.delete(`/cursos/${id}`);
      fetchCursos();
    } catch (error) {
      console.error('Erro ao deletar curso:', error);

      if (error.response) {
        setErro('Erro ao deletar curso: ' + (error.response.data.message || 'Erro desconhecido'));
      } else if (error.request) {
        setErro('Erro de rede. Verifique sua conexão.');
      } else {
        setErro('Erro inesperado: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const resetFormFields = () => {
    setNovoTitulo('');
    setNovaModalidade('');
    setNovaCargaHoraria('');
    setNovoNivel('');
    setNovaDescricao('');
    setNovaDescricaoRequisitos('');
    setNovaProgramacao('');
    setNovaModalidadeAula('');
    setNovaMetodologiaEnsino('');
    setNovaIdade('');
    setNovosTurnos('');
    setNovoStatus(false);
    setNovaImagem('');
    setCursoSelecionadoId(null);
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      {erro && <div className={styles.errorMessage}>{erro}</div>}
      <div className={styles.cardsContainer}>
        <div className={styles.formCard}>
          <h2>{cursoSelecionadoId ? 'Atualizar Curso' : 'Novo Curso'}</h2>
          {/* Formulário de criação ou atualização */}
          <div className={styles.formGroup}>
            <label>Título:</label>
            <input
              type="text"
              className={styles.inputField}
              value={novoTitulo}
              onChange={(e) => setNovoTitulo(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Modalidade:</label>
            <input
              type="text"
              className={styles.inputField}
              value={novaModalidade}
              onChange={(e) => setNovaModalidade(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Carga Horária:</label>
            <input
              type="number"
              className={styles.inputField}
              value={novaCargaHoraria}
              onChange={(e) => setNovaCargaHoraria(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Nível:</label>
            <input
              type="text"
              className={styles.inputField}
              value={novoNivel}
              onChange={(e) => setNovoNivel(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Descrição:</label>
            <textarea
              className={styles.textareaField}
              value={novaDescricao}
              onChange={(e) => setNovaDescricao(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Descrição dos Requisitos:</label>
            <textarea
              className={styles.textareaField}
              value={novaDescricaoRequisitos}
              onChange={(e) => setNovaDescricaoRequisitos(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Programação:</label>
            <textarea
              className={styles.textareaField}
              value={novaProgramacao}
              onChange={(e) => setNovaProgramacao(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Modalidade de Aula:</label>
            <input
              type="text"
              className={styles.inputField}
              value={novaModalidadeAula}
              onChange={(e) => setNovaModalidadeAula(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Metodologia de Ensino:</label>
            <input
              type="text"
              className={styles.inputField}
              value={novaMetodologiaEnsino}
              onChange={(e) => setNovaMetodologiaEnsino(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Idade:</label>
            <input
              type="number"
              className={styles.inputField}
              value={novaIdade}
              onChange={(e) => setNovaIdade(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Turnos:</label>
            <input
              type="text"
              className={styles.inputField}
              value={novosTurnos}
              onChange={(e) => setNovosTurnos(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Status:</label>
            <select
              value={novoStatus ? 'Ativo' : 'Inativo'}
              onChange={(e) => setNovoStatus(e.target.value === 'Ativo')}
            >
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Imagem (URL):</label>
            <input
              type="text"
              className={styles.inputField}
              value={novaImagem}
              onChange={(e) => setNovaImagem(e.target.value)}
              required
            />
          </div>

          <div className={styles.formActions}>
            <button
              onClick={cursoSelecionadoId ? handleAtualizarCurso : handleCriarCurso}
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'Carregando...' : cursoSelecionadoId ? 'Atualizar' : 'Criar'}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.cursosList}>
        <h2>Cursos Cadastrados</h2>
        {cursos.map((curso) => (
          <div key={curso.id_curso} className={styles.cursoItem}>
            <h3>{curso.titulo}</h3>
            <p>{curso.descricao}</p>
            <p>{curso.modalidade}</p>

            <div className={styles.cursoActions}>
              <FaEdit
                className={styles.icon}
                onClick={() => preencherFormularioParaAtualizacao(curso)}
              />
              <FaTrash
                className={styles.icon}
                onClick={() => handleDeletarCurso(curso.id_curso)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursosPage;
