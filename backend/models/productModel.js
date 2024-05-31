const mongoose = require("mongoose");

const productSchema = mongoose.Schema({


  name: {
    type: String,
    required: [true, "Please enter name"],
    trim: true,
  },


  description: {
    type: String,
    required: [true, "Please enter product description"],
  },


  price: {
    type: Number,
    required: [true, "Please enter price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },


  rating: {
    type: Number,
    default: 0,
  },


  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      
      url: {
        type: String,
        required: true,
      },
    },
  ],


});
