class AppError extends Error {
    constructor(statusCode, message, data) {
        super(message || "Something went wrong");
        this.statusCode = statusCode || 500;
        this.isOperational = true;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        
        if(data) {
            this.data = data;
        }

        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;