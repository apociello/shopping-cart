import { Link } from 'react-router';
import styles from '../styles/Header.module.css';
import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="" />

      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}
