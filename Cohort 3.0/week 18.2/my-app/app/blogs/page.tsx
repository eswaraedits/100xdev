import axios from "axios";

export default async function Blogs(){
    const resopnse = await axios.get("https://jsonplaceholder.typicode.com/todos")
    const data = resopnse.data
    return <div>
    {/* {JSON.stringify(data.data)} */}
    {
        data.map((item:any)=>{
           return  <Todo title={item.title} completed={item.complted}/>
        })
    }
    </div>
}

interface TodoType{
    title:string,
    completed:boolean
}
function Todo({title,completed}:TodoType){
        return <div className=" gap-4 mb-3 items-center px-10 py-5 bg-amber-50 ">
            <div className="text-xl text-red-400">Title: {title}</div>
            <div className="text-2xl text-green-500">{completed?"done":"not done"}</div>
        </div>
}