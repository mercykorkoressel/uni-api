import mongoose from "mongoose";

const schema = mongoose.Schema;
const CourseSchema = new schema({
    Tittle: {type:String, },
    calendar: {type:String, reqiured: true},
    createdAt: {type: Date, default: Date.now()}
    
})

export const CourseModel = mongoose.model('Student',StudentSchema)