import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Props() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header name ="harkirat"/>
  
    </>
  )
function Header(props){
  return(
    <div>
      {props.name}
    </div>
  )
}
}
export default Props
