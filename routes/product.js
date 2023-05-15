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
router.put("/", (req, res) => {
    res.json({
        msg: "updated a product"
    })
})
router.delete("/", (req, res) => {
    res.json({
        msg: "deleted a product"
    })
})

export default router