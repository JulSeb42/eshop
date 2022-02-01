const router = require("express").Router()
const Product = require("../models/Product.model")

// Get all products
router.get("/products", (req, res, next) => {
    Product.find()
        .populate("vendor")
        .then(productFromDb => res.status(200).json(productFromDb))
        .catch(err => next(err))
})

// Get product by Id
router.get("/product/:id", (req, res, next) => {
    Product.findById(req.params.id)
        .populate("vendor")
        .then(productFromDb => res.status(200).json(productFromDb))
        .catch(err => next(err))
})

module.exports = router
