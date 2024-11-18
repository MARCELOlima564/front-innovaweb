'use client';

import React, { useState, useEffect } from 'react';
import api from '@/api/api';
import styles from './crudadm.module.css';
import Header from '../components/Header/Header';

const CursosPage = () => {
  const [administradores, setAdministradores] = useState([]);
  const [novoEmail, setNovoEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [administradorSelecionadoId, setAdministradorSelecionadoId] = useState(null);

  useEffect(() => {
    fetchAdministradores();
  }, []);

  const fetchAdministradores = async () => {
    try {
      const response = await api.get('/administrador');
      setAdministradores(response.data.administradores);
    } catch (error) {
      console.error('Erro ao obter administradores:', error);
    }
  };

  const preencherFormularioParaAtualizacao = (adm) => {
    setNovoEmail(adm.email);
    setNovaSenha(adm.senha);
    setAdministradorSelecionadoId(adm.id_administrador);
  };

  const handleCriarAdministrador = async () => {
    try {
      await api.post('/administrador', {
        email: novoEmail,
        senha: novaSenha,
      });
      fetchAdministradores();
      resetFormFields();
    } catch (error) {
      console.error('Erro ao criar administrador:', error);
    }
  };

  const handleAtualizarAdministrador = async () => {
    if (!administradorSelecionadoId) return;

    try {
      await api.put(`/administrador/${administradorSelecionadoId}`, {
        email: novoEmail,
        senha: novaSenha,
      });
      fetchCursos();
      resetFormFields();
      setAdministradorSelecionadoId(null);
    } catch (error) {
      console.error('Erro ao atualizar administrador:', error);
    }
  };

  const handleDeletarAdministrador = async (id) => {
    try {
      await api.delete(`/administrador/${id}`);
      fetchAdministradores();
    } catch (error) {
      console.error('Erro ao deletar administrador:', error);
    }
  };

  const resetFormFields = () => {
    setNovoEmail('');
    setNovaSenha('');
    setAdministradorSelecionadoId(null);
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