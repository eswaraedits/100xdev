import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './childComponent'
import ChildComponent from './childComponent'

function App() {
  const [count,setCount] = useState(0)
  function increaseFn(){
    setCount(count+1)
  }
  const decrease = ()=>{
    setCount(count-1)
  }
  return <div>
    <h1>Counter app</h1>
    <p>count is {count}</p>
    <button onClick={increaseFn}>increase</button><br /><br />
    <button onClick={decrease}>decrease</button>
    <ChildComponent messege = "hello there"/>
  </div>
}
export default App
