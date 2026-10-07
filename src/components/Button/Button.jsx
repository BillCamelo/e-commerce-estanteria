import './Button.css';

export default function Button({ texto, tipo = 'primary', onClick }) { 
  return (
    <button 
      onClick={onClick}
      className={`boton-base ${tipo === 'primary' ? 'boton-primario' : 'boton-secundario'}`}
    >
      {texto}
    </button>
  );
}