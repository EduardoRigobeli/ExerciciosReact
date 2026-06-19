import { useState } from 'react';

const MotivationalQuoteGenerator = () => {
    const [frase, setFrase] = useState("");

    const frases = [
        "Continue aprendendo!",//índice - 0
        "A prática leva à perfeição!",//índice - 1
        "Um componente por vez.",//índice - 2
        "Erros fazem parte do processo.",//índice - 3
        "React fica mais fácil com exercícios."//índice - 4
    ]

  return (
    <div>
        <h1>Gerador de Frases Motivacionais</h1>
        <button onClick={() => setFrase(frases[Math.floor(Math.random() * frases.length)])}>Gerar Frase</button>{/*Math.random() * frases.length) pega um índice aleatório dentro do array de frases */}
        <div>
            <p>{frase}</p>
        </div>
    </div>
  )
}

export default MotivationalQuoteGenerator