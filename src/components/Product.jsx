import { useState } from 'react';
import QuantitySelector from './QuantitySelector';
import styles from '../styles/Product.module.css';

export default function Product({ image, title, price }) {
  const [quantity, setQuantity] = useState(0);
  const [selector, setSelector] = useState(false);

  return (
    <div className={styles.product}>
      <div>
        <img src={image} className={styles.image} alt="" />
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price} €</p>
      </div>

      <div>
        {selector ? (
          quantity == 0 ? (
            setSelector(false)
          ) : (
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          )
        ) : (
          <button
            className={styles.button}
            onClick={() => {
              setQuantity(1);
              setSelector(true);
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
