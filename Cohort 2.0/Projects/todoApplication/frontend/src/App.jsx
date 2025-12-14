import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos] = useState([])

  useEffect(()=>{
   const fetchFunction = async()=>{await fetch("http://localhost:3000/todos").then(async function(res){
    const json = await res.json()
    setTodos(json.todos)
  })}
  fetchFunction()
  },[])
  return (
    <div>
      <Todos todos={todos} />
      <CreateTodo></CreateTodo>
    </div>
  )
  }
export default App


/* import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the handleClick function
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependencies array: the function will only change if count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
 */
