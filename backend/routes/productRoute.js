const express = require("express");
const { getAllProducts , createProduct } = require("../controllers/productCOntroller");

const router = express.Router();

router.route("/products").get(getAllProducts)
router.route("/products/new").get(createProduct)

module.exports = router;
