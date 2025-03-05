import mongoose from "mongoose"

const schema= new mongoose.Schema({
    title:{
        type:String,
        unique:true,
    },
    description:{
        type:String,
        unique:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,

    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    createdAt:{
        type:Date,
        dafault: Date.now(),
    }
})

export const Task = mongoose.model("Task",schema)