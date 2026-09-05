import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const cartTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="page-shell cart-page">
      <h1 className="page-title">Shopping Cart</h1>
      <h2 className="cart-total">Total Cart Amount: ${cartTotal.toFixed(2)}</h2>

      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>
              </div>
              <button className="delete-button" onClick={() => dispatch(removeItem(item.id))}>
                Delete
              </button>
            </article>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button onClick={onContinueShopping}>Continue Shopping</button>
        <button onClick={() => window.alert('Coming Soon!')}>Checkout</button>
      </div>
    </main>
  );
}

export default CartItem;
