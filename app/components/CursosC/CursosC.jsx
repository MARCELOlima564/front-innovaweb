import styles from './style.module.css';
<CursosC />;
function CursosC({
  titulo,
  carga_horaria,
  nivel,
  descricao,
  idade,
  status,

}) {
  return (

      <div className={styles.ContainerC}>
        <div className={styles.blocoInfos1} >
          <div className={styles.curso}>
            <div className={styles.titulo}>
              <h1>{titulo}</h1>
            </div>
            <div className={styles.carga}>
              <p>{carga_horaria}</p>
            </div>
            <div className={styles.nivel}>
              <p>{nivel}</p>
            </div>
            <div className={styles.descricao}>
              <p>{descricao}</p>
            </div>
            <div className={styles.idade}>
              <p>{idade}</p>
            </div>
            <div className={styles.status}>
              <p>{status}</p>
              <div className={styles.botoes}>
                <button className={styles.btn}>
                  <a href="#">Ver Curso</a>
                </button>
                <button className={styles.btn}>
                  <a href="#">Ver Curso</a>
                </button>

                {/* <button className={styles.btn}>
          <a href="#">Ver Curso</a>
        {console.log(status)}
        </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CursosC;