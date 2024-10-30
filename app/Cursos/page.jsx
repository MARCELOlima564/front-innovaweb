"use client"
import api from '../../api/api.js';
import React, { useEffect, useState } from 'react';
import CursosC from '../components/CursosC/CursosC.jsx';


const CursosComponent = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await api.get('http://localhost:4000/cursos');
        setCursos(response.data.cursos);
        console.log(cursos)
      } catch (error) {
        console.log('Erro ao buscar cursos:', error);
      }
    };

    fetchCursos();
  }, []);

  return (
    <view>
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
        <p>Carregando aaaaaaaaaaa...</p>
      )}
    </view>
  );
};

export default CursosComponent;