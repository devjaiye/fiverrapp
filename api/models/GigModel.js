import mongoose from "mongoose";
import { Schema } from "mongoose";

const gigSchema = new Schema({
    userId: {
        type: String,
        required: true, 
    },
    title: {
        type: String, 
        required: true, 
    },
    category: {
        type: String, 
        required: true
    }, 
    cover: {
        type: String,
        required: true
    }, 
    images : {
        type: [String],
        required: false,
    }, 
    desc: {
        type: String,
        required: false, 
    }, 
    totalStars: {
        type: Number, 
        default: 0
    },
    starNumber: {
        type: Number,
        default: 0
    },
    userId: {
        type: String, 
        required: true
    },
    deliveryTime: {
        type: String, 
        required: true
    }, 
    revisionNumber: {
        type: Number,
        require: true, 
    }, 
    features: {
        type: [String], 
        required: false
    }, 
    price: {
        type: Number,
        required: true,
    }, 
    shortDesc: {
        type: String, 
        required: false
    }, 
    shortTitle: {
        type: String, 
        required: true
    }, 
    sales: {
        type: Number, 
        default: 0
    }
}, {
    timestamps: true
})

export default mongoose.model('Gig', gigSchema)