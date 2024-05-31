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



// Update product -- Admin

exports.updateProduct = async (req,res) => {

  let product = Product.findById(req.params.id)

  if(!product) {
    return res.status(500).json({
      success: false,
      message: 'Product not found'
    })
  }

  product = await Product.findByIdAndUpdate(req.params.id,req.body,{
    new: true,
    runValidators: true,
    useFindAndModify: true
  })

  res.status(200).json({
    success: true,
    product
  })
}




// Delete Product 

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    await Product.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};











