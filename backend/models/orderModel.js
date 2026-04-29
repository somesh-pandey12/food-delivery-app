import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // Jis user ne order kiya 
    items: { type: Array, required: true }, // Order kiye gaye items 
    amount: { type: Number, required: true }, // Total price 
    address: { type: Object, required: true },
    status: { type: String, default: "Food Processing" }, // Current status 
    payment: { type: Boolean, default: false }, // Payment status 
    date: { type: Date, default: Date.now }
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;