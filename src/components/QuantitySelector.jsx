import { Trash, Minus, Plus } from 'lucide-react';
import { useOutletContext } from 'react-router';
import styles from '../styles/QuantitySelector.module.css';

export default function QuantitySelector({ id, quantity, className }) {
  const { updateItem, deleteItem } = useOutletContext();

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <button
        onClick={() => {
          if (quantity > 1) {
            updateItem(id, quantity - 1);
          } else {
            deleteItem(id);
          }
        }}
      >
        {quantity <= 1 ? <Trash size={17} /> : <Minus size={17} />}
      </button>

      <p>{quantity}</p>

      <button
        onClick={() => {
          updateItem(id, quantity + 1);
        }}
      >
        <Plus size={17} />
      </button>
    </div>
  );
}
