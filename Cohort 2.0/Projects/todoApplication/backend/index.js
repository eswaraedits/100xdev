const express = require('express');
const { createTodo, updateTodo } = require('./type');
const {todo} = require("./db")
const cors = require("cors")
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors()); 
//adding todo
app.post("/todo",async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        return res.status(411).json({messege:"wrong inputs"})
    }
   await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({messege:"todo created"})

})
//getting todos
app.get("/todos",async(req,res)=>{
    const todos = await todo.find({})
    res.json({todos})
   // console.log(todos) //promise
})
app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPaylod = updateTodo.safeParse(updatePayload)
    if(!parsedPaylod.success){
        return res.status(411).json({messege:"wrong inputs"})
    }
   
    await todo.findByIdAndUpdate({_id:req.body.id},{completed:true})
    res.status(200).json({messege:"todo updated"})
})
app.use((err,req,res,next)=>{
    console.log(err)
    return res.status(511).json({messege:"internal server error"})
})
app.listen(port,()=>{console.log(`server running at ${port}`)})