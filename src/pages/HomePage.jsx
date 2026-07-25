import { Link } from 'react-router';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h1 className={styles.h1}>Everyday essentials</h1>
        <Link to="shop" className={styles.button}>
          Shop now
        </Link>
      </div>
    </main>
  );
}
