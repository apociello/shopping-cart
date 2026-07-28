import styles from '../styles/CartItem.module.css';

export default function CartItem({ quantity, image, title, price }) {
  return (
    <div className={styles.item}>
      <img src={image} className={styles.image} alt="" />
      <p>{title}</p>
      <p>
        {price} * {quantity} = {price * quantity} €
      </p>
    </div>
  );
}
