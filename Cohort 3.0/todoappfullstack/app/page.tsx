import Link from "next/link";

export default function Home(){
  return <div>
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 text-3xl text-red-500">
      DOto
      <br/>
      <Link href={"/signup"} className="text-black mx-10 ">Signup</Link>
      <Link href={"/signin"} className="text-black">Signin</Link>
    </div>
  </div>
}