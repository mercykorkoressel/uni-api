import mongoose from "mongoose";

const schema = mongoose.Schema;
const UserSchema = new schema({
    firstName: {type:String, required: true},
    Surname: {type:String, required: true},
    Email: {type:String, required: true},
    ID:{type:String, required: true},
    Level: {type:String, },
    password: {type:String, required: true},
    Course: {type:String, required: true},
    createdAt: {type: Date, default: Date.now()}
    
})

export const UserModel = mongoose.model('user',UserSchema)