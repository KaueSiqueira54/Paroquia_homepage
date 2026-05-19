import styles from "../styles/Hero.module.css";
import Imagem from "../assets/hero.png";

function Hero() {
  return (
    <section className={styles.sec_hero}>
      <div className={styles.text}>
        <h1>PARÓQUIA SÃO PEDRO APÓSTOLO</h1>
      </div>
      <img src={Imagem} alt="" />
    </section>
  );
}

export default Hero;
