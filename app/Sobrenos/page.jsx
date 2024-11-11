import CardSobreNos from "../components/sobrenos/CardSobreNos";
import styles from './sobrenos.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'

export default function Sobrenos() {
    return (
        <div className={styles.div1}>
            <div className={styles.headerDiv}>
                <Header />
            </div>
            <div className={styles.titulo1}>
                <h1 className={styles.titulo}>DESENVOLVEDORES DO PROJETO</h1>
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

            <img src="senai.webp" alt="senai" className={styles.imagem1} />
            <div className={styles.Divtexto}>
                <div className={styles.divTitulo}>
                    <h1 className={styles.texto3}>Sobre a Equipe e Projeto</h1>
                </div>
                <p className={styles.texto}>A equipe InnovaWeb tem o prazer de anunciar a conclusão da plataforma de itinerários de cursos
                    para a Escola Técnica Senai. Nossa solução foi desenvolvida para oferecer uma experiência intuitiva e personalizada,
                    permitindo que os alunos ajustem seus planos de estudo de acordo com seus interesses.</p>

                <p className={styles.texto2}> A plataforma já está em funcionamento, proporcionando fácil acesso às informações dos cursos, como conteúdos,
                    horários e vagas disponíveis. Agradecemos a todos os alunos e professores que contribuíram com feedback ao longo do desenvolvimento.
                    Estamos empolgados em ver como essa ferramenta irá enriquecer a jornada educacional dos estudantes!</p>
            </div>
            <div className={styles.footerDiv}>
                <Footer />
            </div>
        </div>
    )
}
