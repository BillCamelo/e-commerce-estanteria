import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

export default function ProductList({ productos, carrito, setCarrito }) { 
  if (productos.length === 0) {
    return (
      <div className="lista-vacia">
        <h3>No encontramos ningún producto con ese nombre.</h3>
        <p>Intenta buscar otra cosa.</p>
      </div>
    );
  }

  return (
    <div className="grilla-productos">
      {productos.map((producto) => (
        <ProductCard 
          key={producto.id}
          title={producto.title} 
          price={producto.price}
          category={producto.category}
          thumbnail={producto.thumbnail} 
          carrito={carrito}
          setCarrito={setCarrito}
        />
      ))}
    </div>
  );
}