import Header from '../components/Header';
import styles from '../styles/ErrorPage.module.css';
export default function ErrorPage({ header, title, message }) {
  return (
    <>
      {header && <Header />}

      <main className={styles.main}>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.p}>{message}</p>
      </main>
    </>
  );
}
