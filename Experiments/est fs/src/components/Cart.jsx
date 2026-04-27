import { useSelector } from 'react-redux';
import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
  const { cart, removeItem, clearCart } = useCart();
  const products = useSelector((state) => state.catalog.products);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemsInCart = cart.length;

  return (
    <section className="card cart">
      <h2>Your Cart</h2>
      {itemsInCart === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-preview">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <strong>{item.name}</strong>
                <div>Qty: {item.quantity}</div>
                <div>${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            </div>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}
      <div className="cart-summary">
        <span>Products: {itemsInCart}</span>
        <span>Total: ${total.toFixed(2)}</span>
      </div>
      <button onClick={clearCart} disabled={itemsInCart === 0}>
        Clear Cart
      </button>
      <div style={{ marginTop: '12px', fontSize: '0.9rem', color: '#475569' }}>
        <p>Redux catalog has {products.length} products.</p>
      </div>
    </section>
  );
}
