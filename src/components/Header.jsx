import styles from '../styles/Header.module.css'
import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="" />
      
      <nav className={styles.nav}>
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">Cart</a>
      </nav>
    </header>
  );
}
