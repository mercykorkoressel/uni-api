import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoutes from "./Routes/userRoutes.js"
import router from "./Routes/allroutes.js"

dotenv.config()
const app =express();
// middlewares
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


const port=process.env.PORT ||8000
const mongourl =process.env.MONGO_URL

await mongoose.connect(mongourl)
app.use(userRoutes)
app.use(router)

app.listen (port , () =>{
    console.log(`express is running ${port}`)

})