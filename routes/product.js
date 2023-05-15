import express from "express";
import productModel from "../models/product.js";
import product from "../models/product.js";

const router = express.Router()

// console.log("success")
router.get("/all", async (req, res) => {
    const products = await productModel.find()
    res.json({
        msg: "product get all",
        count: products.length,
        products: products.map(item => {
            return {
                id: item._id,
                title: item.title,
                price: item.price
            }
        })
    })
})
router.get("/:productId", async(req, res) => {
    const product = await productModel.findById(req.params.productId)
    res.json({
        msg: `successful get ${req.params.productId}`,
        product: product
    })
})
router.post("/", async (req, res) => {
    const userInput = new productModel({
        title: req.body.productTitle,
        price: req.body.productPrice,
        description: req.body.productDesc,
        brand: req.body.productBrand,
        company: req.body.productCompany,
        stock: req.body.productStock
    })

    const newProduct = await userInput.save()

    res.json({
        msg: "created a product",
        product: newProduct
    })
})
router.put("/:productId", async (req, res) => {
    const product = await productModel.findById(req.params.productId)
    if(product) {
        product.title = req.body.productTitle ? req.body.productTitle : product.title
        product.price = req.body.productPrice ? req.body.productPrice : product.price
        product.description = req.body.productDesc ? req.body.productDesc : product.description
        product.brand = req.body.productbrand ? req.body.productbrand : product.brand
        product.company = req.body.productCompany ? req.body.productCompany : product.company
        product.stock = req.body.productStock ? req.body.productStock : product.stock
    }
    const updateProduct = await product.save()
    res.json({
        msg: `updated product at ${req.params.productId}`,
        product: updateProduct
    })
})
router.delete("/", async (req, res) => {
    await productModel.deleteMany()
    res.json({
        msg: "deleted all products"
    })
})
router.delete("/:productId", async (req, res) => {
    await productModel.findByIdAndDelete(req.params.productId)
    res.json({
        msg: `deleted a product at ${req.params.productId}`
    })
})

export default router