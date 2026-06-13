import Header from './components/header/Header';
import Card from './components/card/Card';
import styles from './App.module.css';

const App = () => {
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x200?text=Laptop',
      title: 'High-Performance Laptop',
      description: 'Fast processor, 16GB RAM, perfect for coding',
      price: 999,
      isOnSale: true,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200?text=Headphones',
      title: 'Wireless Headphones',
      description: 'Noise-cancelling with 30-hour battery',
      price: 199,
      isOnSale: false,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200?text=Monitor',
      title: '4K Monitor',
      description: 'Ultra-clear display for creative work',
      price: 499,
      isOnSale: true,
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300x200?text=Keyboard',
      title: 'Mechanical Keyboard',
      description: 'RGB backlighting, Cherry MX switches',
      price: 149,
      isOnSale: false,
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Featured Products</h1>
      <div className={styles.cardsGrid}>
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            isOnSale={product.isOnSale}
          />
        ))}
      </div>
    </div>
  );
};

export default App;