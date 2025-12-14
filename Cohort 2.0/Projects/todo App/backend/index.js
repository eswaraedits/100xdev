const express = require("express")
const { createTodo, updateTodo } = require("./type")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.post("/todo",(req,res)=>{
    const creatPayload = req.body;
    const parsedPayload = createTodo.safeParse(creatPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            "messege":"wrong inputs"
        })
        return
    }
    //put it in mongodb


})

app.get("/todos",(req,res)=>{
    res.json({
        "hello":"ram"
    })
})

app.put("completed",(req,res)=>{
    const updatePayload = req.body;
    const parsedUpdatePayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            "messege":"wrong id"
        })
        return
    }

})


app.listen(port,console.log("server running"))