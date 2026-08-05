import styles from '../styles/ErrorPage.module.css';
export default function ErrorPage({ title, message }) {
  return (
    <main className={styles.main} role="alert">
      <h1>{title}</h1>
      <p>{message}</p>
    </main>
  );
}
