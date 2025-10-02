

import {getAuth} from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import ChatDB from "../../../models/Chat"

export default async function POST(req){
    
    try {
        const {userId} = getAuth(req)

    if(!userId){
        return NextResponse.json({success: false, message:"user not authenticated"})
    }


    const chatData = {
        userId,
        messages:[],
        name:"New Chat"
    }

    await connectDB()
    await ChatDB.create(chatData)

    return NextResponse.json({success:true, message:"Chat created"})

    
    } catch (error) {
        return NextResponse.json({success: false, error: error.message})
    }
    
    
}