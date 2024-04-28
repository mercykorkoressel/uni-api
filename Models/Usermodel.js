import mongoose from "mongoose";

const schema = mongoose.Schema;
const UserSchema = new schema({
    firstName: {type:String, required: true},
    Surname: {type:String, required: true},
    email: {type:String, required: true},
    ID:{type:String, },
    level: {type:String, },
    password: {type:String, required: true},
    Course: {type:String, },
    createdAt: {type: Date, default: Date.now()}
    
})

export const UserModel = mongoose.model('user',UserSchema)