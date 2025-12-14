import { PrismaClient } from "@prisma/client";
import { title } from "process";
const prisma = new PrismaClient()


async function insertUser(username:string,password:string,firstName:string,lastName:string,email:string){
   const response = await prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName,
            email
        }
    })
    console.log(response)
}
//insertUser("username112","eswarpassword","eswar","landa","hello@gmail.com")
//insertUser("uddsername112","eswarpassword","eswar","landa","hellddo@gmail.com")
async function createTodos(userId:number){
    const response = await prisma.todo.create({
        data:{
            title:"learn prisma",
            description:"learning and coding using prisma",
            user_id :1
        }
    })
}
async function getTodos(userid:number){
    const response = await prisma.todo.findMany({
        where:{
            id:userid
        },
        select:{
            title:true,
            description:true,
            user:true //all the detials of the user (JOIN)
        }

    })
    console.log(response)
}

createTodos(1)
getTodos(1);

//