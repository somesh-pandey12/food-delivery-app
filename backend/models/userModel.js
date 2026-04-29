import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { minimize: false });

// Pehle check karein ki model pehle se bana toh nahi hai, nahi toh naya banayein
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel; // <--- Yeh line sabse zaroori hai