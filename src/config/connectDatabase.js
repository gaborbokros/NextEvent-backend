import { connect } from "mongoose";

const connectDatabase = async (MONGO_URI) => {
    try {
        await connect(MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

export default connectDatabase;