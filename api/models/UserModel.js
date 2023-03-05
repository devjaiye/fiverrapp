import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
    }, 
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true,
    },
    img: {
        type: String
    }, 
    desc: {
        type: String,
        required: false
    },
    isSeller: {
        type: Boolean,
        default: false 
    }
        
}, {
    timestamps: true
})


export default mongoose.model('Users', userSchema )
