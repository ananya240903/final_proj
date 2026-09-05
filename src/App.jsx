import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const Navbar = () => (
    <nav className="navbar">
      <button className="brand" onClick={() => setPage('home')}>Paradise Nursery</button>
      <div className="nav-links">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('plants')}>Plants</button>
        <button className="cart-link" onClick={() => setPage('cart')}>Cart 🛒 <span>{cartCount}</span></button>
      </div>
    </nav>
  );

  if (page === 'home') {
    return (
      <div className="App">
        <Navbar />
        <section className="landing-page">
          <div className="landing-overlay">
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button onClick={() => setPage('plants')}>Get Started</button>
          </div>
        </section>
        <AboutUs />
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      {page === 'plants' && <ProductList />}
      {page === 'cart' && <CartItem onContinueShopping={() => setPage('plants')} />}
    </div>
  );
}

export default App;
