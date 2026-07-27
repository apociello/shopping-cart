import styles from '../styles/QuantitySelector.module.css';

export default function QuantitySelector({ quantity, setQuantity }) {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => setQuantity(quantity - 1)}>
        {quantity <= 1 ? 'X' : '-'}
      </button>
      <p>{quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}
