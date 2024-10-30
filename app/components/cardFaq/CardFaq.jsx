import styles from "./cardfaq.module.css"

const CardFaq = ({ perguntas, respostas }) => {
    return (
        <div>
        <div className={styles.containerPerguntas}>

            <p className={styles.Perguntas}>{perguntas}</p>
            </div>
            <div>
                <p className={styles.Respostas}>{respostas}</p>
            </div>
            </div>
    )
  }
  
  export default CardFaq
