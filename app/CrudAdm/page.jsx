
'use client';

import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import api from '@/api/api';
import styles from './crudadm.module.css';
import Header from '../components/Header/Header';

const AdmPage = () => {
  const [administradores, setAdministradores] = useState([]);
  const [novoEmail, setNovoEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [administradorSelecionadoId, setAdministradorSelecionadoId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  useEffect(() => {
    fetchAdministradores();
  }, []);

  const fetchAdministradores = async () => {
    setLoading(true);
    setErro('');
    try {
      const response = await api.get('/administrador');
      setAdministradores(response.data.administrador || []);
    } catch (error) {
      setErro('Erro ao carregar administradores. Tente novamente.');
      console.error('Erro ao carregar administradores:', error);
    } finally {
      setLoading(false);
    }
  };

  const preencherFormularioParaAtualizacao = (adm) => {
    setNovoEmail(adm.email);
    setNovaSenha(''); // Senha não deve ser exibida por segurança
    setAdministradorSelecionadoId(adm.id_administrador);
    setErro('');
  };

  const handleCriarAdministrador = async () => {
    if (!novoEmail || !novaSenha) {
      setErro('Preencha todos os campos obrigatórios.');
      return;
    }

    setLoading(true);
    setErro('');
    try {
      await api.post('/administrador', { email: novoEmail, senha: novaSenha });
      fetchAdministradores();
      resetFormFields();
    } catch (error) {
      setErro('Erro ao criar administrador. Tente novamente.');
      console.error('Erro ao criar administrador:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAtualizarAdministrador = async () => {
    if (!administradorSelecionadoId || !novoEmail || !novaSenha) {
      setErro('Preencha todos os campos para atualizar.');
      return;
    }

    setLoading(true);
    setErro('');
    try {
      await api.put(`/administrador/${administradorSelecionadoId}`, { email: novoEmail, senha: novaSenha });
      fetchAdministradores();
      resetFormFields();
      setAdministradorSelecionadoId(null);
    } catch (error) {
      setErro('Erro ao atualizar administrador. Tente novamente.');
      console.error('Erro ao atualizar administrador:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletarAdministrador = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este administrador?')) return;

    setLoading(true);
    setErro('');
    try {
      await api.delete(`/administrador/${id}`);
      fetchAdministradores();
    } catch (error) {
      setErro('Erro ao deletar administrador. Tente novamente.');
      console.error('Erro ao deletar administrador:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetFormFields = () => {
    setNovoEmail('');
    setNovaSenha('');
    setAdministradorSelecionadoId(null);
    setErro('');
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      {erro && <div className={styles.errorMessage}>{erro}</div>}

      <div className={styles.cardsContainer}>
        <div className={styles.formCard}>
          <h2>{administradorSelecionadoId ? 'Atualizar Administrador' : 'Novo Administrador'}</h2>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              className={styles.inputField}
              value={novoEmail}
              onChange={(e) => setNovoEmail(e.target.value)}
              placeholder="Digite o email"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Senha:</label>
            <input
              type="password"
              className={styles.inputField}
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              placeholder="Digite a senha"
            />
          </div>
          <div className={styles.formActions}>
            <button
              onClick={administradorSelecionadoId ? handleAtualizarAdministrador : handleCriarAdministrador}
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'Carregando...' : administradorSelecionadoId ? 'Atualizar' : 'Criar'}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.administradorList}>
        <h2>Administradores Cadastrados</h2>
        {loading && <p>Carregando administradores...</p>}
        {!loading && administradores.length === 0 && <p>Nenhum administrador encontrado.</p>}
        {!loading &&
          administradores.map((adm) => (
            <div key={adm.id_administrador} className={styles.admItem}>
              <h3>{adm.email}</h3>
              <div className={styles.AdministradorActions}>
                <FaEdit
                  className={styles.icon}
                  onClick={() => preencherFormularioParaAtualizacao(adm)}
                />
                <FaTrash
                  className={styles.icon}
                  onClick={() => handleDeletarAdministrador(adm.id_administrador)}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdmPage;