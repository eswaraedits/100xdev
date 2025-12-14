const express = require('express')
const app = express()
const port = 3000;
app.get('/',function(req,res){
    res.send("Hello World")
})
app.get('/html',(req,res)=>{
    res.send("<h1>This is My http server</h1>")}
)
app.listen(port)

