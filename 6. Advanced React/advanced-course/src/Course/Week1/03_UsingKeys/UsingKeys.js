import { useState } from 'react'
import ToDo from './ToDo'

function UsingKeys () {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18:00'
  },
  {
    id: 'todo2',
    createdAt: '20:30'
  }])

  const reverseOrder = () => {
    // Reverse is a mutative operation, so we need to create a new array first.
    setTodos([...todos].reverse())
  }

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsingKeys
