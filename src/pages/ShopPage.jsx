import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Loading from '../components/Loading';
import ErrorPage from './ErrorPage';
import styles from '../styles/ShopPage.module.css';

let cachedProducts = null;

export default function ShopPage() {
  const [data, setData] = useState(cachedProducts);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(!cachedProducts);

  useEffect(() => {
    if (cachedProducts) return;

    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((data) => {
        cachedProducts = data;
        setData(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  if (error)
    return (
      <ErrorPage
        header={false}
        title="Something went wrong"
        message="Failed to load products. Please try again later."
      />
    );

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
