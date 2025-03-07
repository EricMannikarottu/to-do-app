import express from "express"
import { connectDB } from "./database/database.js"
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import cookieParser from "cookie-parser"
import { errorMiddleware } from "./middleware/error.js"
import { config } from "dotenv"
import cors from "cors"


const app =express()

app.use(cors({
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

config()
connectDB()

app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/users",userRouter)
app.use("/api/v1/task",taskRouter)


app.get("/",(req,res)=>{

    res.send("nice working")
})

app.use(errorMiddleware)


app.listen(process.env.PORT,()=>{
    console.log(`Server is working on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})

