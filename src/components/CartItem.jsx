import QuantitySelector from './QuantitySelector';
import styles from '../styles/CartItem.module.css';

export default function CartItem({ id, quantity, image, title, price }) {
  return (
    <div className={styles.item}>
      <img src={image} className={styles.image} alt="" />
      <p>{title}</p>
      <QuantitySelector id={id} quantity={quantity} />
      <p>{price * quantity} €</p>
    </div>
  );
}
