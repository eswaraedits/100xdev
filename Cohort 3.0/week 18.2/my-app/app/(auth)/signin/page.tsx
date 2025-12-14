export default function Signin(){
   return <div className="h-screen flex items-center justify-center">
     <div className="  bg-gray-200  rounded-2xl w-80 h-96  shadow-2xl flex justify-center p-10">
        <div className="">
            <div className="  text-2xl bold font-sans text-black">Signin</div>
            <div className="flex-row  mr-5 mt-4 ">
                <LabelledInput label="username"  placeholder="eswara7"/>
                <LabelledInput label ="password"  type="password" placeholder="********" />
            </div>
            <button className="mt-3 px-4 py-2 bg-black rounded-2xl text-lg justify-center text-gray-400">Signin</button>
        </div>
    </div>
    
   </div>
}
interface LabelInputType{
    label:string,
    placeholder:string,
    type?: string
}
function LabelledInput({label,placeholder,type}:LabelInputType){
    return <div>
        <div className="text-black text-lg">{label}</div>
        <input type={type||"text"}  placeholder={placeholder} className="focus:ring-blue-500 rounded-lg p-3 flex justify-center bg-blue-50"/>
    </div>
}