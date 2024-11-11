import styles from "./faq.module.css"
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import CardFaq from "../components/cardFaq/CardFaq";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'

export default function Faq() {
    return (
        <div className={styles.container}>
        <div className={styles.headerDiv}>
        <Header/>
      </div>
<div className={styles.containerT}>
            <h1 className={styles.titulo}>Perguntas Frequentes</h1>
            </div>
            <div className={styles.perguntas}>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />
                </div>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />


                </div>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />
                </div>
            </div>
            <div className={styles.perguntas}>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />
                </div>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />


                </div>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />
                </div>
            </div>
            <div className={styles.perguntas}>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />
                </div>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />


                </div>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />
                </div>
            </div>
            <div className={styles.perguntas}>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />
                </div>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />


                </div>
                <div className={styles.containerPerguntas}>

                    <RiCheckboxBlankCircleFill color="red" className={styles.circulo} />
                    <CardFaq perguntas={"O QUE É O SENAI?"}
                        respostas={"Uma escola de curso tecnico focado com o profissonal."} />
                </div>
            </div>
            <div className={styles.containerContato}>
                <h1 className={styles.tituloContato}>Caso Tenha Dúvidas:</h1>
                <p className={styles.subtiuloContato}>Informações de Contato e Endereço</p>
                <div className={styles.containerInformacoes}>
                    <div className={styles.divInformacoes}>
                        <p className={styles.telefone}>TELEFONE: (19) 98925-6337</p>
                    </div>
                    <div className={styles.divInformacoes}></div>
                    <p className={styles.localizacao}>LOCALIZAÇÃO: R. Artur Fernandes Querido, 55 - Vila Santo Antonio, Valinhos - SP, 13270-530 </p>
                   </div>

            </div>
            <div className={styles.footerDiv}>
       <Footer/>
      </div>
        </div>
        
    )
}