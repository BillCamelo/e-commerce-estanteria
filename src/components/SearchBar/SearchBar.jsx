import './SearchBar.css';

export default function SearchBar({ busqueda, setBusqueda }) {
  function manejarCambio(evento) {
    setBusqueda(evento.target.value);
  }

  return (
    <div className="contenedor-buscador">
      <input 
        type="text" 
        value={busqueda} 
        onChange={manejarCambio} 
        placeholder="Busca un producto..." 
        className="input-buscador"
      />
    </div>
  );
}