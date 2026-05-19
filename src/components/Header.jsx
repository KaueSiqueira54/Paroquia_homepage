import styles from "../styles/Header.module.css";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className={styles.div_logo}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className={styles.div_nav}>
        <nav>
          <a href="">Home</a>
          <a href="">Missas</a>
          <a href="">Comunidades</a>
          <a href="">Atendimentos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
