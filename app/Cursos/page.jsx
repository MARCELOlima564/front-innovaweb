"use client"
import api from '../../../api/api';
import React, { useEffect, useState } from 'react';
import CursosC from '../components/CursosC'; // Ajuste o caminho conforme necessário

const CursosComponent = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await api.get('/cursos');
        setCursos(response.data);
      } catch (error) {
        console.error('Erro ao buscar cursos:', error);
      }
    };

    fetchCursos();
  }, []);

  return (
    <div>
      <h1>Cursos</h1>
      {cursos.length > 0 ? (
        cursos.map((curso) => (
          <CursosC
            key={curso.id}
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
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default CursosComponent;