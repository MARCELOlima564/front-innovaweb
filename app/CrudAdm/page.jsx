'use client';

import React, { useState, useEffect } from 'react';
import api from '@/api/api';
import styles from './crudadm.module.css';
import Header from '../components/Header/Header';

const AdmPage = () => {
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
      fetchAdministradores();
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
          <h2>{administradorSelecionadoId ? 'Atualizar Administrador' : 'Novo Administrador'}</h2>
          <label>Email:</label>
          <input
            type="text"
            className={styles.inputField}
            value={novoEmail}
            onChange={(e) => setNovoEmail(e.target.value)}
          />
          <label>Senha:</label>
          <input
            type="password"
            className={styles.inputField}
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          {administradorSelecionadoId ? (
            <div>
              <button onClick={handleAtualizarAdministrador}>Salvar Alterações</button>
              <button onClick={resetFormFields}>Cancelar</button>
            </div>
          ) : (
            <button onClick={handleCriarAdministrador}>Criar Administrador</button>
          )}
        </div>

        <div className={styles.AdministradorListCard}>
          <h2>Listagem de Administrador</h2>
          <table className={styles.administradorTable}>
            <thead>
              <tr>
                <th className={styles.leftr} >Email</th>
                <th className={styles.leftr}>Senha</th>
              </tr>
            </thead>
            <tbody>
              {administradores.map((administradores) => (
                <tr key={administradores.id_administrador} className={styles.admRow}>
                  <td>{administradores.email}</td>
                  <td>{administradores.senha}</td>
                  <td>
                    <FaEdit
                      className={styles.actionIcon}
                      onClick={() => preencherFormularioParaAtualizacao(administradores)}
                    />
                    <FaTrash
                      className={styles.actionIcon}
                      onClick={() => handleDeletarAdministrador(administradores.id_administrador)}
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
export default AdmPage;