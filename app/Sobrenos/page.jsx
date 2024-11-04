import CardSobreNos from "../components/sobrenos/CardSobreNos";
import styles from './sobrenos.module.css';

export default function Sobrenos() {
    return (
        <div className={styles.div1}>
           
            <img src="senai.webp" alt="senai" className={styles.imagem}/>
            <div className={styles.titulo1}>
            <h1 className={styles.titulo}>Desenvolvedores do Projeto</h1>
            </div>
        <div className={styles.Principal}>
            <CardSobreNos
                foto={"anaju.jpg"}
                nome={"Ana Júlia Pontes"}
                funcao={"Desenvolvedora"}
                desc={"Tem 18 anos, estudante formada do SENAI Valinhos, no curso de Desenvolvimento de Sistemas em 2024."}
                email={"ana-pontes@aluno.senai.br"}
            />
             <CardSobreNos
                foto={"isabela.jpg"}
                nome={"Isabela Alcântara"}
                funcao={"Desenvolvedora"}
                desc={"Tem 18 anos, estudante formada do SENAI Valinhos, no curso de Desenvolvimento de Sistemas em 2024."}
                email={"isabela.ferreira16@aluno.senai.br"}
            />
              <CardSobreNos
                foto={"marcelo.jpg"}
                nome={"Marcelo Gabriel Lima"}
                funcao={"Desenvolvedor"}
                desc={"Tem 18 anos, estudante formado do SENAI Valinhos, no curso de Desenvolvimento de Sistemas em 2024."}
                email={"marcelo.lima4@aluno.senai.br"}
            />
            </div>
            <div className={styles.Principal2}>
             <CardSobreNos
                foto={"nicolly.jpg"}
                nome={"Nicolly Santos"}
                funcao={"Desenvolvedora"}
                desc={"Tem 17 anos, estudante formada do SENAI Valinhos, no curso de Desenvolvimento de Sistemas em 2024."}
                email={"nicolly.silva5@aluno.senai.br"}
            />
            <CardSobreNos
                foto={"manuela.jpg"}
                nome={"Manuela Queiroz"}
                funcao={"Desenvolvedora"}
                desc={"Tem 17 anos, estudante formada do SENAI Valinhos, no curso de Desenvolvimento de Sistemas em 2024."}
                email={"manuelamachado@aluno.senai.br"}
            />
            </div>
        
        <img src="senai.webp" alt="senai" className={styles.imagem1}/>
        </div>
    )
}
