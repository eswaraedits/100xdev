/* 'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function User(){
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState()


    useEffect(()=>{
        axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details").then(response=>setData(response.data))
        setLoading(false)
},[])

if(loading){
    return <div className="flex justify-center  ">
        loading...
    </div>
}

return <div>
   <div className="flex flex-col justify-center items-center border-1 p-10">
    <div> {data?.name}</div>
    <div> {data?.email} </div>
   </div>
</div>
} */



//there is no point of this as we are doing client side rendering not the server side renering so n user of thius as the clienet is requesting the backend to get the details 
//so we use server side rendering 
//as we know client side rendeirn is rendering loading to data (which is done by client /browswer ,content changed by client,but in the below process it is handled by next js server )
import axios from "axios";
export default async function User(){
    const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
    const data = response.data;

    console.log("hello from next js server")
    return <div>
        {data.name}
        {data.email}
    </div>
}