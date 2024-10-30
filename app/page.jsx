import Header from "./components/Header/Header";
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.backgroundimg}>
      <Header />
      <div className={styles.redSection}>
        <div className={styles.banner}>
          <h1>O conhecimento se transforma em prática e</h1>
          <h1>o aprendizado em carreira. O caminho</h1>
          <h1>para a profissão dos seus sonhos!</h1>
          <p>Descubra itinerários formativos que abrem portas para novas oportunidades.</p>
          <p>Nós transformamos sua paixão em profissão com cursos de qualidade e inovação.</p>
          <a href="/sobre-senai" className={styles.bannerButton}>Saiba Mais</a>
        </div>
      </div>
    </div>
  );
}
