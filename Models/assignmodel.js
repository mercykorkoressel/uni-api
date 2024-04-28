import mongoose from "mongoose";

const schema = mongoose.Schema;
const AssignSchema = new schema({
    studentID:{type:Number, reqiured: true},
    tittle: {type:String, reqiured: true},
    Description: {type:String, reqiured: true},
    
    
})

export const AssignModel = mongoose.model('assign',AssignSchema)