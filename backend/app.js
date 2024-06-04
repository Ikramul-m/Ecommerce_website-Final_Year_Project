const express = require("express");
const app = express();
app.use(express.json())

const product = require("./routes/productRoute");
const errorMiddleware = require('./middleware/error')

app.use("/api/v1", product);


// MIddleware for Errors
app.use(errorMiddleware)



module.exports = app;
