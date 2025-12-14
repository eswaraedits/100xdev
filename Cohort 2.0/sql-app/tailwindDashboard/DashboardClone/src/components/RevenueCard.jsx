import React from 'react'

export const RevenueCard = ({title,orderCount,amount}) => {
  return (
    <div className='bg-sky-500/75 rounded-full shadow-sm p-7 mt-10 ml-10 hover:bg-red-400'>
        <div className='text-gray-800'>
            {title}?
        </div>
        <div className='flex justify-between '>
           <div>₹{amount}</div> 
       <div>
        {orderCount?
        <div className='flex'>
        <div className='text-violet-900 cursor-pointer underline  font-medium '>{orderCount}order(s)</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-red-700 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

 </div>:null}
 </div> 
        </div> 
    </div>)
} 