const {contants} = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case contants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case contants.NOT_FOUND:
            res.json({
                title: "Not found", 
                message: err.message, 
                stackTrace: err.stack
            })
            case contants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized", 
                message: err.message, 
                stackTrace: err.stack
            })
            case contants.FORBIDDEN:
            res.json({
                title: "Forbidden", 
                message: err.message, 
                stackTrace: err.stack
            })
            case contants.SERVER_ERROR:
            res.json({
                title: "Server Error", 
                message: err.message, 
                stackTrace: err.stack
            })
            
        default:
            console.log("No Error, All good !")
            break;
    }
};

module.exports = errorHandler;