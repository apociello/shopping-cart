import Header from '../components/Header';
import styles from '../styles/ErrorPage.module.css'
export default function ErrorPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.h1}>Page not found</h1>
        <p className={styles.p}>The page you're looking for doesn't exist...</p>
      </main>
    </>
  );
}
