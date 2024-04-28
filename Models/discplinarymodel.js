import mongoose from "mongoose";

const schema = mongoose.Schema;
const DiscplinarySchema = new schema({
    studentID:{type:Number, reqiured: true},
    tittle: {type:String, reqiured: true},
    Description: {type:String, reqiured: true},
    
    
})

export const DiscplinaryModel = mongoose.model('Discplinary',DiscplinarySchema)