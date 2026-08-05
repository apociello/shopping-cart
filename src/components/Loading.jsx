import styles from '../styles/Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container} role="status" aria-label="loading">
      <div className={styles.spinner} />
    </div>
  );
}
