'use client';

import React, { useState, useEffect } from 'react';
import api from '@/api/api';
import styles from './crudCursos.module.css';
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

      const response = await api.post('/cursos', dadosCurso);
      fetchCursos();
      resetFormFields();
    } catch (error) {
      console.error('Erro ao criar curso:', error);
      setErro('Erro ao criar curso. Verifique os campos e tente novamente.');
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

      await api.put(`/cursos/${cursoSelecionadoId}`, dadosCurso);
      fetchCursos();
      resetFormFields();
      setCursoSelecionadoId(null);
    } catch (error) {
      console.error('Erro ao atualizar curso:', error);
      setErro('Erro ao atualizar curso. Tente novamente.');
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
      setErro('Erro ao deletar curso. Tente novamente.');
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
        {/* Formulário de criação e edição */}
        {/* ... */}
      </div>
      <div className={styles.cursosList}>
        <h2>Cursos Cadastrados</h2>
        {/* Lista de cursos */}
      </div>
    </div>
  );
};

export default CursosPage;
