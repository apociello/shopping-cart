import { useOutletContext } from 'react-router';
import QuantitySelector from './QuantitySelector';
import styles from '../styles/Product.module.css';
import buttonStyles from '../styles/Button.module.css';

export default function Product({ id, image, title, price }) {
  const { cartItems, updateItem } = useOutletContext();
  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className={styles.product}>
      <div>
        <img src={image} className={styles.image} alt="" />
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price} €</p>
      </div>

      <div>
        {quantity > 0 ? (
          <QuantitySelector
            id={id}
            quantity={quantity}
            className={styles.productWrapper}
          />
        ) : (
          <button
            className={`${buttonStyles.button} ${styles.productBtn}`}
            onClick={() => {
              updateItem(id, 1);
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
