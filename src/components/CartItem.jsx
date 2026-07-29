import QuantitySelector from './QuantitySelector';
import styles from '../styles/CartItem.module.css';

export default function CartItem({ id, quantity, image, title, price }) {
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <img src={image} className={styles.image} alt="" />
        <p className={styles.title}>{title}</p>
      </div>

      <div className={styles.right}>
        <QuantitySelector
          id={id}
          quantity={quantity}
          className={styles.cartWrapper}
        />

        <p>{price * quantity} €</p>
      </div>
    </div>
  );
}
