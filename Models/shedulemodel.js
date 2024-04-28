import mongoose from "mongoose";

const schema = mongoose.Schema;
const ScheduleSchema = new schema({
   Course: {type:String, },
   day : {type:String, reqiured: true},
   time: {type:String, reqiured: true},

    createdAt: {type: Date, default: Date.now()}
    
})

export const ScheduleModel = mongoose.model('schedule',ScheduleSchema)