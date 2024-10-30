import api from '../../../api/api';
import React, { useEffect, useState } from 'react'

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
          <div key={curso.id}>
            <h2>{curso.titulo}</h2>
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default CursosComponent;
