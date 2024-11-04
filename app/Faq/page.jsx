import styles from "./faq.module.css"
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import CardFaq from "../components/cardFaq/CardFaq";

export default function Faq() {
    return(
        <div className={styles.container}>

         <h1 className={styles.titulo}>Perguntas frequentes</h1>

            <div className={styles.containerPerguntas}>

            <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
            <CardFaq perguntas={"O que o senai?"}
                     respostas={"Uma escola de curso tecnico focado com o profissonal."}/>
            </div>  
            <div className={styles.containerPerguntas}>

            <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
            <CardFaq perguntas={"O que o senai?"}
                     respostas={"Uma escola de curso tecnico focado com o profissonal."}/>
            

            </div>     
            <div className={styles.containerPerguntas}>

            <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
            <CardFaq perguntas={"O que o senai?"}
                     respostas={"Uma escola de curso tecnico focado com o profissonal."}/>
            </div>   

            <div className={styles.containerContato}>
                <h1 className={styles.tituloContato}>Contato</h1>
                <p className={styles.subtiuloContato}>Informações de contato</p>
            </div>            
        </div>
    )
}