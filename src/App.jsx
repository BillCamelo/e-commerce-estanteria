import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  const [carrito, setCarrito] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos.products);
        setCargando(false);
      })
      .catch((err) => {
        setError('Hubo un problema al cargar los productos.');
        setCargando(false);
      });
  }, []);

  const productosFiltrados = productos.filter((producto) =>
    producto.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="contenedor-app">
      <Header carrito={carrito} />
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      
      {cargando && <p style={{ textAlign: 'center', marginTop: '20px' }}>Cargando catálogo...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>{error}</p>}
      
      {!cargando && !error && (
        <ProductList 
          productos={productosFiltrados} 
          carrito={carrito}
          setCarrito={setCarrito}
        />
      )}
      
      <Footer />
    </div>
  );
}