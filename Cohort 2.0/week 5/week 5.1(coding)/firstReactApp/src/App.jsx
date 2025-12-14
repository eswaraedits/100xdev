import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count,setCount] = useState(0)
return <div>
  <ButtonComponent count ={count} setCount={setCount}></ButtonComponent>
</div>

}
function ButtonComponent(props){
  function OnclickHandler(){
    props.setCount(props.count+1)
  }
return <div>
  <button onClick={OnclickHandler}>counter {props.count}</button>
</div>
}
export default App
