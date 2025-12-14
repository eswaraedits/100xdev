const mongoose = require('mongoose')
const { boolean } = require('zod')

mongoose.connect("mongodb+srv://eswar:eswar10cgpa@cluster0.wsw6slo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model("todo",todoSchema)
module.exports = {
    todo
}