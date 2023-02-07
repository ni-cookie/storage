import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
    type: {
        type:String,
        required:true
    },
    buyerId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    amount: {
        type:Number,
        required:true
    },
    productId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required: true
    },
    content: {
        type: String,
        require:true,
    },
    isReturned: {
        type:Boolean,
        default:false
    }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Document',DocumentSchema);