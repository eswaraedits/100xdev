import { Fragment, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import React from 'react'
function App() {
  const [todos,setTodos] = useState([])
  const [getsNewTodo,setgetsNewTodo] = useState(0)
useEffect(()=>{
  // fetch("https://sum-server.100xdevs.com/todos").then(async function(res){
  //   const json = await res.json();
  //   setTodos(json.todos)
    axios.get("https://sum-server.100xdevs.com/todos").then((response)=>{setTodos(response.data.todos)})
  },[getsNewTodo])
  function onClickHandler(){
      setgetsNewTodo(getsNewTodo+1)
    }
  return (
    <div>
       {todos.map(todo=><Todo key = {todo.id} titile ={todo.title} description={todo.description}/>)}
       <button onClick={onClickHandler}>change todos</button>
    </div>
  )
}
function Todo({title,description}){
      return(
        <div>
          title: {title}
          description:{description}
        </div>
      )
}

export default App
    