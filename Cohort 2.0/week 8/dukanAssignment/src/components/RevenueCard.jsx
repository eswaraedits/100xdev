export function RevenueCard({title,orderCount,amount}){
return(
    <div className="bg-white rounded shadow-lg p-4">
        <div className="text-gray-500">{title}?</div>
        <div className="flex justify-between">
            <div className="text-black-900">{amount}</div>
            <div>{orderCount?<div className="flex"><div>{orderCount} order('s)</div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</div>:null}</div>
        </div>
        </div>
        )
}