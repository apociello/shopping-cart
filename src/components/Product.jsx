import styles from '../styles/Product.module.css';

export default function Product({ image, title, price }) {
  return (
    <div className={styles.product}>
      <div>
        <img src={image} className={styles.image} alt="" />
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price} €</p>
      </div>

      <div>
        <button className={styles.button}>Add to cart</button>
      </div>
    </div>
  );
}
