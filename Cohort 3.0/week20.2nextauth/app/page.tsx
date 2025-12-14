import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";


//client side rendering where we cant perform db,async... as theese are client components
/* export default function Home() {
  return <SessionProvider>
    <RealHome/>
  </SessionProvider>
}

export  function RealHome(){
  const session = useSession()

  return <div className="">
   <div className=" flex justify-end bg-gray-700  text-3xl  ">
     {session.status=="authenticated" && <button onClick={signOut}>logout</button>}
     {session.status=="unauthenticated" && <button onClick={signIn}>login</button>}
      {JSON.stringify(session)}
   </div>
  </div>
} */

//server side rendering but here we can perform db,asyn await...
 // everything rendered in server/nextjs and served to client/browser so fast and secure no loading...
export default async function Home(){
  const session = await getServerSession()
  return <div>
    hi there
    {JSON.stringify(session)}
  </div>
}