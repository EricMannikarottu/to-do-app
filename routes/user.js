import express from "express"
import { getMyProfile, register, login, logout } from "../controllers/user.js"
import { isAuthenticated } from "../middleware/auth.js"

const router=express.Router()


    router.get("/me",isAuthenticated,getMyProfile)
    router.get("/logout",logout)
    router.post("/new",register)
    router.post("/login",login)

export default router