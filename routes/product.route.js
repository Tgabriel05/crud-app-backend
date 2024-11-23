const express = require('express');
const router = express.Router();
const Product = require("../models/product.model.js");
const {getProducts, getSingleProduct, postProducts, putProduct, deleteProduct} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.post("/", postProducts)
router.put("/:id", putProduct);
router.delete("/:id", deleteProduct);

module.exports = router;