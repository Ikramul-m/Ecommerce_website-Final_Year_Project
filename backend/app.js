const express = require("express");
const app = express();
app.use(express.json());

const product = require("./routes/productRoute");
const errorMiddleware = require("./middleware/error");
const user = require("./routes/userRoute")

app.use("/api/v1", product);
app.use("/api/v1", user)

// MIddleware for Errors
app.use(errorMiddleware);

module.exports = app;
