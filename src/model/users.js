import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model( `users`, UsersSchema, `users`);