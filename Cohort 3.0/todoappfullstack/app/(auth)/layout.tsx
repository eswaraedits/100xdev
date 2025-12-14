import { ReactNode } from "react";

export default function authLayout({children}:{
    children:ReactNode
}){
    return <div>
        <div className="text-3xl pt-10 flex items-center justify-center text-yellow-700">
        50% off on all our products christamas eve
        </div>
        {children}
    </div>
}
//ReactNode basically means any of type any react component