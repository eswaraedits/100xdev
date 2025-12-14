import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='grid grid-cols-1 md:grid-cols-3 '>
      <div className='bg-yellow-500'>div2</div>
      <div className='bg-violet-400'>div2</div>
      <div className='bg-gray-500'>div3 </div>
      </div> */}
      <div className='grid grid-cols-4'>
      <RevenueCard title="AmountPending" amount="23,299" orderCount="13,333"/>
      </div>
     
    </>

  )
}

export default App
