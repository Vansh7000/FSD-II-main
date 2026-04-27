import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <header>
        <h1>Shopping Cart</h1>
        <p>React Context + Redux demo</p>
      </header>
      <main>
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}
