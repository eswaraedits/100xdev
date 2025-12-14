"use client"

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation"
import { signup } from "@/app/actions/user";
export function SignupComponent () {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const router = useRouter()
    return (
      <div className="flex justify-center h-screen">
          <div className="flex flex-col justify-center">
              <div className="w-80  bg-slate-300 py-20 shadow-lg rounded-md h-max">
                  <div className="max-w-sm flex flex-col gap-3 items-center  justify-center">
                      <input onChange={e=>setUsername(e.target.value)}
                      type="text" 
                      placeholder="username"
                      className="rounded outline-none w-52 text-md px-2 py-1"
                      />
                      <input
                      onChange={e=>setPassword(e.target.value)}
                      type="password"
                      placeholder="enter password"
                      className=" rounded outline-none w-52 text-md px-2 py-1"
                      />
                      {/* <button onClick= {async ()=>{
                        await axios.post("http://localhost:3000/api/user",{username,password})
                        router.push("/")
                    }} className="rounded-md w-14 bg-teal-400 text-md">signup</button> */}
                    <button onClick={()=>{ signup(username,password)}} className="rounded-md w-14 bg-teal-400 text-md">signup</button>
                  </div>
               </div>
          </div>
      </div>
    );
  }
  