import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import client from "@/db"
//const client = new PrismaClient()

/* export function GET(){
    return Response.json({
        name:"eswara rao landa", 
        email:"hello@gamil.com",
        age:21
    })
}

interface bodyTypes{
    username:string,
    password:string
} */
export async function POST(req:NextRequest,){
    const body = await req.json()

    //headers
     console.log(req.headers.get("autherization"))

     //params
     console.log(req.nextUrl.searchParams.get("name"))

    try {
       const user =  await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
       })
       return NextResponse .json({
        message:"signed in ",
        success:true,
        user
       },)
    } catch (error) { 
        return NextResponse.json({
            message:"error while signin up"
        },{status:411})
    } 
}

export async function GET(req:NextRequest){
    const users = await client.user.findMany()
    return NextResponse.json({
        users
    })
}