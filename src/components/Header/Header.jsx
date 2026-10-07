import './Header.css';

export default function Header({ carrito }) {
  return (
    <header className="header-tienda">
      <div className="header-textos">
        <h1 className="header-titulo">Productos Varios</h1>
        <p className="header-subtitulo">Catálogo oficial de Productos Diversos</p>
      </div>
      <div className="header-carrito">
        🛒 {carrito} {carrito === 1 ? 'producto' : 'productos'}
      </div>
    </header>
  );
}