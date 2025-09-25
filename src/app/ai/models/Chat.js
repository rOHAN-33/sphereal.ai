import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    message:[
        {
            role:{
                type:String,
                required:true
            },
            content:{
                type:String,
                required:true
            },
            timestamp:{
                type:Number,
                required:true
            }
        }
    ],
    userId:{
        type:String,
        required:true
    }
}, {timestamps:true})


const ChatDB = mongoose.model.User || mongoose.model("User", ChatSchema)

export default ChatDB