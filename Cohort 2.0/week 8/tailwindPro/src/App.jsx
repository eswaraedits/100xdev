import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const isLoggedIn = localStorage.getItem("isLoggedIn")

function App(){
  return (
  <>

    {/*flexing using css*/}

  <div style={{display:'flex', justifyContent:'space-between'}} >
    <div style={{color:"red", backgroundColor:"orange"}}>div1</div>
    <div style={{color:"green", backgroundColor:'yellow'}}>div1</div>
    <div style={{color:"magenta", background:"green"}}>div1</div>
  </div>


  {/*flexing using tailwind*/}

  <div className='flex justify-center' >
    <div style={{color:"maroon", backgroundColor:"orange"}}>tail</div>
    <div style={{color:"blue", backgroundColor:'red'}}>tail2</div>
    <div style={{color:"magenta", background:"green"}}>tail2</div>
  </div><br />


  {/*adding responsiveness using css*/}

  <div className='grid grid-cols-10 ' > {/*grid has 3 columns */} 
    <div style={{color:"maroon", backgroundColor:"orange"}}>tail</div>
    <div style={{color:"blue", backgroundColor:'red'}}>tail2</div>
    <div style={{color:"magenta", background:"green"}}>tail2</div>
    <div style={{color:"green", background:"pink"}}>tail2</div>
    <div style={{color:"blue", background:"lime"}}>tail2</div>
    <div className='w-full'>red</div>
  </div>

{/*grid to manupulate each div say 40% 20% 40% */ }
  <div className='grid grid-cols-10 ' > {/*grid has 3 columns */} 
    <div className='bg-red-500 col-span-4' >tail</div>
    <div className='bg-green-300 col-span-2'>tail2</div>
    <div className='bg-red-300 col-span-4'>tail2</div>
   
  </div><br /><br />

    <div className='grid grid-cols-3 md:grid-cols-1'>
      <div className='bg-red-400'>child1</div>
      <div className='bg-green-800'>child2</div>
      <div className='bg-blue-400'>child3</div>
    </div>
  </>
  
  )

}

export default App
