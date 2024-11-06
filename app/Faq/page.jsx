import styles from "./faq.module.css"
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import CardFaq from "../components/cardFaq/CardFaq";

export default function Faq() {
    return(
        <div className={styles.container}>

         <h1 className={styles.titulo}>Perguntas frequentes</h1>

            <div className={styles.containerPerguntas}>

            <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
            <CardFaq perguntas={"O QUE É O SENAI?"}
                     respostas={"Uma escola de curso tecnico focado com o profissonal."}/>
            </div>  
            <div className={styles.containerPerguntas}>

            <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
            <CardFaq perguntas={"O QUE É O SENAI?"}
                     respostas={"Uma escola de curso tecnico focado com o profissonal."}/>
            

            </div>     
            <div className={styles.containerPerguntas}>

            <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
            <CardFaq perguntas={"O QUE É O SENAI?"}
                     respostas={"Uma escola de curso tecnico focado com o profissonal."}/>
            </div>   

            <div className={styles.containerContato}>
                <h1 className={styles.tituloContato}>Contato</h1>
                <p className={styles.subtiuloContato}>Informações de contato</p>
                <div className={styles.containerInformacoes}>
                    <div className={styles.divInformacoes}>
                    <p className={styles.telefone}>19 989256337</p>
                    <p className={styles.localizacao}>R. Artur Fernandes Querido, 55 - Vila Santo Antonio, Valinhos - SP, 13270-530</p>
                    </div>
                    <div className={styles.divImagem}>
                    <img src="senai2.jpg" alt="senai2" className={styles.imagem} />
                    </div>
                </div>
            </div>            
        </div>
    )
}