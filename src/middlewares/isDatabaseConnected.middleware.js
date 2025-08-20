import mongoose from "mongoose";
import AppError from "../utilities/AppError.js";

const isDatabaseConnected = (req, res, next) => {
    mongoose.connection.readyState === 1
        ? next()
        : next(new AppError("Database not connected", 500));
}

export default isDatabaseConnected;