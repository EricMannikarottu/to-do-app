import mongoose from "mongoose";

export const connectDB =()=>{

    mongoose.connect("mongodb://localhost:27017/",{
        dbName:"backendapi",
    }).then(()=>console.log("database connected")).catch((e)=>console.log(e))
}