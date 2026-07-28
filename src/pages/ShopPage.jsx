import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import Product from '../components/Product';
import Loading from '../components/Loading';
import ErrorPage from './ErrorPage';
import styles from '../styles/ShopPage.module.css';

export default function ShopPage() {
  const { products, setProducts } = useOutletContext();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(!products);

  useEffect(() => {
    if (products) return;

    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [products, setProducts]);

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
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </main>
  );
}
