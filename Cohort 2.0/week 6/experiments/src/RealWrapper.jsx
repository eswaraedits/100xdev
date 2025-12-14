import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function RealWrapper() {
  return(  <Fragment>
  <CardWrapper innerComp={<TextComp/>}/>
  <CardWrapper innerComp={<TextComp/>}/>
  </Fragment>)

  
}
function CardWrapper({innerComp}){  //takes comp as argument
  return (<div style={{border: "2px solid red",padding:"50px"}}>
    {innerComp}
  </div>)
}
function TextComp(){
  return (<h3>hai there</h3>)
}
function TextComp2(){
  return (<h3>hello there</h3>)
}
export default RealWrapper