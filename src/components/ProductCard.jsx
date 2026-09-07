import { useState } from 'react';
import Button from './Button';

export default function ProductCard({ name, price, category, image }) {
  const [ampliado, setAmpliado] = useState(false);
  const [cantidad, setCantidad] = useState(0);

  const restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  const sumar = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <div style={{ border: '1px solid #e5e7eb', padding: '16px', margin: '12px', borderRadius: '12px', textAlign: 'center', width: '240px', background: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <img 
        src={image} 
        alt={name}
        onClick={() => setAmpliado(!ampliado)} 
        style={{ 
          width: '100%', 
          height: '180px', 
          objectFit: 'contain', 
          cursor: ampliado ? 'zoom-out' : 'zoom-in',
          transform: ampliado ? 'scale(1.3)' : 'scale(1)',
          transition: 'transform 0.3s ease',
          position: ampliado ? 'relative' : 'static',
          zIndex: ampliado ? 10 : 1
        }} 
      />
      <h3 style={{ fontSize: '1.1rem', color: '#1f2937', margin: '12px 0 6px' }}>{name}</h3>
      <p style={{ color: '#6b7280', fontSize: '13px', margin: '0 0 10px' }}>{category}</p>
      <p style={{ color: '#4f46e5', fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 12px' }}>${price.toLocaleString()}</p>
      
      {cantidad === 0 ? (
        <Button texto="Agregar equipo" tipo="primary" onClick={sumar} />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
          <Button texto="-" tipo="secondary" onClick={restar} />
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{cantidad}</span>
          <Button texto="+" tipo="primary" onClick={sumar} />
        </div>
      )}
    </div>
  );
}