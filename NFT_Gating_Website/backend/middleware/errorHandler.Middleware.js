export const errorHandler = async (res, statusCode=500, message="Internal Server Error") => {
    return res.status(statusCode).json({
        success: false,
        message
    });
}

// const asyncErrorHandler = (passedFunc) = (req, res, next) => {
//     return Promise.resolve(passedFunc(req, res, next)).catch((error) => {
//         return errorHandler(res, 500, error.message);
//     })
// }

export const asyncErrorHandler = (passedFunc) => async (req, res, next) => {
    try {
        await passedFunc(req, res, next);
    } catch (error) {
        console.error("Async Error Handler", error);
        return errorHandler(res);
    }
}

