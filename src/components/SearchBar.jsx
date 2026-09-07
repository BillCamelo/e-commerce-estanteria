export default function SearchBar({ busqueda, setBusqueda }) {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input
        type="text"
        placeholder="Buscar equipo o hardware..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
}