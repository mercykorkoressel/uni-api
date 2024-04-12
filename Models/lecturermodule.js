import mongoose from "mongoose";

const schema = mongoose.Schema;
const LectureSchema = new schema({
    firstname: {type:String, reqiured: true},
    Surname: {type:String, reqiured: true},
    Email: {type:String, reqiured: true},
    Course: {type:String, },
    Password:{type:String, reqiured: true},
    createdAt: {type: Date, default: Date.now()}
    
})

export const LectureModel = mongoose.model('Lecture',LectureSchema)