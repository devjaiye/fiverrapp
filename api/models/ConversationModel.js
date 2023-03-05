import mongoose from "mongoose";
import { Schema } from "mongoose";

const conversationModel = new Schema({
    id: {
        type: String, 
        required: true, 
        unique: true
    },
    sellerId: {
        type: String, 
        required: true
    }, 
    buyerId:{
        type: String, 
        required: true    
    }, 
    readBySeller: {
        type: Boolean,
        required: true
    }, 
    readByBuyer: {
        type: Boolean,
        required: true
    }, 
    lastMessage: {
        type: String,
        required: false
    }
}, {timestamps: true})

export default mongoose.model('Conversation', conversationModel)
