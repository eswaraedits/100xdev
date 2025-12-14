import Image from "next/image";
import client from "@/db"
import axios from 'axios'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
//const prisma = new PrismaClient()

/* async function getUserDetals(){
  await new Promise((r)=>setTimeout(r,5000)) //artificial loading promse 5sec
  
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data
} */

  //next js route woww but its wrong as i am sending req to next js server to next js server what should we do 
  //pre render (next to be server then next sever give to client)

/* async function getUserDetals(){
  const response = await axios.get("http:localhost:3000/api/user")
  return response.data
} we dont need this we can define that call here itself  but it may confuse as we are doing something which has to be backend but its fine as long as we use in server component */
 async function fetchData(){
   const user = await client.user.findFirst()
   return {
    username:user?.username,
    password:user?.password
   }
 }
export default async function Home() {
  const userDetails = await fetchData()
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className=" flex justify-center">
      <div className="border p-8 rounded ">
       <div>
       {userDetails.username}
       </div>
       <div>
      {userDetails.password}
      </div>
      </div>
    </div>
    </div>

  );
}
