import { useState } from 'react';

export const MostrarEsconderTexto = () => {
    const [msg, setMsg] = useState(false);
 
  return (
    <div>
        <h1>Mostrar Esconder Texto</h1>
        {msg && <p>Olá, React!</p>}
        <button onClick={() => setMsg(!msg)}>
            {msg ? "Esconder Mensagem" : "Mostrar Mensagem"}
        </button>
    </div>
  )
}
