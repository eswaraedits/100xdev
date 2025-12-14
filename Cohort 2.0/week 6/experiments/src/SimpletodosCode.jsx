import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function SimpletodosCode() {
  const [todos,setTodos]=useState([{
    title:"goto gym",
    description:"goto gym to become hot"
  },
  {
    title:"goto theatre",
    description:"goto movie to become falthu"
  },
  {
    title:"goto class",
    description:"goto class to become intelligent"
  }
])
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.title} title={todo.title} description={todo.description} />
      ))}
    </div>
  )
}
function Todo({title,description} ){
  return(
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>

    </div>

  )
}
export default SimpletodosCode
