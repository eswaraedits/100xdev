# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title,setTitle] =useState("my name is kirat");

  function fn(){
    return <div>
      setTitle("my name is"+Math.random())
    </div>
  }
  return (
    <div>
      <Headers title="harkirat"></Headers>
      <button onClick={fn}>update the title</button>
      <Headers title={title}></Headers>
    </div>
  )
}

function Headers({title}){
  return(
    <div>
      {title}</div>
  )
}

export default App
*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title,setTitle] =useState("my name is kirat");

  function fn(){
      setTitle("my name is"+Math.random())
  }

  return (
    <div>
      <button onClick={fn}>update</button>
      <Headers title="harkirat"></Headers>
      <Headers title={title}></Headers>
    </div>
  )

}

const Headers =React.memo(function Headers({title}){
  return(
    <div>{title}</div>
  )
})






wrappers

function App() {

  return (
    <div style={{display: "flex"}}>
      <Card>
        hi there
      </Card>
      <Card>
        <div>
          hello from the 2nd card
        </div>
      </Card>
      <Card>
        helloo ther
      </Card>
      <Hello>
        hello man
        <Th>
          rama
        </Th>
      </Hello>
    </div>
  )
}

function Card({children}) {
  return <div style={{
    border: "1px solid black",
    padding: 10,
    margin: 10
  }}>
    {children}
  </div>
}
function Hello({children}){
  return <div>
    {children}
    {children}
  </div>
}

export default App




my biggest issue is syntax how to get comfotable with it i am getting concepts well but couldnt code on my own please give some tips