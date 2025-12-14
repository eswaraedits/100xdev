/* 'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function User(){
const [data,setData] = useState({})
const [loading,setLoading] = useState(true)
useEffect(()=>{
  axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details").then((response)=>{
    setData(response.data)
    setLoading(false)
  })
},[])

if(loading){
  return <div>
    loading....
  </div>
}
return <div className="text-amber-200">
  {data?.name} <br/>
  {data?.email}
</div>
}

point to know : html css js has pre hydrated/pre rendered so no point of renering so re redner render thats why react came right ??

  THERE IS NO POINT OF THIS AS THIS IS CLIENT SIDE RENDERING BROWSER STILL REQUEST BACKEND INSTEADN WE NEED NEXT JS SHOULD HIT SO THAT WE WILL GET PRE RENDERED COMPONENT*/

/* import axios from 'axios'
  export default async function User(){

    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    const data = await response.data

    //await new Promise(r=>setTimeout(r,39000)) // mimicing the loader, but this will stopping or pending the whole page so we use loading.tsx (we dont need loading as the browser will have preredner thjings not reallY?)

    return <div className='text-xl'>
    {data.name} <br/>
    {data.email}
    </div>
  } */
//what if the reqeuest take 10seconds we cant show laoder as (browser/crawer wil see onloy that loader just like in react methods useeffect so ??)


//instead of using external api build next js backend (til now we writing page hahndler now route handler )



import axios from "axios";

export default async function User(){

  const response = await axios.get('http://localhost:3000/api/v1/user/details')
  const data = response.data

  return <div>
    {data.name}
    <br/>
    {data.email}
  </div>
}
