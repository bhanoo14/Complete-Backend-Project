import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    mobile: {
        required: true,
        type: Number
    },

}, {timestamps: true})

const UserModel = mongoose.model('user', userSchema)

export default UserModel 