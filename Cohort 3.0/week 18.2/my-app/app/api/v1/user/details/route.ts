
//const export  needed in import we can import {get,put...} from ...
//default export will be import page from .page.tsx...

import { NextResponse } from "next/server";

export function GET(){
return NextResponse.json(
    {
        name:"eswar",
        email:"eswar@gmail.com"
    }
)
}
export function POST(){
    return NextResponse.json({
        name:"eswar",
        email:"eweswar@gmail"
    })
}

