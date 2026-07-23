import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Market</h1>
      
      <nav className={styles.nav}>
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">Cart</a>
      </nav>
    </header>
  );
}
