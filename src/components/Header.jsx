import { Link } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import styles from '../styles/Header.module.css';
import logo from '../assets/images/logo.png';

export default function Header({ cartItems }) {
  const numItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <img src={logo} alt="Store logo" />

      <nav>
        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/cart" aria-label={`Cart: ${numItems} items`}>
          <ShoppingCart className={styles.cartIcon} />
          <span
            className={styles.badge}
            style={{ visibility: numItems > 0 ? 'visible' : 'hidden' }}
            aria-hidden="true"
          >
            {numItems}
          </span>
        </Link>
      </nav>
    </header>
  );
}
