import { Link } from 'react-router';
import styles from '../styles/Home.module.css';

export default function Home() {
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
