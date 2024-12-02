// src/app/CursosComponent.js
"use client"
import styles from './style.module.css';
import Link from 'next/link';

// Componente que renderiza cada curso individual
function CursosC({ id_curso, titulo, descricao, idade, status }) {
  console.log();
  
  return (
    <div className={styles.container}>
      <div className={styles.topcontainer}>
        <div className={styles.curso2}>
          <div className={styles.curso}>
            <div className={styles.top}>
              <div className={styles.title}>
                <h1>{titulo}</h1>
              </div>

              <div className={styles.desc}>
                <p className={styles.text}>{descricao}</p>
              </div>

              <div className={styles.infos}>
                <p className={styles.textInfo}>Idade: {idade}</p>
                <p className={styles.textInfo}>Status: {status}</p>
              </div>
            </div>

            {/* Link para detalhes do curso */}
            <Link href={`/DetalhesC/${id_curso}`} className={styles.btn}>
              Ver Curso
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CursosC;

// Componente pai que renderiza a lista de cursos
function ComponentePai({ cursos }) {
  return (
    <div>
      {cursos.map((curso) => (
        <CursosC
          key={curso.id_curso}

          titulo={curso.titulo}
          status={curso.status}
          descricao={curso.descricao}
          idade={curso.idade}
          carga_horaria={curso.carga_horaria}
          nivel={curso.nivel} 
          descricao_requisitos={curso.descricao_requisitos}  
          programacao={curso.programacao}
          modalidade_aula={curso.modalidade_aula}
          metodologia_ensino={curso.metodologia_ensino}
        />
      ))}
    </div>
  );
}
