const Product = require("../models/productModel");





// Create Product -- Admin
exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, price, images, category, Stock } = req.body;

    if (Stock === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please enter product stock",
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      images,
      category,
      Stock,
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};




// Get All product
exports.getAllProducts = async (req,res) => {

  const products = await Product.find()

  res.status(200).json({
    success: true,
    products
  })
}





// exports.getAllProducts = (req, res) => {
//   res.status(200).json({ message: "Route is working fine" });
// };
