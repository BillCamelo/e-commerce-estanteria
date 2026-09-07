export default function Button({ texto, tipo = 'primary', onClick }) {
  const estiloBase = {
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'background 0.2s'
  };

  const estilosTipo = {
    primary: { backgroundColor: '#4f46e5', color: '#fff' },
    secondary: { backgroundColor: '#e5e7eb', color: '#1f2937' }
  };

  return (
    <button 
      onClick={onClick} 
      style={{ ...estiloBase, ...estilosTipo[tipo] }}
    >
      {texto}
    </button>
  );
}