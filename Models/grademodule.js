import mongoose from "mongoose";

const schema = mongoose.Schema;
const GradeSchema = new schema({
    course: {type:String, reqiured: true},
    Category: {type:String, reqiured: true},
    Grade: {type:String, reqiured: true},
    Marks: {type:data, reqiured: true},
    remarks: {type:String, },
    createdAt: {type: Date, default: Date.now()}
    
})

export const StudentModel = mongoose.model('Student',StudentSchema)