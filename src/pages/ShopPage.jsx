import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Loading from '../components/Loading';
import styles from '../styles/ShopPage.module.css'

export default function ShopPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  if (!data) return <Loading />;

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
