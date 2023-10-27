import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB Connection Successfull`)
    } catch (e) {
        console.log(`Error in db ${e}`.bgRed.white)
    }
};

export default connectDB;