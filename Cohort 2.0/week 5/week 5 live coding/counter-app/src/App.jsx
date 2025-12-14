/*import { useState } from 'react' // hook 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

// let state ={
//   count:0
// } react cant rerender this,this is avoding the react purpose react exist to watch out and update the dom  so it expects below code
// let {state,useState} =React.useState(0)

function App() {
  const [count,setCount] = useState(0)
  function onClickHandler(){
    //count++  but this is not the right way to update in react as react gave you setcount call that method with new count
    setCount(count+1)
  //   console.log(state.count)
  //  alert("hey you're pressng the button!")
  }

  return (
  <div>
    <button onClick={onClickHandler}>Counter {count}</button>
  </div>
  )
}

export default App
*/

const { useState } = require("react");

/*import { useState } from "react";

function App(){
  const [count,setCount] = useState(0)
  return (<div>
    <CustomButton count = {count} setCount ={setCount}></CustomButton>
  </div>)
}
//component which takes props(has count setCount)props/state/properties as args
//should be in camel case(everyword start with cap letter)
function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count+1)
  }
  return <button onClick ={onClickHandler}>
    Counter {props.count}
  </button>
}
export default App;*/


//practice (spaced repition)
function App(){
  const [count,setCount] = useState(0)


  return (
    <ButtonCompo count ={count} setCount ={setCount}></ButtonCompo>
  )

  function ButtonComp(props){
    function onclickHandle(){
      props.setCount(count+1)
    }
    return (
      <button onClick={onclickHandle}> Counter {props.count}</button>
    )
  }
}
