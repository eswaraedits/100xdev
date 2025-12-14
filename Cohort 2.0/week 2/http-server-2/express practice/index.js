/*const express = require("express")
const app = express()
const port = 3000;

function sum(n){
    let ans = 0;
    for(let i = 0;i<n;i++)
     ans = ans + i;
    return ans;
}
app.get('/',function(req,res){
    const n = req.query.n;
    const anss = sum(n);
    res.send("hai your ans is "+anss)
})
app.listen(port,()=>console.log("server running"))*/

const express = require("express")
const app = express()
const port = 3000;
function sum(n){
    let ans = 0;
    for(let i = 0;i<n;i++)
     ans = ans + i;
    return ans;
}

app.get("/",(req,res)=>{
    const n = req.query.n;
    const anss = sum(n);
    res.send("your sum is" +anss)
})

app.listen(3000,console.log("server is running"))


