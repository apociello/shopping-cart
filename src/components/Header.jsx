import { Link } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import styles from '../styles/Header.module.css';
import logo from '../assets/images/logo.png';

export default function Header({ cartItems }) {
  const numItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="" />

      <nav className={styles.nav}>
        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/cart">
          <ShoppingCart size={20} />
          <span
            className={styles.badge}
            style={{ visibility: numItems > 0 ? 'visible' : 'hidden' }}
          >
            {numItems}
          </span>
        </Link>
      </nav>
    </header>
  );
}
