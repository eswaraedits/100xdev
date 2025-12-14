/* import { useState,memo } from 'react';

function App() {
  const [firstTitle, setFirstTitle] = useState("my name is eswar");

  function changeTitle() {
    setFirstTitle("my name is " + Math.random());
  }

  console.log('App re-rendered');

  return (
    <div>
      <button onClick={changeTitle}>click me to change name</button>
      <Header title={firstTitle} />
      <Header title="ram" />
      <Header title="k" />
    </div>
  );
}

const Header = memo(({ title }) => {
  return <div>{title}</div>;
})

export default App; */
/* import React from "react";
import { useState } from "react";

function App(){
  const [todos,setTodos]=useState([
    {
      id:1,
      title:"goto gym",
      description:"going to gym"
     },
     {
      id:2,
      title:"going to play",
      description:"hello world"
     }
  ])
  
  function AddTodo(){
    setTodos([...todos,{
      id:3,
      title:"added todo 3",
      description:"added todo 3 for gos skeed"
    }])
  }
  
  return(
    <div>
      <button onClick={AddTodo}>add todo</button>
   {todos.map(todo=>{return <Todo key={todo.id} title={todo.title} description={todo.description}/>})}
    </div>
  )
}
function Todo({title,description}){
  return <div>

    <h1>{title}</h1>
    <h2>{description}</h2>

  </div>
}
export default App */
/* import React from "react"
function App(){
  return <div>
    <CardWrapper InnerComponent={<Component1/>}/>
    <CardWrapper InnerComponent={<Component2/>}/>
    </div>
}
function Component1(){
    return <div style={{backgroundColor:"red", color:"wheat"}}>"hello there how are you"</div>
}
function Component2(){
  return <div style={{backgroundColor:"yellow", fontFamily:"initial"}}>"this is going to "</div>
}
function CardWrapper({InnerComponent}){
  return <div style={{border:"2px solid black",padding:20}}>
    {InnerComponent}
  </div>
}

export default App; */

/* //Real Wrapper
import React from 'react'
function App(){
return <div>
  <CardWrapper>
    hi there
  </CardWrapper>
  <div style={{marginTop:20}}><CardWrapper ><div>hello 3</div></CardWrapper></div>
  <CardWrapper>this is third card</CardWrapper>
  <CardWrapper><CardWrapper>hellow man</CardWrapper></CardWrapper>
  </div>
}

function CardWrapper({children}){
  return <div style={{border:"2px solid pink",padding:20, borderRadius:"10px 10px"}}>
    {children}
  </div>
}
export default App */

import React, { useEffect, useState } from "react";


function App(){
  const [todos,setTodos] = useState([])
  
useEffect(()=>{fetch("https://sum-server.100xdevs.com/todos").then(async(res)=>{const json = await res.json();setTodos(json.todos)})},[])

return (<div>
  {todos.map(todo=><Todos key = {todo.id} title = {todo.title} description={todo.description} />)}
</div>)
}
function Todos({title,description}){
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}
export default App