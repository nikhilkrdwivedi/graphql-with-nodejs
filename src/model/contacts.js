import mongoose from "mongoose";

const ContactsSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model( `contacts`, ContactsSchema, `contacts`);