import mongoose from "mongoose";

const schema = mongoose.Schema;
const StudentSchema = new schema({
    firstname: {type:String, reqiured: true},
    Surname: {type:String, reqiured: true},
    Email: {type:String, reqiured: true},
    Level: {type:String, },
    Password: {type:String, reqiured: true},
    Course: {type:String, reqiured: true},
    createdAt: {type: Date, default: Date.now()}
    
})

export const StudentModel = mongoose.model('Student',StudentSchema)