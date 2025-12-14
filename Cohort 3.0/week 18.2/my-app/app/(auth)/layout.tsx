import { ReactNode } from "react";

export default function authLayout({children}:{children:ReactNode}){
    return <div >
        <div className="flex justify-center mt-5 text-red-500">please signup fast to get 40% off on all our products</div>
        {children}
    </div>
}
