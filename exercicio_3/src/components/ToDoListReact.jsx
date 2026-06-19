import { useState } from 'react'

const ToDoListReact = () => {
    const [tarefa, setTarefa] = useState('')//Padrão input vazio
    const [tarefas, setTarefas] = useState([]);//Padrão array vazio

    function adicionarTarefa() {
        if (tarefa.trim() === '') {//trim() remove espaços em branco, se o resultado for vazio, a tarefa é inválida
            alert('Por favor, digite uma tarefa válida.');
            return;
        } else {
            setTarefas([...tarefas, tarefa]);//Adicionar tarefa ao array
        }
        setTarefa('');//Resetar input após adicionar tarefa
    }

  return (
    <div>
        <h1>Lista de Tarefas com REACT</h1>
        <p>Quantidade de tarefas: {tarefas.length}</p>{/* .length conta a quantidade de elementos no array */}
        <input type="text" 
        placeholder="Digite uma tarefa..."
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
         />
        <button onClick={adicionarTarefa}>Adicionar</button>
        <ul>
            {tarefas.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoListReact