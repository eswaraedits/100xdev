const mangoose =require("mangoose")
mongoose.connect("mongodb+srv://admin:eswar10cgpa@cluster0.wml9zwi.mongodb.net/")

const todoSchema = mongose.Schema({
    title: String,
    description: String,
    complete: Boolean
})
const todo = mongoose.model('todos',todoSchema)
module.exports={
    todo
}