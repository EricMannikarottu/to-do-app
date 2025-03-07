import express from "express"
import { connectDB } from "./database/database.js"
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import cookieParser from "cookie-parser"


const app =express()


connectDB()

app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/users",userRouter)
app.use("/api/v1/task",taskRouter)


app.get("/",(req,res)=>{

    res.send("nice working")
})


app.listen(4000,()=>{
    console.log("app is working")
})

