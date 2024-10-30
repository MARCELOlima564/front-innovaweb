import styles from "./faq.module.css"
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

export default function Faq() {
    return(
        <div className={styles.container}>

         <h1 className={styles.titulo}>Perguntas frequentes</h1>

            <div className={styles.containerPerguntas}>

            <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
            <p className={styles.Pergunta}>O que é o senai?</p>

            </div>

            <div>
                <p className={styles.Respostas}>Uma empresa focado no aprendizado profissional.</p>
            </div>
            
        </div>
    )
}