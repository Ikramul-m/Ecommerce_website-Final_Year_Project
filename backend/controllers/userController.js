const ErrorHander = require("../utils/errorhander");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModels.js");

// Register a user
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a simple id",
      url: "profilepicUrl",
    },
  });

  const token = newUser.getJWTToken()

  res.status(201).json({
    success: true,
    token: token
  });
});
