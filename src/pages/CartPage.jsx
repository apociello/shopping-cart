import { useOutletContext } from 'react-router';
import CartItem from '../components/CartItem';
import styles from '../styles/CartPage.module.css';

export default function CartPage() {
  const { products, cartItems } = useOutletContext();

  let fullInfoArray = [];

  for (let item of cartItems) {
    for (let product of products) {
      if (item.id === product.id) {
        fullInfoArray.push({
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          quantity: item.quantity,
        });
      }
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.items}>
        {fullInfoArray.length < 1 ? (
          <h1 className={styles.h1}>No items in the cart!</h1>
        ) : (
          fullInfoArray.map((product) => (
            <CartItem
              key={product.id}
              quantity={product.quantity}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          ))
        )}
      </div>
    </main>
  );
}
