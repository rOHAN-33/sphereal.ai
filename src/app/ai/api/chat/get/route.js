import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import ChatDB from "../../../models/Chat";
// import connectDB from "../../../config/db.js"
import connectDB from "../../../config/db";
export async function GET(req){
    try {
        const {userId} = getAuth(req)

        if(!userId){
            return NextResponse.json({
                success:false,
                message:"User not Authenticated"
            })
        }
        
        await connectDB()
        const data = await ChatDB.find({userId})
        
        return NextResponse.json({success:true, data})
    } catch (error) {
        return NextResponse.json({success:false, error:error.message})
    }
}