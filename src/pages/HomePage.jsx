import { Link } from 'react-router';
import styles from '../styles/HomePage.module.css';
import buttonStyles from '../styles/Button.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h1>Everyday essentials</h1>

        <Link to="shop" className={`${buttonStyles.button} ${styles.homeBtn}`}>
          Shop now
        </Link>
      </div>
    </main>
  );
}
