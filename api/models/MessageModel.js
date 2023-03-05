import mongoose from "mongoose";
import { Schema } from "mongoose";

const messageSchema = new Schema({
    userId: {
        type: String, 
        required: true
    }, 
    conversationId: {
        type: String, 
        required: true
    }, 
    message: {
        type: String,
        required: false, 
    },
}, {timestamps: true})

export default mongoose.model('Message', messageSchema)