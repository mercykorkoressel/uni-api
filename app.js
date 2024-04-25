import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoutes from "./Routes/userRoutes.js"

dotenv.config()
const app =express();
// middlewares
app.use(express.json())


const port=process.env.PORT ||8000
const mongourl =process.env.MONGO_URL

await mongoose.connect(mongourl)
app.use(userRoutes)

app.listen (port , () =>{
    console.log(`express is running ${port}`)

})