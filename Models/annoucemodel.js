import mongoose from "mongoose";

const schema = mongoose.Schema;
const AnnounceSchema = new schema({
    tittle: {type:String, reqiured: true},
    Description: {type:String, reqiured: true},
    
    
})

export const AnnounceModel = mongoose.model('announce',AnnounceSchema)