import { useState } from "react";

export function CreateTodo(){
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("")

return <div>
  <div className="container">
    <input onChange={(e)=>{const value = e.target.value;setTitle(value)}} type="text" placeholder="title" className="input" /><br />
  </div>

  <div className="container">
    <input onChange={(e)=>{const value = e.target.value;setDescription(value)}}type="text" placeholder="description" className="input"/>
  </div>
  
  <button onClick={()=>{
          //axios dont need
          fetch("http://localhost:3000/todo",{
            method:'POST',
            body:JSON.stringify({
              title: title,
              description:description
            }),
            headers:{
              "content-type":"application/json" //in be app.use(express.json()) this check incoming data is json or not
            }
          })
          .then(async function(res){
            const json = await res.json();
            alert("todo created")
        })
        }}>add todo</button>
    </div>
}
