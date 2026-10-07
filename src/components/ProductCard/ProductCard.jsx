import { useState } from 'react';
import Button from '../Button/Button'; 
import './ProductCard.css';

export default function ProductCard({ title, price, category, thumbnail, carrito, setCarrito }) {
  const [ampliado, setAmpliado] = useState(false);
  const [cantidad, setCantidad] = useState(0);

  const restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
      setCarrito(carrito - 1);
    }
  };

  const sumar = () => {
    setCantidad(cantidad + 1);
    setCarrito(carrito + 1);
  };

  return (
    <div className="tarjeta-producto">
      <img 
        src={thumbnail} 
        alt={title} 
        onClick={() => setAmpliado(!ampliado)}
        className={ampliado ? 'imagen-producto ampliada' : 'imagen-producto'}
      />
      
      <h3 className="titulo-producto">{title}</h3>
      <p className="categoria-producto">{category}</p>
      <p className="precio-producto">${price.toLocaleString()}</p>
      
      {cantidad === 0 ? (
        <Button texto="Agregar producto" tipo="primary" onClick={sumar} />
      ) : (
        <div className="controles-carrito">
          <Button texto="-" tipo="secondary" onClick={restar} />
          <span className="cantidad">{cantidad}</span>
          <Button texto="+" tipo="primary" onClick={sumar} />
        </div>
      )}
    </div>
  );
}