const mongoose = require("mongoose")
const { string, boolean } = require("zod")

//.env to protect this but its okay for me(just practicing idc)
mongoose.connect("mongodb+srv://JustDo:eswar10cgpa@mydatabase.seg2ukw.mongodb.net/")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todos = mongoose.model("todos",todoSchema)
module.exports ={
    todos
}