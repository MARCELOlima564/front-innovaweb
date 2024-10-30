import Header from "./components/Header/Header";
import styles from './page.module.css';
//import Wave from 'react-wavify'



export default function Home() {
  return (

    <div className={styles.backgroundimg}>
      <Header />
      {/* <div class="hero_area">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div> */}
      {/* <div className={"ocean"}>
        <div className={"wave"}></div>
        <div className={"wave wave2"}></div>
      </div> */}
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
      <div>
        <h1>Bem-vindo ao Next.js!</h1>
      { /* <Wave mask="url(#mask)" fill="#1277b0" >
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="0" stopColor="white" />
      <stop offset="0.5" stopColor="black" />
    </linearGradient>
    <mask id="mask">
      <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
    </mask>
  </defs>
</Wave>*/}
      
      </div>
    </div>
  );
}
