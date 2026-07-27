import { useState } from 'react';
import { useOutletContext } from 'react-router';
import QuantitySelector from './QuantitySelector';
import styles from '../styles/Product.module.css';

export default function Product({ id, image, title, price }) {
  const { cartItems, updateItem } = useOutletContext();
  const cartItem = cartItems.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

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
            setQuantity={setQuantity}
          />
        ) : (
          <button
            className={styles.button}
            onClick={() => {
              setQuantity(1);
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
