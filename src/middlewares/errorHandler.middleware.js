// Error to be sent in a development environment
const sendErrorDev = (err, res) => {
    const { statusCode, status, message, stack, data } = err;
    res.status(statusCode).json({ status, message, stack, data });
}

// Error to be sent in a live environment
const sendErrorProd = (err, res) => {
    const { isOperational, statusCode, status, message, data } = err;
    
    isOperational 
        ? res.status(statusCode).json({ status, message, data })
        : res.status(500).json({ status: "error", message: "Something went wrong!" });
}

// Main error-handling function
const errorHandler = (err, req, res, next) => {
    const { ISDEVMODE } = process.env;
    ISDEVMODE === 'true' ? sendErrorDev(err, res) : sendErrorProd(err, res);
};

export default errorHandler;