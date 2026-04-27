import { useSelector } from 'react-redux';
import { useCart } from '../context/CartContext.jsx';

export default function ProductList() {
  const products = useSelector((state) => state.catalog.products);
  const { addItem } = useCart();

  return (
    <section className="card product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-preview">
            <img src={product.image} alt={product.name} className="product-image" />
            <div>
              <strong>{product.name}</strong>
              <div>${product.price.toFixed(2)}</div>
            </div>
          </div>
          <button onClick={() => addItem(product)}>Add to cart</button>
        </div>
      ))}
    </section>
  );
}
