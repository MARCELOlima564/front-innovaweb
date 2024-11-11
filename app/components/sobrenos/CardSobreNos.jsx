import styles from "./sobreNos.module.css"

const CardSobreNos = ({ foto, nome, funcao, desc, email, caminho }) => {
    return (
        <div className={styles.Card}>
            <img src={foto} className={styles.fotos}/>
            <h1 className={styles.Nomes}>{nome}</h1>
            <h3 className={styles.funcoes}>{funcao}</h3>
            <p className={styles.descricao}>{desc}</p>
            <div className={styles.DivEmail}>
            <p className={styles.email}>{email}</p>
            </div>
        </div>
    )
}

export default CardSobreNos;