import { useState } from 'react';
import { useOutletContext } from 'react-router';
import QuantitySelector from './QuantitySelector';
import styles from '../styles/Product.module.css';

export default function Product({ id, image, title, price }) {
  const [quantity, setQuantity] = useState(0);
  const [selector, setSelector] = useState(false);

  const { updateItem } = useOutletContext();

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
            <QuantitySelector
              id={id}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          )
        ) : (
          <button
            className={styles.button}
            onClick={() => {
              setQuantity(1);
              setSelector(true);
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
