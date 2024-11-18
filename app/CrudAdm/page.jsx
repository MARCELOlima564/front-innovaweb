'use client';

import React, { useState, useEffect } from 'react';
import api from '@/api/api';


const CrudAdm = () =>{
    const [adiministrador, setAdiministrador] = useState([]);
    const [novoEmail, setNovoEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    useEffect(() => {
        fetchAdiministrador();
      }, []);

      const fetchAdiministrador = async () => {
        try {
          const response = await api.get('/cursos');
          setCursos(response.data.cursos);
        } catch (error) {
          console.error('Erro ao obter cursos:', error);
        }
      };
    
}