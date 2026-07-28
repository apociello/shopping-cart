import { useOutletContext } from 'react-router';
import CartItem from '../components/CartItem';
import styles from '../styles/CartPage.module.css';

export default function CartPage() {
  const { products, cartItems } = useOutletContext();

  const cartProducts = cartItems.map((item) => {
    const product = products.find((product) => product.id === item.id);
    return {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: item.quantity,
    };
  });

  return (
    <main className={styles.main}>
      <div className={styles.items}>
        {cartProducts.length < 1 ? (
          <h1 className={styles.h1}>No items in the cart!</h1>
        ) : (
          cartProducts.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
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
