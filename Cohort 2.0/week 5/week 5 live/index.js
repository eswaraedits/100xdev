const express = require("express")
const app = express()
const {createTodo} = require("./type")
const {updateTodo} = require("./type")
const zod = require("zod")
const {todo} = require("./db")


app.use(express.json())

app.post("/todo",async (req,res)=>{
    const createPayload =req.body;
    const parsePayload =createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).send("you send the wrong input")
    }
    return;
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
})

app.get("/todos",async (req,res)=>{
    const todos =await todo.find({})
    console.log(todo) //promise
})

app.put("/completed",(req,res)=>{
    const updatePayload =req.body;
    const parsePayload =createTodo.safeParse(updatePayload)
    if(!updatePayload.success){
        res.status(411).send("you send the wrong input")
    
    return;}
    await todo.update({
        _id.req.body.id},
        {
            completed:true
        }
    })

})
app.listen(3000,console.log("server is running"))