const ErrorHandler = require('../utils/errorhander')

module.exports = (err,res,req,next) => {

    err.statusCode = err.statusCode || 500
    err.message = err.message 
}