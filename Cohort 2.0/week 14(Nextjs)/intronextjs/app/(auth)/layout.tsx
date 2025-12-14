import React from "react";

export default function({children}:{children:React.ReactNode}){
    return <div>
        <div className="text-red-600 text-center text-bold text-sm mt-2 ">   
             50% off on all our products if you signup/in in today
        </div>
        {children}
    </div>
}
