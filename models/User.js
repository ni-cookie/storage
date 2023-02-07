import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        require: true
    },
    passwordHash: {
        type: String,
        require: true
    }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('User',UserSchema);