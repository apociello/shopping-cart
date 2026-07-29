import { useOutletContext } from 'react-router';
import { useNavigate } from 'react-router';
import CartItem from '../components/CartItem';
import styles from '../styles/CartPage.module.css';

export default function CartPage() {
  const { products, cartItems, setCartItems } = useOutletContext();
  const navigate = useNavigate();

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

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal <= 29.99 ? 3.99 : 0;
  const total = subtotal + shipping;

  return (
    <main className={styles.main}>
      {cartProducts.length < 1 ? (
        <h1 className={styles.h1}>No items in the cart!</h1>
      ) : (
        <>
          <div className={styles.items}>
            {cartProducts.map((product) => (
              <CartItem
                key={product.id}
                id={product.id}
                quantity={product.quantity}
                image={product.image}
                price={product.price}
                title={product.title}
              />
            ))}
          </div>

          <div className="right">
            <div className={styles.orderSummary}>
              <div>
                <p>Subtotal </p>
                <p>{subtotal.toFixed(2)} €</p>
              </div>

              <div>
                <p>Shipping </p>
                <p>{shipping.toFixed(2)} €</p>
              </div>

              <div>
                <p>Total </p>
                <p>{total.toFixed(2)} €</p>
              </div>
            </div>

            <button
              className={styles.button}
              onClick={() => {
                alert('Thank you for your purchase!');
                setCartItems([]);
                navigate('/');
              }}
            >
              Pay
            </button>
          </div>
        </>
      )}
    </main>
  );
}
