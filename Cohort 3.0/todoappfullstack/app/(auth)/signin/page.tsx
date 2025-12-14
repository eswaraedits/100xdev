"use client"
import Link from "next/link"
import { useState } from "react"

export default function Signin(){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    return <div className="flex h-screen justify-center items-center">

        <div className="bg-gray-100 w-80 h-96 rounded-xl">
            <div className="text-2xl font-bold flex justify-center text-gray-700 py-5 ">signin</div>
            <hr />
            <div className="ml-6">
                <div className="mt-5 ">enter username</div>
                <input onChange={e=>setUsername(e.target.value)} type="text" placeholder="eswara7" name="username" className=" px-5 py-1 border-1 rounded-lg mt-1 items-center justify-center"/>
            </div>
            <div className="ml-6">
                <div className="mt-5 ">enter password</div>
                <input onChange={e=>setPassword(e.target.value)} type="text" placeholder="*******" name="password" className=" px-5 py-1 border-1 rounded-lg mt-1 items-center justify-center"/>
            </div>
            <button type="button" className="text-white mt-3 mx-20 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                 sign in
            </button>
            <div className="ml-6 pt-3">didn't have account? <Link href={"/signup"} className="underline text-bold">signup</Link></div>
        </div>
        </div>
}