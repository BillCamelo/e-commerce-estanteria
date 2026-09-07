import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

export default function App() {
  const [busqueda, setBusqueda] = useState('');

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Header />
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      <ProductList busqueda={busqueda} />
      <Footer />
    </div>
  );
}