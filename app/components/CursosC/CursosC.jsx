import styles from './style.module.css';

function CursosC({
  titulo,
  descricao,
  idade,
  status,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.topcontainer}>
        <div className={styles.curso2}>
          <div className={styles.curso}>
            <div className={styles.top}>
              <div className={styles.tittle}>
                <h1>{titulo}</h1>
              </div>

              <div className={styles.desc}>
                <p className={styles.text}>{descricao}</p>
              </div>

              <div className={styles.infos}>
                <p className={styles.textInfo}>Idade:{idade}.</p>
                <p className={styles.textInfo}>Curso:{status}.</p>
              </div>

            </div>
            <a href="/DetalheCursos/DetalheCursos.jsx">  Ver Curso </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CursosC;
