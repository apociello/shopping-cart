import myImage from '../assets/images/img1.webp';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imgDiv}>
        <img src={myImage} className={styles.img} alt="" />
      </div>

      <div className={styles.info}>
        <h1 className={styles.h1}>Everyday essentials</h1>
        <button className={styles.button}>Shop now</button>
      </div>
    </main>
  );
}
