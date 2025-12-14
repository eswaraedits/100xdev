



import { PrismaClient } from "@/app/generated/prisma"
import { NextRequest, NextResponse } from "next/server"

const client = new PrismaClient()
export async function POST(req:NextRequest){
    const data = await req.json()
    console.log(data)

    await client.user.create({
        data
    })
    return NextResponse.json({
        data
    })
}


