import mongoose from "mongoose";
import 'dotenv/config'; // Ye line zaroor add karein agar server.js mein nahi hai

export const connectDB = async () => {
    try {
        // process.env.MONGODB_URI ka use karein
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("DB Connected Successfully");
    } catch (error) {
        console.log("DB Connection Error: ", error.message);
        process.exit(1); // Error aane par process band kar dein
    }
}