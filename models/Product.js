import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        default: 0,
    },
    supplier: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    isAccepted: {
        type:Boolean,
        default: false
    },
    detailedInformation: {
        type: String,
    },
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Product',ProductSchema);