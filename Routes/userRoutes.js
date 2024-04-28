import { Router } from "express";
import { UserModel } from "../Models/Usermodel.js";
import bcrypt from "bcryptjs"
import Jwt from "jsonwebtoken"


 const router =Router()

// router.get("/users/register" ,(req,res)=>{
   
//     res.json("this is getting")
// }
// ) 
//ecrypting password (salt=level of encryption)

router.post("/users/register" , async (req,res) => {
const salt = bcrypt.genSaltSync(10)

//hashing encrypted and 'salted" password
const hashedPassword= await bcrypt.hash(req.body.password, salt)
req.body.password = hashedPassword

const user=await UserModel.create(req.body)
// console.log(user)
// const registerUser=UserModel.create(req.body)
    res.json({user})
}
)
//user
router.post("/users/login" ,async(req,res)=>{
    console.log(req.body)
    const user=await UserModel.findOne({ID:req.body.ID})

    const isPasswordMatch= await bcrypt.compare(
        req.body.password, user.password
    )
    if(isPasswordMatch===false){
        console.log("Error Error")
    }
const token=Jwt.sign({id: user._id}, "secretKey" )
console.log(token)
res.status(201).json({token})
})

export default router