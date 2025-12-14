import React from "react"

export default function({children}:{
    children : React.ReactNode})
{
    return (
    <div>
        <div className="p-4 border text-center">
            20% off for next 24hours
        </div>
            {children}
             
    </div>)
    
}