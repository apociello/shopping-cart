import { Outlet } from 'react-router';
import { useState } from 'react';
import Header from './components/Header';
import './styles/App.css';

export default function App() {
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  function updateItem(id, quantity) {
    const itemFound = cartItems.find((item) => item.id === id);

    if (itemFound) {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: quantity };
          } else {
            return item;
          }
        }),
      );
    } else {
      setCartItems([...cartItems, { id: id, quantity: quantity }]);
    }
  }

  function deleteItem(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header cartItems={cartItems} />
      <Outlet
        context={{
          products,
          setProducts,
          cartItems,
          setCartItems,
          updateItem,
          deleteItem,
        }}
      />
    </>
  );
}
