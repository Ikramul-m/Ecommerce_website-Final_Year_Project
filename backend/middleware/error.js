const ErrorHandler = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  // Working MongoDB Id error
  if (err.name === "CastError") {
    const messsage = `Resource not found, Invalid: ${err.path}`;
    err = new ErrorHandler(messsage, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message
  });
};
