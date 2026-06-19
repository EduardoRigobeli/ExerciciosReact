import { useState } from 'react'

export const UseStateCount = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const diminuir = () => {
        setCount((prevCount) => prevCount - 1)
    }

    return (
    <div>
        <h1>Contador {count}</h1>
        <button onClick={incrementCount}>Incrementar</button><br />
        <button onClick={diminuir}>Diminuir</button>
    </div>
  )
}
