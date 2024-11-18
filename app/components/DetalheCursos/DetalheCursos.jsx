"use client"
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './style.module.css';


export default function DetalhesCurso() {
  const router = useRouter();
  const { id } = router.query;
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (id) {
      const buscarCurso = async () => {
        try {
          const resposta = await api.get(`/api/cursos/${id}`);
          setCurso(resposta.data);
          setLoading(false);
        } catch (error) {
          setErro('Erro ao carregar detalhes do curso');
          setLoading(false);
        }
      };

      buscarCurso();
    }
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (erro) return <div>{erro}</div>;
  if (!curso) return <div>Curso não encontrado</div>;

return(
<p className={styles.p}>oi</p>
);

}
 