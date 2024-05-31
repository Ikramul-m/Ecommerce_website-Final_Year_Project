const Product = require("../models/productModel");

exports.createProduct = async (req, res, next) => {
  try {

    const { name, description, price, images, category, Stock } = req.body;


    if (Stock === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please enter product stock"
      });
    }

    const product = await Product.create({ name, description, price, images, category, Stock });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error); 
  }
};

exports.getAllProducts = (req, res) => {
  res.status(200).json({ message: "Route is working fine" });
};
