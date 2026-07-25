import { useState, useEffect } from 'react';
import Product from '../components/Product';
import styles from '../styles/ShopPage.module.css'

export default function ShopPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  if (!data) return 'loading...';

  return (
    <main className={styles.main}>
      {data.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </main>
  );
}
