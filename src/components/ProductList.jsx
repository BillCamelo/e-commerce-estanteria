import ProductCard from './ProductCard';
import productsData from '../products.json';

export default function ProductList({ busqueda }) {
  const productosFiltrados = productsData.filter((producto) =>
    producto.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {productosFiltrados.map((producto) => (
        <ProductCard
          key={producto.id}
          name={producto.name}
          price={producto.price}
          category={producto.category}
          image={producto.image}
        />
      ))}
    </div>
  );
}