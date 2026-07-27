import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Loading from '../components/Loading';
import ErrorPage from './ErrorPage';
import styles from '../styles/ShopPage.module.css';

export default function ShopPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) throw new Error('server error');
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
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
