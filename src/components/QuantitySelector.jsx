import { Trash, Minus, Plus } from 'lucide-react';
import styles from '../styles/QuantitySelector.module.css';

export default function QuantitySelector({ quantity, setQuantity }) {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => setQuantity(quantity - 1)}
      >
        {quantity <= 1 ? <Trash size={17} /> : <Minus size={17} />}
      </button>
      <p>{quantity}</p>
      <button
        className={styles.button}
        onClick={() => setQuantity(quantity + 1)}
      >
        <Plus size={17} />
      </button>
    </div>
  );
}
